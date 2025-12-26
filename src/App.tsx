import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router as WouterRouter } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Specs from "./pages/Specs";
import Installation from "./pages/Installation";
import Operation from "./pages/Operation";
import Maintenance from "./pages/Maintenance";
import Troubleshooting from "./pages/Troubleshooting";
import FAQ from "./pages/FAQ";
import Schematics from "./pages/Schematics";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/specs" component={Specs} />
      <Route path="/installation" component={Installation} />
      <Route path="/operation" component={Operation} />
      <Route path="/maintenance" component={Maintenance} />
      <Route path="/troubleshooting" component={Troubleshooting} />
      <Route path="/faq" component={FAQ} />
      <Route path="/schematics" component={Schematics} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Use hash location for GitHub Pages compatibility
  const [location] = useHashLocation();

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <WouterRouter hook={useHashLocation}>
            <Router />
          </WouterRouter>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
