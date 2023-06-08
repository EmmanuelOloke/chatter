'use client';

import { AboutChatter } from '@/components/AboutChatter';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import NavBar from '@/components/NavBar';
import { Testimonial } from '@/components/Testimonial';
import { WhyJoinChatter } from '@/components/WhyJoinChatter';
import { WriteReadConnect } from '@/components/WriteReadConnect';

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <AboutChatter />
      <WhyJoinChatter />
      <Testimonial />
      <WriteReadConnect />
      <Footer />
    </main>
  );
}
