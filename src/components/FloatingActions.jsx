"use client";

import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { ScrollAnimation } from './animations/ScrollAnimation';

export function FloatingActions() {
  const handleCall = () => {
    window.location.href = 'tel:+1234567890'; // Replace with your phone number
  };

  const handleMessage = () => {
    window.open('https://wa.me/1234567890', '_blank'); // Replace with your WhatsApp number
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      <ScrollAnimation animation="scale" delay={0.2}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCall}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
          aria-label="Call us"
        >
          <Phone className="h-6 w-6" />
        </motion.button>
      </ScrollAnimation>

      <ScrollAnimation animation="scale" delay={0.3}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleMessage}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition-colors"
          aria-label="Message us on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </motion.button>
      </ScrollAnimation>
    </div>
  );
} 