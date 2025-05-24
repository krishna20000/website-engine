import { MOCK_DATA } from '@/data/d2d.json';

// Ensure MOCK_DATA is always available
const DEFAULT_DATA = {
  site: {
    name: 'Elite Cuts Barber Shop',
    description: 'Premium barber shop offering classic and modern haircuts, beard grooming, and styling services.',
    logo: '/logo.png',
    favicon: '/favicon.ico',
  },
  theme: {
    primary: '#D4AF37',
    secondary: '#1a1a1a',
    accent: '#2a2a2a',
    background: '#000000',
    foreground: '#ffffff'
  },
  config: {
    font_body: 'Inter',
    font_heading: 'Poppins',
    max_width: '1280px'
  },
  pages: {
    home: {
      sections: []
    }
  }
};

export async function fetchPageData(subdomain) {
  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 100));

    // For development, always return mock data
    if (process.env.NODE_ENV === 'development') {
      return MOCK_DATA || DEFAULT_DATA;
    }

    // Return mock data with proper structure
    return {
      site: {
        name: MOCK_DATA?.site?.name || DEFAULT_DATA.site.name,
        description: MOCK_DATA?.site?.description || DEFAULT_DATA.site.description,
        logo: MOCK_DATA?.site?.logo || DEFAULT_DATA.site.logo,
        favicon: MOCK_DATA?.site?.favicon || DEFAULT_DATA.site.favicon,
      },
      theme: MOCK_DATA?.theme || DEFAULT_DATA.theme,
      config: MOCK_DATA?.config || DEFAULT_DATA.config,
      pages: MOCK_DATA?.pages || DEFAULT_DATA.pages
    };
  } catch (error) {
    console.error('Error in fetchPageData:', error);
    return DEFAULT_DATA;
  }
} 