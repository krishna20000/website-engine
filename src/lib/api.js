import { MOCK_DATA } from '@/data/d2d.json';

export async function fetchPageData(subdomain) {
  // In a real application, this would fetch data from an API
  // For now, we'll return the mock data
  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 100));

    // Return mock data with proper structure
    return {
      site: {
        name: MOCK_DATA.site.name || 'Elite Cuts Barber Shop',
        description: MOCK_DATA.site.description || 'Premium barber shop offering classic and modern haircuts, beard grooming, and styling services.',
        logo: MOCK_DATA.site.logo || '/logo.png',
        favicon: MOCK_DATA.site.favicon || '/favicon.ico',
        theme: MOCK_DATA.theme || {
          primary: '#D4AF37',
          secondary: '#1a1a1a',
          accent: '#2a2a2a',
          background: '#000000',
          foreground: '#ffffff'
        }
      },
      pages: MOCK_DATA.pages || {}
    };
  } catch (error) {
    console.error('Error fetching page data:', error);
    // Return default data if there's an error
    return {
      site: {
        name: 'Elite Cuts Barber Shop',
        description: 'Premium barber shop offering classic and modern haircuts, beard grooming, and styling services.',
        logo: '/logo.png',
        favicon: '/favicon.ico',
        theme: {
          primary: '#D4AF37',
          secondary: '#1a1a1a',
          accent: '#2a2a2a',
          background: '#000000',
          foreground: '#ffffff'
        }
      },
      pages: {}
    };
  }
} 