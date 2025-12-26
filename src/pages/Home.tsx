import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, ShieldCheck, Activity, Clock, Zap } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="font-mono text-primary border-primary">MODEL: GRD-1000</Badge>
            <Badge variant="secondary" className="font-mono">REV: 1.0</Badge>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Gearbox Reliability Enhancement Device</h1>
          <p className="text-xl text-muted-foreground">
            Integrated predictive maintenance system for industrial gearbox mixers.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                System Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                The GRD-1000 is an advanced, integrated system designed for the predictive maintenance of industrial gearbox mixers. It combines real-time vibration analysis, acoustic monitoring, oil level sensing, and a closed-loop automatic lubrication system to prevent unexpected equipment failures.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                Key Benefits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {[
                "Prevent unexpected gearbox failures",
                "Extend operational lifespan",
                "Improve worker safety",
                "Provide early fault warnings",
                "Optimize maintenance schedules"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold border-b pb-2">Application Areas</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { title: "Manufacturing", icon: Zap },
              { title: "Food & Beverage", icon: Activity },
              { title: "Chemical", icon: ShieldCheck },
              { title: "Mining & Cement", icon: Clock },
              { title: "Pulp & Paper", icon: CheckCircle2 },
            ].map((area, i) => (
              <Card key={i} className="bg-secondary/50 border-none">
                <CardContent className="p-4 flex items-center gap-3">
                  <area.icon className="h-5 w-5 text-primary" />
                  <span className="font-medium">{area.title}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-muted/30 p-6 rounded-lg border border-dashed border-border">
          <h3 className="font-mono font-bold text-sm uppercase text-muted-foreground mb-4">System Architecture Preview</h3>
          <img 
            src="/images/system_architecture.png" 
            alt="System Architecture" 
            className="w-full rounded-md border shadow-sm bg-white"
          />
        </div>
      </div>
    </Layout>
  );
}
