import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Settings, BookOpen, Wrench, Activity, AlertTriangle, Info, HelpCircle } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Overview", icon: Info },
    { href: "/specs", label: "Technical Specs", icon: Activity },
    { href: "/installation", label: "Installation", icon: Wrench },
    { href: "/operation", label: "Operation", icon: Settings },
    { href: "/maintenance", label: "Maintenance", icon: Wrench },
    { href: "/troubleshooting", label: "Troubleshooting", icon: AlertTriangle },
    { href: "/faq", label: "FAQ", icon: HelpCircle },

  ];

  const NavContent = () => (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b border-sidebar-border">
        <h1 className="text-xl font-bold text-sidebar-foreground flex items-center gap-2">
          <Settings className="h-6 w-6 text-primary" />
          GRD-1000
        </h1>
        <p className="text-xs text-sidebar-foreground/70 mt-1">User Manual v1.0</p>
      </div>
      <ScrollArea className="flex-1 py-4">
        <nav className="px-4 space-y-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-3 font-mono text-sm",
                  location === item.href
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>
      </ScrollArea>
      <div className="p-6 border-t border-sidebar-border">
        <div className="text-xs text-sidebar-foreground/50 font-mono">
          <p>Al-Hussein Technical University</p>
          <p className="mt-1">MPEP Project Fall 2025</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex bg-background">
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 bg-sidebar border-r border-sidebar-border fixed inset-y-0 z-50">
        <NavContent />
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-sidebar border-b border-sidebar-border z-50 flex items-center px-4 justify-between">
        <div className="flex items-center gap-2 font-bold text-sidebar-foreground">
          <Settings className="h-5 w-5 text-primary" />
          GRD-1000
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-sidebar-foreground">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64 bg-sidebar border-r border-sidebar-border">
            <NavContent />
          </SheetContent>
        </Sheet>
      </div>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 pt-16 md:pt-0 min-h-screen">
        <div className="container max-w-4xl py-8 md:py-12 animate-in fade-in duration-500">
          {children}
        </div>
      </main>
    </div>
  );
}
