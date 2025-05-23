"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ScrollAnimation } from '../animations/ScrollAnimation';

export function Gallery1({ content, items, theme, config }) {
  const {
    title = 'Our Work',
    subtitle = 'Style Gallery',
    description = 'Check out some of our best work and get inspired for your next visit. From classic cuts to modern styles, we do it all.',
  } = content || {};

  return (
    <section id="gallery" className="py-32 bg-background">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollAnimation animation="fadeUp" delay={0}>
            <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full">
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

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items?.map((item, index) => (
            <ScrollAnimation 
              key={item.id}
              animation={index % 2 === 0 ? 'slideLeft' : 'slideRight'}
              delay={0.1 * index}
              duration={0.6}
            >
              <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/20">
                <div className="relative w-full h-full">
                  <Image
                    src={item.image_url}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                      {item.category}
                    </span>
                    <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                    <Link
                      href="/book"
                      className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      Book This Style
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
} 