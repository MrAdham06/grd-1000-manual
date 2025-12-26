import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Schematics() {
  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">System Schematics</h1>
          <p className="text-muted-foreground">Detailed technical diagrams for the GRD-1000 system.</p>
        </div>

        <Tabs defaultValue="architecture" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="architecture">System Architecture</TabsTrigger>
            <TabsTrigger value="installation">Physical Installation</TabsTrigger>
            <TabsTrigger value="block">Block Diagram</TabsTrigger>
          </TabsList>
          
          <TabsContent value="architecture" className="mt-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>System Architecture Diagram</CardTitle>
                <Button variant="outline" size="sm" asChild>
                  <a href="images/system_architecture.png" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download PNG
                  </a>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg overflow-hidden bg-white p-4">
                  <img 
                    src="images/system_architecture.png" 
                    alt="System Architecture Diagram" 
                    className="w-full h-auto"
                  />
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  This diagram illustrates the interconnection of all system components, including sensors, the main control unit (ESP32), and output actuators.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="installation" className="mt-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Physical Installation Diagram</CardTitle>
                <Button variant="outline" size="sm" asChild>
                  <a href="images/physical_installation.png" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download PNG
                  </a>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg overflow-hidden bg-white p-4">
                  <img 
                    src="images/physical_installation.png" 
                    alt="Physical Installation Diagram" 
                    className="w-full h-auto"
                  />
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Shows the recommended mounting locations for the main unit, sensors, and lubrication system on a standard industrial gearbox mixer.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="block" className="mt-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Functional Block Diagram</CardTitle>
                <Button variant="outline" size="sm" asChild>
                  <a href="images/block_diagram.png" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download PNG
                  </a>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg overflow-hidden bg-white p-4">
                  <img 
                    src="images/block_diagram.png" 
                    alt="Functional Block Diagram" 
                    className="w-full h-auto"
                  />
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Explains the logical flow of information from input sensors through signal processing and AI analysis to final decision outcomes.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
