import { notFound } from 'next/navigation';
import { headers } from 'next/headers';
import { fetchPageData } from '@/lib/api';
import MOCK_DATA from '@/data/d2d.json';
import { HomePage } from '@/components/Krishna_Mehta_HomePage';
import { Navbar } from '@/components/Krishna_Mehta_Navbar';

// Force dynamic rendering since we're using headers()
export const dynamic = 'force-dynamic';
// Remove edge runtime as it's causing issues with data transformation
// export const runtime = 'edge';

// Helper function to get subdomain from host
function getSubdomain(host) {
  console.log("Getting subdomain from host:", host);

  // Always return d2d for localhost for development
  if (host.includes("localhost")) {
    console.log("Localhost detected, returning 'd2d'");
    return "d2d";
  }

  // Extract subdomain from host (e.g., 'mysite.example.com' -> 'mysite')
  const parts = host.split(".");
  // Check if we have a subdomain
  if (parts.length > 2) {
    console.log("Subdomain detected:", parts[0]);
    return parts[0];
  }

  // Default subdomain or handle www
  const subdomain = parts[0] === "www" ? "default" : parts[0];
  console.log("Using subdomain:", subdomain);
  return subdomain;
}

export async function generateMetadata() {
  try {
    const headersList = await headers();
    const host = headersList.get('host') || 'localhost:3000';
    const subdomain = getSubdomain(host);
    // Use MOCK_DATA in development for metadata as well
    const siteData = process.env.NODE_ENV === 'development' ? MOCK_DATA : await fetchPageData(subdomain);

    return {
      title: siteData?.site?.name || MOCK_DATA.site.name,
      description: siteData?.site?.description || MOCK_DATA.site.description,
    };
  } catch (error) {
    console.error('Error in generateMetadata:', error);
    return {
      title: MOCK_DATA.site.name,
      description: MOCK_DATA.site.description,
    };
  }
}

export default async function Home() {
  try {
    console.log('Starting Home page render');
    console.log('NODE_ENV:', process.env.NODE_ENV);
    
    const headersList = await headers();
    const host = headersList.get('host') || 'localhost:3000';
    const subdomain = getSubdomain(host);
    
    // Use MOCK_DATA in development, fetch data in production
    const siteData = process.env.NODE_ENV === 'development' ? MOCK_DATA : await fetchPageData(subdomain);
    console.log('Using siteData:', JSON.stringify(siteData, null, 2));
    
    // Ensure we have the required data structure
    if (!siteData || !siteData.pages || !siteData.pages.home) {
      console.error('Invalid site data structure or no home page data:', JSON.stringify(siteData, null, 2));
      return notFound();
    }

    const { pages, theme, config } = siteData;
    console.log('Rendering with pages:', JSON.stringify(pages, null, 2));

    return (
      <>
        <Navbar />
        <HomePage pages={pages} theme={theme} config={config} />
      </>
    );
  } catch (error) {
    console.error('Error in Home page:', error);
    // Fallback to notFound if data fetching fails in production
    return notFound();
  }
}
