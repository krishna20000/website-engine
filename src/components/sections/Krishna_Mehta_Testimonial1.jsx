"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Quote } from 'lucide-react';

export function Testimonial1({ content, items, theme, config }) {
  const {
    title = 'Client Success Stories',
    subtitle = 'Testimonials',
    description = 'Hear from our satisfied clients about their experience working with us.',
  } = content || {};

  return (
    <section className="py-24 bg-background/50">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-medium uppercase tracking-wider text-primary"
          >
            {subtitle}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground"
          >
            {description}
          </motion.p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items?.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="relative rounded-2xl bg-card p-8 shadow-lg border border-border/50 hover:border-primary/20"
            >
              <div className="absolute -top-4 left-8">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Quote className="h-4 w-4" />
                </div>
              </div>
              <div className="mt-4 flex items-center space-x-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-primary/20">
                  <Image
                    src={testimonial.image_url}
                    alt={testimonial.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.title}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.subtitle}</p>
                </div>
              </div>
              <p className="mt-6 text-muted-foreground">{testimonial.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 