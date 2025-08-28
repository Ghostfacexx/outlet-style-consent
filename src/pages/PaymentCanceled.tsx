import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { XCircle, ArrowLeft, ShoppingBag } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function PaymentCanceled() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Helmet>
        <title>Payment Canceled - Continue Shopping</title>
        <meta name="description" content="Your payment was canceled. You can continue shopping or try again." />
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-background to-secondary/20 py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="text-center shadow-lg">
            <CardHeader className="pb-6">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
                <XCircle className="h-10 w-10 text-red-600" />
              </div>
              <CardTitle className="text-3xl font-bold text-foreground">
                Payment Canceled
              </CardTitle>
              <p className="text-lg text-muted-foreground mt-2">
                No worries! Your payment was canceled and no charges were made.
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="text-muted-foreground">
                <p className="mb-2">
                  You can continue browsing our products or try the payment process again.
                </p>
                <p>
                  If you experienced any issues, please contact our support team.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group">
                  <Link to="/">
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Home
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/clothing">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Continue Shopping
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