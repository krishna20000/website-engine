import { notFound } from 'next/navigation';
import { headers } from 'next/headers';
import { fetchPageData } from '@/lib/api';
import { MOCK_DATA } from '@/data/d2d.json';
import { HomePage } from '@/components/HomePage';
import { Navbar } from '@/components/Navbar';

// Force dynamic rendering since we're using headers()
export const dynamic = 'force-dynamic';
export const runtime = 'edge';

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
  const headersList = headers();
  const host = headersList.get('host') || 'localhost:3000';
  const subdomain = getSubdomain(host);

  try {
    const siteData = await fetchPageData(subdomain);
    return {
      title: siteData.site.name,
      description: siteData.site.description,
    };
  } catch (error) {
    console.error('Error fetching site data:', error);
    return {
      title: MOCK_DATA.site.name,
      description: MOCK_DATA.site.description,
    };
  }
}

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
    </>
  );
}
