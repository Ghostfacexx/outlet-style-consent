import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ShoppingBag, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Helmet>
        <title>Payment Successful - Thank You!</title>
        <meta name="description" content="Your payment has been processed successfully. Thank you for your purchase!" />
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-background to-secondary/20 py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="text-center shadow-lg">
            <CardHeader className="pb-6">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <CardTitle className="text-3xl font-bold text-foreground">
                Payment Successful!
              </CardTitle>
              <p className="text-lg text-muted-foreground mt-2">
                Thank you for your purchase. Your order has been confirmed.
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {sessionId && (
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">Order Reference</p>
                  <p className="font-mono text-sm break-all">{sessionId}</p>
                </div>
              )}

              <div className="text-muted-foreground">
                <p className="mb-2">
                  🎉 Your payment has been processed successfully
                </p>
                <p className="mb-4">
                  You should receive a confirmation email shortly
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group">
                  <Link to="/">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Continue Shopping
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}