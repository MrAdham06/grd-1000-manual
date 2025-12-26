import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, Radio } from "lucide-react";

export default function Operation() {
  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Operating Instructions</h1>
          <p className="text-muted-foreground">Guide to system startup, LED indicators, and normal operation.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <PlayCircle className="h-5 w-5 text-primary" />
                System Startup Sequence
              </h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6 flex gap-4">
                    <div className="font-mono text-2xl font-bold text-muted-foreground/30">01</div>
                    <div>
                      <h3 className="font-bold">Power On & Self-Test</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Turn on the device. All three LEDs (Green, Yellow, Red) will flash for 5 seconds to confirm functionality.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex gap-4">
                    <div className="font-mono text-2xl font-bold text-muted-foreground/30">02</div>
                    <div>
                      <h3 className="font-bold">Calibration Phase (10 mins)</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        The device learns the baseline vibration/acoustic signature. <span className="text-yellow-600 font-medium">Yellow LED blinks</span> during this phase. Ensure gearbox is running normally.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex gap-4">
                    <div className="font-mono text-2xl font-bold text-muted-foreground/30">03</div>
                    <div>
                      <h3 className="font-bold">Monitoring Mode</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Once calibrated, the <span className="text-green-600 font-medium">Green LED illuminates solid</span>. The system is now actively protecting your equipment.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Radio className="h-5 w-5 text-primary" />
                LED Status Indicators
              </h2>
              <Card>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[180px]">LED State</TableHead>
                      <TableHead>Meaning & Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell><Badge className="bg-green-600 hover:bg-green-700">Solid Green</Badge></TableCell>
                      <TableCell className="text-sm">System Normal. No action required.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><Badge variant="outline" className="text-yellow-600 border-yellow-600 animate-pulse">Blinking Yellow</Badge></TableCell>
                      <TableCell className="text-sm">Minor Anomaly. Potential issue detected. Schedule inspection.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><Badge className="bg-yellow-600 hover:bg-yellow-700">Solid Yellow</Badge></TableCell>
                      <TableCell className="text-sm">Lubrication Active. Pump is dispensing oil.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><Badge variant="outline" className="text-red-600 border-red-600 animate-pulse">Blinking Red</Badge></TableCell>
                      <TableCell className="text-sm font-medium">High-Priority Alert. Significant anomaly. Inspect immediately.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><Badge className="bg-red-600 hover:bg-red-700">Solid Red</Badge></TableCell>
                      <TableCell className="text-sm font-medium">Critical Failure / System Fault. Shut down equipment.</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><Badge variant="outline" className="text-orange-500 border-orange-500 animate-pulse">Blinking Orange</Badge></TableCell>
                      <TableCell className="text-sm font-medium">Low Oil Level. Refill reservoir immediately.</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Card>
            </section>
          </div>

          <div className="space-y-6">
            <div className="sticky top-24">
              <h3 className="font-mono font-bold text-sm uppercase text-muted-foreground mb-2">Logic Flow</h3>
              <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
                <img 
                  src="/images/block_diagram.png" 
                  alt="Block Diagram" 
                  className="w-full h-auto"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">Figure 2: System Logic Block Diagram</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
