"use client";

import * as React from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import dynamic from "next/dynamic";

const PremiumUIWrapper = dynamic(() => import("@/components/PremiumUIWrapper"), { ssr: false });
const AIChatBot = dynamic(() => import("@/components/AIChatBot"), { ssr: false });
const FloatingCTA = dynamic(() => import("@/components/FloatingCTA"), { ssr: false });

interface ClientProvidersProps {
  children: any;
}

export default function ClientProviders({ children }: ClientProvidersProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    // Delay loading overlays by 1200ms to allow smooth initial mount and first paint
    const timer = setTimeout(() => {
      setMounted(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <TooltipProvider>
      {children as any}
      <Toaster />
      <Sonner />
      {mounted && (
        <>
          <PremiumUIWrapper />
          <AIChatBot />
          <FloatingCTA />
        </>
      )}
    </TooltipProvider>
  );
}
