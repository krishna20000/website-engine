"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Scissors, Users, Star } from 'lucide-react';

export function Hero1({ content, items, theme, config }) {
  const {
    title = 'Classic Cuts, Modern Style',
    subtitle = 'Welcome to Elite Cuts',
    description = 'Experience the perfect blend of traditional barbering and contemporary style. Our expert barbers are dedicated to giving you the look you deserve.',
    image_url,
    background_url,
    cta = {
      primary: {
        text: 'Book Now',
        link: '/book'
      },
      secondary: {
        text: 'View Services',
        link: '#services'
      }
    },
    stats = [
      {
        value: '10+',
        label: 'Years Experience'
      },
      {
        value: '5000+',
        label: 'Happy Clients'
      },
      {
        value: '4.9',
        label: 'Customer Rating'
      }
    ]
  } = content || {};

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {background_url && (
          <Image
            src={background_url}
            alt="Barber Shop Background"
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full"
            >
              <Scissors className="w-4 h-4 mr-2" />
              {subtitle}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 text-lg text-muted-foreground"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <Link
                href={cta.primary.link}
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
              >
                {cta.primary.text}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href={cta.secondary.link}
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-foreground bg-background/50 backdrop-blur-sm rounded-full hover:bg-background/80 transition-all duration-300"
              >
                {cta.secondary.text}
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-3 gap-8 mt-16"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-primary/5 rounded-3xl transform rotate-3" />
            <div className="absolute inset-0 bg-primary/10 rounded-3xl transform -rotate-3" />
            {image_url && (
              <div className="relative aspect-square rounded-3xl overflow-hidden">
                <Image
                  src={image_url}
                  alt="Barber Shop Interior"
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 