import MOCK_DATA from '@/data/d2d.json';

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
    // Simulate API call delay (can keep this if needed for testing loading states)
    await new Promise(resolve => setTimeout(resolve, 100));

    // Always return mock data for now, mimicking localhost behavior
    console.log('fetchPageData: Returning MOCK_DATA');
    return MOCK_DATA || DEFAULT_DATA;

  } catch (error) {
    console.error('Error in fetchPageData:', error);
    return DEFAULT_DATA;
  }
} 