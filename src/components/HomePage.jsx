"use client";

import { useApp } from "@/contexts/AppContext";
import { Hero1 } from "@/components/sections/Hero1";
import { Features1 } from "@/components/sections/Features1";
import { Gallery1 } from "@/components/sections/Gallery1";
import { Testimonial1 } from "@/components/sections/Testimonial1";
import { Contact1 } from "@/components/sections/Contact1";

export function HomePage() {
  const { pages, theme, config } = useApp();
  const homePage = pages?.home;

  if (!homePage) {
    return null;
  }

  return (
    <main className="flex min-h-screen flex-col">
      {homePage.sections.map((section, index) => {
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
            return null;
        }
      })}
    </main>
  );
} 