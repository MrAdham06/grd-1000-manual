import Layout from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AlertTriangle, HelpCircle } from "lucide-react";

export default function Troubleshooting() {
  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Troubleshooting Guide</h1>
          <p className="text-muted-foreground">Solutions for common issues with the GRD-1000 system.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-bold text-left">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                    Device does not power on
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pl-8">
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Check that the 24V DC power adapter is securely plugged into both the main unit and a working power outlet.</li>
                    <li>Verify the outlet has power by testing with another device.</li>
                    <li>Inspect the power cable for any visible damage.</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="font-bold text-left">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                    Solid Red LED on startup
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pl-8">
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Power cycle the device (unplug for 10 seconds, then replug).</li>
                    <li>If the problem persists, check that all sensor cables are securely connected.</li>
                    <li>If connections are good, a sensor or the main unit may be faulty. Contact support.</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="font-bold text-left">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-yellow-600" />
                    Yellow LED is always on
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pl-8">
                  <ol className="list-decimal list-inside space-y-2">
                    <li>The gearbox may have a persistent minor issue. Perform a manual inspection.</li>
                    <li>The baseline calibration may have been performed incorrectly. Power cycle the device and allow it to recalibrate while the gearbox is running under normal conditions.</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="font-bold text-left">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-yellow-600" />
                    Lubricant is not dispensing
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pl-8">
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Check the lubricant reservoir level.</li>
                    <li>Inspect the silicone tubing for kinks or blockages.</li>
                    <li>Ensure the pump power cable is securely connected to the main unit.</li>
                    <li>Listen for the pump motor sound when the system attempts to lubricate.</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg h-fit">
            <h3 className="font-bold mb-4">Still need help?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              If you cannot resolve the issue using this guide, please contact the technical support team.
            </p>
            <div className="text-sm font-mono bg-background p-3 rounded border">
              support@htu.edu.jo
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
