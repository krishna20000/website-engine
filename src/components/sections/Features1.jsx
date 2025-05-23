"use client";

import { motion } from 'framer-motion';
import { Scissors, Clock, Star, Sparkles, ScissorsIcon, Droplet, Scissors as Scissors2 } from 'lucide-react';
import { ScrollAnimation } from '../animations/ScrollAnimation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Features1({ content, items, theme, config }) {
  const {
    title = 'Our Services',
    subtitle = 'Premium Grooming',
    description = 'Experience the art of traditional barbering with modern techniques. Our expert barbers are dedicated to giving you the perfect look.',
    cta_text = 'View All Services',
    cta_link = '/services'
  } = content || {};

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Scissors':
        return <Scissors className="w-6 h-6" />;
      case 'ScissorsIcon':
        return <ScissorsIcon className="w-6 h-6" />;
      case 'Droplet':
        return <Droplet className="w-6 h-6" />;
      case 'Combo':
        return <Sparkles className="w-6 h-6" />;
      case 'Razor':
        return <Scissors2 className="w-6 h-6" />;
      case 'Shave':
        return <Scissors className="w-6 h-6" />;
      default:
        return <Scissors className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-32 bg-background">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollAnimation animation="fadeUp" delay={0}>
            <span className="inline-flex items-center px-4 py-2 text-sm font-medium tracking-wide text-primary bg-primary/10 rounded-full">
              <Star className="w-4 h-4 mr-2" />
              {subtitle}
            </span>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fadeUp" delay={0.1}>
            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              {title}
            </h2>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fadeUp" delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          </ScrollAnimation>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items?.map((service, index) => (
            <ScrollAnimation 
              key={service.id}
              animation="scale"
              delay={0.1 * index}
              duration={0.6}
            >
              <div className="group relative rounded-2xl bg-card p-8 hover:bg-card/80 transition-all duration-300 border border-border/50 hover:border-primary/20">
                <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={service.image_url}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <Button asChild variant="secondary" size="sm" className="w-full">
                        <Link href="/book">Book Now</Link>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-5 left-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {getIcon(service.icon)}
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold tracking-tight">{service.title}</h3>
                  <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1.5" />
                      {service.duration}
                    </span>
                    <span className="text-primary font-medium">{service.price}</span>
                  </div>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{service.description}</p>
                  {service.features && (
                    <ul className="mt-4 space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <Star className="w-4 h-4 mr-2 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {cta_text && cta_link && (
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href={cta_link}>{cta_text}</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
} 