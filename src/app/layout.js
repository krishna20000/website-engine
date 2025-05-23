import "./globals.css";
import { Inter } from "next/font/google";
import { AppProvider } from "@/contexts/AppContext";
import ThemeProvider from "@/contexts/ThemeProvider";
import { fetchSiteConfigAndThemes } from "@/lib/api/siteservice";
import { headers } from "next/headers";
import { ThemeProvider as NewThemeProvider } from "@/components/theme-provider";
import { FloatingActions } from '@/components/FloatingActions';

const inter = Inter({ subsets: ["latin"] });

// Helper function to get subdomain from host
function getSubdomain(host) {
  console.log("Getting subdomain from host (layout):", host);
  
  // Always return d2d for localhost for development
  if (host.includes("localhost")) {
    console.log("Localhost detected in layout, returning 'd2d'");
    return "d2d";
  }
  
  // Extract subdomain from host (e.g., 'mysite.example.com' -> 'mysite')
  const parts = host.split(".");
  // Check if we have a subdomain
  if (parts.length > 2) {
    console.log("Subdomain detected in layout:", parts[0]);
    return parts[0];
  }
  
  // Default subdomain or handle www
  const subdomain = parts[0] === "www" ? "default" : parts[0];
  console.log("Using subdomain in layout:", subdomain);
  return subdomain;
}

// Force dynamic rendering since we're using headers()
export const dynamic = "force-dynamic";
export const runtime = "edge";

export const metadata = {
  title: "Modern Dark Theme Website",
  description: "A modern website with dark theme and responsive design",
};

export default async function RootLayout({ children }) {
  try {
    // Get the host from headers to determine subdomain
    const headersList = await headers();
    const host = headersList.get("host") || "localhost:3000";
    console.log("Host in RootLayout:", host);
    
    // Get subdomain through our helper function
    const subdomain = getSubdomain(host);

    // Fetch site configuration and themes
    const siteData = await fetchSiteConfigAndThemes(subdomain);

    return (
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
          <AppProvider initialSite={siteData}>
            <ThemeProvider>
              <NewThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem={false}
                disableTransitionOnChange
              >
                {children}
                <FloatingActions />
              </NewThemeProvider>
            </ThemeProvider>
          </AppProvider>
        </body>
      </html>
    );
  } catch (error) {
    console.error("Error in RootLayout:", error);

    // Fallback to basic layout with default data
    const defaultSiteData = {
      site: {
        name: "Default Site",
        description: "A default website",
      },
      theme: {
        primary: "#D4AF37",
        secondary: "#1a1a1a",
        accent: "#2a2a2a",
        background: "#000000",
        foreground: "#ffffff"
      },
      config: {
        font_body: "Inter",
        font_heading: "Poppins",
        max_width: "1280px"
      },
      pages: {
        home: {
          sections: []
        }
      },
      siteMeta: {
        title: "Default Site",
        description: "A default website"
      }
    };

    return (
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
          <AppProvider initialSite={defaultSiteData}>
            <ThemeProvider>
              <NewThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem={false}
                disableTransitionOnChange
              >
                {children}
                <FloatingActions />
              </NewThemeProvider>
            </ThemeProvider>
          </AppProvider>
        </body>
      </html>
    );
  }
}
