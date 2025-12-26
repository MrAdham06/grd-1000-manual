import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, CheckSquare } from "lucide-react";

export default function Installation() {
  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Setup and Installation</h1>
          <p className="text-muted-foreground">Follow these steps to properly install the GRD-1000 on your equipment.</p>
        </div>

        <Alert variant="destructive" className="border-l-4 border-l-destructive bg-destructive/10">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Safety Warning</AlertTitle>
          <AlertDescription>
            Ensure the gearbox mixer is powered off and locked out (LOTO) before beginning installation.
          </AlertDescription>
        </Alert>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
                Package Contents
              </h2>
              <Card>
                <CardContent className="p-6">
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {[
                      "1x GRD-1000 Main Unit",
                      "1x Vibration Sensor (Magnetic)",
                      "1x Acoustic Sensor + Bracket",
                      "1x Lubrication Pump Assembly",
                      "1x 500ml Lubricant Reservoir",
                      "2m Silicone Tubing",
                      "1x 24V DC Power Adapter"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckSquare className="h-4 w-4 text-muted-foreground" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>

            <section className="space-y-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
                Installation Steps
              </h2>
              
              <div className="space-y-4">
                <div className="border-l-2 border-muted pl-4 pb-4">
                  <h3 className="font-bold text-lg">Step 1: Mount Main Unit</h3>
                  <p className="text-muted-foreground mt-1">Secure the main unit to a stable surface within 1 meter of the gearbox, using the four mounting holes on the enclosure.</p>
                </div>
                
                <div className="border-l-2 border-muted pl-4 pb-4">
                  <h3 className="font-bold text-lg">Step 2: Install Sensors</h3>
                  <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                    <li>Attach vibration sensor to a flat point on the bearing housing.</li>
                    <li>Mount acoustic sensor with clear line-of-sight (approx 30cm distance).</li>
                    <li>Connect cables to labeled ports on the main unit.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-muted pl-4 pb-4">
                  <h3 className="font-bold text-lg">Step 3: Setup Lubrication</h3>
                  <p className="text-muted-foreground mt-1">Mount pump and reservoir. Run tubing to the gearbox injection point. Fill reservoir with specified oil.</p>
                </div>

                <div className="border-l-2 border-muted pl-4 pb-4">
                  <h3 className="font-bold text-lg">Step 4: Connect Power</h3>
                  <p className="text-muted-foreground mt-1">Connect the 24V DC adapter to the main unit and a power source.</p>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <div className="sticky top-24">
              <h3 className="font-mono font-bold text-sm uppercase text-muted-foreground mb-2">Reference Diagram</h3>
              <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
                <img 
                  src="/images/physical_installation.png" 
                  alt="Physical Installation Diagram" 
                  className="w-full h-auto"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">Figure 1: Physical Installation Layout</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
