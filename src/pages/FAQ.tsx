import Layout from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "Does the GRD-1000 require a Wi-Fi connection to work?",
      answer: "No, the core monitoring and automatic lubrication functions work completely offline. Wi-Fi is only required if you want to receive remote alerts on your phone or computer."
    },
    {
      question: "How often do I need to refill the lubricant?",
      answer: "This depends on your gearbox usage. For typical 24/7 operation, the 500ml reservoir lasts about 3-4 months. The system will alert you (Blinking Orange LED) when the level is low."
    },
    {
      question: "Can I use any type of oil in the reservoir?",
      answer: "You must use the lubricant grade specified by your gearbox manufacturer. The GRD-1000 pump is compatible with all standard industrial gear oils up to ISO VG 460 viscosity."
    },
    {
      question: "Is the device waterproof?",
      answer: "Yes, the main unit and sensors are IP67 rated, meaning they are dust-tight and can withstand temporary immersion in water. They are safe for washdown environments."
    },
    {
      question: "What happens if the power goes out?",
      answer: "The device will turn off. When power is restored, it automatically restarts, performs a self-test, and resumes monitoring. No manual reset is needed."
    },
    {
      question: "Can I install the sensors on a painted surface?",
      answer: "For the best accuracy, we recommend removing paint from the small spot where the vibration sensor attaches. The acoustic sensor is not affected by paint."
    },
    {
      question: "How do I know if the sensors are working correctly?",
      answer: "The device performs a self-check every time it starts. If a sensor is disconnected or faulty, the Red LED will turn solid. You can also check the 'System Status' in the mobile app if connected."
    }
  ];

  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Frequently Asked Questions</h1>
          <p className="text-muted-foreground">Common questions about installation, operation, and maintenance.</p>
        </div>

        <div className="max-w-3xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border rounded-lg px-4 bg-card">
                <AccordionTrigger className="font-medium text-left hover:no-underline py-4">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-primary shrink-0" />
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pl-8 pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Layout>
  );
}
