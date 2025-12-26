import Layout from "@/components/Layout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Mic, Activity, Droplets, Box, Zap } from "lucide-react";

export default function Specs() {
  const specs = [
    {
      category: "Vibration Sensor",
      icon: Activity,
      details: [
        { label: "Type", value: "Piezoelectric Accelerometer" },
        { label: "Range", value: "±50g" },
        { label: "Frequency Response", value: "1 Hz to 10 kHz" }
      ]
    },
    {
      category: "Acoustic Sensor",
      icon: Mic,
      details: [
        { label: "Type", value: "MEMS Microphone" },
        { label: "Sensitivity", value: "-42 dB" },
        { label: "Frequency Range", value: "100 Hz to 15 kHz" }
      ]
    },
    {
      category: "Lubrication System",
      icon: Droplets,
      details: [
        { label: "Pump Type", value: "12V DC Peristaltic Pump" },
        { label: "Reservoir Capacity", value: "500ml" },
        { label: "Oil Level Sensor", value: "Vertical Float Switch (Stainless Steel)" },
        { label: "Tubing", value: "4mm OD, Chemical-Resistant Silicone" }
      ]
    },
    {
      category: "Processing Unit",
      icon: Cpu,
      details: [
        { label: "Microcontroller", value: "ESP32 Dual-Core" },
        { label: "Memory", value: "4MB Flash" },
        { label: "Connectivity", value: "Wi-Fi 802.11 b/g/n" }
      ]
    },
    {
      category: "Enclosure",
      icon: Box,
      details: [
        { label: "Material", value: "Die-cast Aluminum" },
        { label: "IP Rating", value: "IP67 (Dust-tight and water-resistant)" },
        { label: "Mounting", value: "4-point wall mount" }
      ]
    },
    {
      category: "Power",
      icon: Zap,
      details: [
        { label: "Input Voltage", value: "24V DC" },
        { label: "Consumption", value: "5W (avg), 15W (peak)" },
        { label: "Adapter", value: "Included 24V DC Adapter" }
      ]
    }
  ];

  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Technical Specifications</h1>
          <p className="text-muted-foreground">Detailed hardware specifications for the GRD-1000 system components.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {specs.map((spec, i) => (
            <Card key={i} className="overflow-hidden">
              <CardHeader className="bg-muted/50 border-b py-3">
                <CardTitle className="text-base font-mono flex items-center gap-2">
                  <spec.icon className="h-4 w-4 text-primary" />
                  {spec.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableBody>
                    {spec.details.map((detail, j) => (
                      <TableRow key={j} className="hover:bg-transparent">
                        <TableCell className="font-medium text-muted-foreground w-1/3 pl-6">{detail.label}</TableCell>
                        <TableCell className="font-mono text-sm">{detail.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
