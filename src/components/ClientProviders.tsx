"use client";

import * as React from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import PremiumUIWrapper from "@/components/PremiumUIWrapper";
import AIChatBot from "@/components/AIChatBot";
import FloatingCTA from "@/components/FloatingCTA";

interface ClientProvidersProps {
  children: any;
}

export default function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <TooltipProvider>
      {children as any}
      <Toaster />
      <Sonner />
      <PremiumUIWrapper />
      <AIChatBot />
      <FloatingCTA />
    </TooltipProvider>
  );
}
