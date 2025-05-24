"use client";

import { Hero1 } from "@/components/sections/Krishna_Mehta_Hero1";
import { Features1 } from "@/components/sections/Krishna_Mehta_Features1";
import { Gallery1 } from "@/components/sections/Krishna_Mehta_Gallery1";
import { Testimonial1 } from "@/components/sections/Krishna_Mehta_Testimonial1";
import { Contact1 } from "@/components/sections/Contact1";
import { Footer } from "@/components/Krishna_Mehta_Footer";

export function HomePage({ pages, theme, config }) {
  console.log('HomePage received props:', { pages, theme, config });
  
  const homePage = pages?.home;
  console.log('HomePage data:', homePage);

  if (!homePage) {
    console.error('No home page data found');
    return null;
  }

  return (
    <main className="flex min-h-screen flex-col">
      {homePage.sections.map((section, index) => {
        console.log('Rendering section:', section.type, section);
        
        switch (section.type) {
          case 'hero':
            return (
              <section key={section.id} className="relative">
                <Hero1
                  content={section.content}
                  items={section.items}
                  theme={theme}
                  config={config}
                />
              </section>
            );
          case 'services':
            return (
              <section key={section.id} className="relative bg-background/50">
                <Features1
                  content={section.content}
                  items={section.content?.items}
                  theme={theme}
                  config={config}
                />
              </section>
            );
          case 'gallery':
            return (
              <section key={section.id} className="relative bg-background">
                <Gallery1
                  content={section.content}
                  items={section.content?.items}
                  theme={theme}
                  config={config}
                />
              </section>
            );
          case 'testimonial':
            return (
              <section key={section.id} className="relative bg-background/50">
                <Testimonial1
                  content={section.content}
                  items={section.content?.items}
                  theme={theme}
                  config={config}
                />
              </section>
            );
          case 'contact':
            return (
              <section key={section.id} className="relative bg-background" id="contact">
                <Contact1
                  content={section.content}
                  items={section.content?.items}
                  theme={theme}
                  config={config}
                />
              </section>
            );
          default:
            console.warn('Unknown section type:', section.type);
            return null;
        }
      })}
      <Footer />
    </main>
  );
} 