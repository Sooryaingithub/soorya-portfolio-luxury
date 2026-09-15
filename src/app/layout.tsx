import MinimalBackground from "@/components/visuals/MinimalBackground";
import Navigation from "@/components/layout/Navigation";
import CommandPalette from "@/components/ui/CommandPalette";
import { ThemeProvider } from "@/components/theme-provider";
import SmoothScroll from "@/components/layout/SmoothScroll";
import "./globals.css";
import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://soorya-portfolio-vert.vercel.app"),
  title: {
    default: "Soorya Sendilnath | AI Systems Engineer & Spatial Computing",
    template: "%s | Soorya Sendilnath",
  },
  description:
    "Portfolio of Soorya Sendilnath, an AI Systems Engineer and IoT Specialist from Chennai, India. Specializing in on-device AI, spatial computing, cloud infrastructure, and distributed edge intelligence.",
  keywords: [
    "Soorya Sendilnath",
    "AI Systems Engineer",
    "Spatial Computing",
    "On-Device AI",
    "CoreML",
    "MLX",
    "SwiftUI",
    "Azure Cloud",
    "Edge Computing",
    "SkillTree",
    "JarvisGemma",
    "Machine Learning Engineer",
    "Chennai Developer",
  ],
  authors: [
    {
      name: "Soorya Sendilnath",
      url: "https://github.com/Sooryaingithub",
    },
  ],
  creator: "Soorya Sendilnath",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://soorya-portfolio-vert.vercel.app",
    siteName: "Soorya Sendilnath — Portfolio",
    title: "Soorya Sendilnath | AI Systems Engineer & Spatial Computing",
    description:
      "Engineering high-performance AI systems, spatial intelligence, and distributed edge-cloud architectures.",
    images: [
      {
        url: "/images/weather-image2.png",
        width: 1200,
        height: 630,
        alt: "Soorya Sendilnath Portfolio Systems Architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soorya Sendilnath | AI Systems Engineer",
    description:
      "Engineering high-performance AI systems, spatial intelligence, and distributed edge-cloud architectures.",
    images: ["/images/weather-image2.png"],
    creator: "@sooryasendilnath",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://soorya-portfolio-vert.vercel.app",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://soorya-portfolio-vert.vercel.app/#person",
      name: "Soorya Sendilnath",
      jobTitle: "AI Systems Engineer",
      description:
        "Specialist in On-Device AI, Spatial Computing, Cloud Infrastructure, and IoT Edge Systems.",
      url: "https://soorya-portfolio-vert.vercel.app",
      sameAs: [
        "https://github.com/Sooryaingithub",
        "https://www.linkedin.com/in/soorya-sendilnath/",
      ],
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "SRM Institute of Science and Technology",
      },
      knowsAbout: [
        "Artificial Intelligence",
        "Spatial Computing",
        "Cloud Engineering",
        "Edge Computing",
        "CoreML",
        "SwiftUI",
        "Machine Learning",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://soorya-portfolio-vert.vercel.app/#website",
      url: "https://soorya-portfolio-vert.vercel.app",
      name: "Soorya Sendilnath Portfolio",
      publisher: {
        "@id": "https://soorya-portfolio-vert.vercel.app/#person",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col relative antialiased bg-background text-foreground transition-colors duration-300 font-sans selection:bg-cyan-500/20 selection:text-cyan-200">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <SmoothScroll>
            <MinimalBackground />
            <Navigation />
            <CommandPalette />
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
