import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("create-payment function called");
    
    // Handle empty body gracefully
    let requestBody = {};
    try {
      const bodyText = await req.text();
      if (bodyText && bodyText.trim()) {
        requestBody = JSON.parse(bodyText);
      }
    } catch (parseError) {
      console.log("Request body parse error (using defaults):", parseError);
    }
    
    console.log("Request body:", requestBody);
    
    const { amount = 4999, currency = "usd", productName = "Premium Product" } = requestBody;

    // Create Supabase client
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    // Try to get authenticated user, but allow guest checkout
    let user = null;
    let customerEmail = "guest@example.com"; // Default for guest checkout
    
    const authHeader = req.headers.get("Authorization");
    if (authHeader) {
      try {
        const token = authHeader.replace("Bearer ", "");
        const { data } = await supabaseClient.auth.getUser(token);
        if (data.user?.email) {
          user = data.user;
          customerEmail = user.email;
        }
      } catch (error) {
        console.log("User not authenticated, proceeding with guest checkout");
      }
    }

    // Initialize Stripe
    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    console.log("Stripe key exists:", !!stripeKey);
    console.log("Stripe key starts with sk_test_:", stripeKey?.startsWith("sk_test_"));
    
    const stripe = new Stripe(stripeKey || "", {
      apiVersion: "2023-10-16",
    });

    // Check if customer exists for this email
    const customers = await stripe.customers.list({ 
      email: customerEmail, 
      limit: 1 
    });
    
    let customerId;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
    }

    // Create a one-time payment session
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : customerEmail,
      line_items: [
        {
          price_data: {
            currency,
            product_data: { 
              name: productName,
              description: "High-quality premium product"
            },
            unit_amount: amount, // Amount in cents
          },
          quantity: 1,
        },
      ],
      mode: "payment", // One-time payment
      success_url: `${req.headers.get("origin")}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/payment-canceled`,
    });

    return new Response(JSON.stringify({ 
      url: session.url,
      sessionId: session.id 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Payment creation error:", error);
    console.error("Error details:", {
      message: error.message,
      type: error.type,
      code: error.code,
      stack: error.stack
    });
    return new Response(JSON.stringify({ 
      error: error.message || "Failed to create payment session",
      details: error.type || "Unknown error"
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});