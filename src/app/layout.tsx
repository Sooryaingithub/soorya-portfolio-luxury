import MinimalBackground from "@/components/visuals/MinimalBackground";
import Navigation from "@/components/layout/Navigation";
import CommandPalette from "@/components/ui/CommandPalette";
import { ThemeProvider } from "@/components/theme-provider";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { LiquidGlassScene } from "simple-liquid-glass/backdrop";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soorya Sendilnath - AI Systems Engineer",
  description: "Portfolio of Soorya Sendilnath. Building privacy-first AI across cloud infrastructure, local intelligence, and spatial computing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`min-h-full flex flex-col relative antialiased bg-background text-foreground transition-colors duration-300 font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SmoothScroll>
            <LiquidGlassScene>
              <MinimalBackground />
              <Navigation />
              <CommandPalette />
              {children}
            </LiquidGlassScene>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
