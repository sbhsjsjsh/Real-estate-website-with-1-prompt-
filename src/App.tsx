/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load components below the fold
const FeaturedProperties = lazy(() => import('./components/FeaturedProperties'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Loading fallback component
const SectionLoader = () => (
  <div className="flex justify-center items-center py-24">
    <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col overflow-hidden relative">
      {/* Gradient Accents */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gradient-to-br from-blue-100/40 via-purple-100/40 to-amber-100/30 rounded-full blur-3xl -z-0 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-gradient-to-tr from-purple-100/40 via-blue-50/40 to-transparent rounded-full blur-3xl -z-0 pointer-events-none" />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <FeaturedProperties />
          <About />
          <Services />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-40 bg-white" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
