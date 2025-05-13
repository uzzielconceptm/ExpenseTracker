import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import StoryLandingPage from "@/pages/StoryLandingPage";
import LandingPage from "@/pages/LandingPage";
import { ChaosProvider } from "./lib/ChaosContext";

function Router() {
  return (
    <Switch>
      <Route path="/" component={StoryLandingPage} />
      <Route path="/story" component={StoryLandingPage} />
      <Route path="/classic" component={LandingPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ChaosProvider>
          <Toaster />
          <Router />
        </ChaosProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
