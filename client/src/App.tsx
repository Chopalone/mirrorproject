import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import ManageDebt from "@/pages/manage-debt";
import FindLoans from "@/pages/find-loans";
import BeSavvy from "@/pages/be-savvy";
import MeetUs from "@/pages/meet-us";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/manage-debt" component={ManageDebt} />
      <Route path="/find-loans" component={FindLoans} />
      <Route path="/be-savvy" component={BeSavvy} />
      <Route path="/meet-us" component={MeetUs} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
