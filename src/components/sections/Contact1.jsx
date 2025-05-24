"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
// import Image from 'next/image'; // Remove Image import
import { ScrollAnimation } from '../animations/ScrollAnimation';

export function Contact1({ content, items, theme, config }) {
  const {
    title = 'Get in Touch',
    subtitle = 'Contact Us',
    description = 'Ready to start your project? Contact us today and let\'s create something amazing together.',
  } = content || {};

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError('');

    // This is a placeholder for actual form submission logic
    // In a real application, you would send the data to your backend/API
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Success
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      // Error
      setSubmitError('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollAnimation animation="fadeUp" delay={0}>
            <span className="inline-block text-sm font-medium uppercase tracking-wider text-primary">
              {subtitle}
            </span>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeUp" delay={0.1}>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h2>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeUp" delay={0.2}>
            <p className="mt-4 text-lg text-muted-foreground">
              {description}
            </p>
          </ScrollAnimation>
        </div>

        {/* Use items-stretch for equal height columns on large screens */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:items-stretch">
          {/* Contact Form */}
          <ScrollAnimation animation="slideRight" delay={0.3} duration={0.6}>
            <div className="rounded-2xl bg-card p-8 shadow-lg border border-border/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="bg-background/30 border-border focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="bg-background/30 border-border focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help?"
                    className="bg-background/30 border-border focus:border-primary focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message..."
                    className="bg-background/30 border-border focus:border-primary focus:ring-primary/20"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
                {submitSuccess && (
                  <p className="text-center text-success">Thank you for your message! We will get back to you shortly.</p>
                )}
                {submitError && (
                  <p className="text-center text-error">{submitError}</p>
                )}
              </form>
            </div>
          </ScrollAnimation>

          {/* Contact Information or Map */}
          <ScrollAnimation animation="slideLeft" delay={0.3} duration={0.6}>
            {/* Add h-full to this container to make it fill the column height */}
            <div className="rounded-2xl bg-card p-8 shadow-lg border border-border/50 h-full flex flex-col">
              {/* Map container - remove fixed h-64, rely on flex grow and h-full */}
              <div className="relative w-full flex-grow rounded-lg overflow-hidden">
                 <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0195859424376!2d-122.08424968468146!3d37.42206597982381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba0285a059b9%3A0x8a0d05a9b5570560!2sGoogleplex!5e0!3m2!1sen!2sus!4v1608152040795!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
              </div>

              {/* Contact Information (Optional based on your d2d.json) */}
               {items && items.length > 0 && (
                <div className="space-y-8 mt-8">
                  {items?.map((item, index) => (
                    <div key={item.id} className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        {item.icon === 'mail' && <Mail className="h-6 w-6" />}
                        {item.icon === 'phone' && <Phone className="h-6 w-6" />}
                        {item.icon === 'location' && <MapPin className="h-6 w-6" />}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="mt-1 text-muted-foreground">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
               )}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
} 