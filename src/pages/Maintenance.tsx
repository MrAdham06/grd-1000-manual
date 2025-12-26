import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Droplet, Eye, Search } from "lucide-react";

export default function Maintenance() {
  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Maintenance Schedule</h1>
          <p className="text-muted-foreground">Routine maintenance tasks to ensure the GRD-1000 operates reliably.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-t-4 border-t-green-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Droplet className="h-5 w-5 text-green-600" />
                Weekly
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-bold mb-2">Refill Lubricant</h3>
              <p className="text-sm text-muted-foreground">
                Check the lubricant reservoir level. Refill if below 20%. The yellow LED will blink slowly if the level is critically low.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Eye className="h-5 w-5 text-blue-600" />
                Monthly
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-bold mb-2">Clean Sensors</h3>
              <p className="text-sm text-muted-foreground">
                Wipe the sensor housings with a clean, dry cloth to remove dust and debris that may affect acoustic readings.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-orange-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Search className="h-5 w-5 text-orange-600" />
                Quarterly
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-bold mb-2">Inspect Tubing</h3>
              <p className="text-sm text-muted-foreground">
                Check the silicone lubrication tubing for cracks, kinks, or blockages. Replace if any wear is visible.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Warranty Information</h2>
          <Card className="bg-muted/30">
            <CardContent className="p-6">
              <p className="text-sm leading-relaxed">
                The GRD-1000 comes with a <strong>1-year limited warranty</strong> covering defects in materials and workmanship. 
                The warranty does not cover damage caused by improper installation, misuse, or unauthorized modifications.
                For technical support, please contact the project team at Al-Hussein Technical University.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
