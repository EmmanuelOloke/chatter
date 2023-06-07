'use client';

import { AboutChatter } from '@/components/AboutChatter';
import { Hero } from '@/components/Hero';
import NavBar from '@/components/NavBar';
import { WhyJoinChatter } from '@/components/WhyJoinChatter';

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <AboutChatter />
      <WhyJoinChatter />
    </main>
  );
}
