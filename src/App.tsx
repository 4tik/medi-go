import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import Specialties from './components/Specialties';
import FeaturedDoctors from './components/FeaturedDoctors';
import HowItWorks from './components/HowItWorks';
import Telemedicine from './components/Telemedicine';
import Testimonials from './components/Testimonials';
import Technology from './components/Technology';
import MobileApp from './components/MobileApp';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden selection:bg-sky-500 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 1. Hero Section with Live Search & Telemedicine highlights */}
        <Hero />

        {/* Trust Indicators Bar */}
        <TrustBar />

        {/* 2. Comprehensive Healthcare Services */}
        <Services />

        {/* 3. Medical Specialties */}
        <Specialties />

        {/* 4. Featured Board-Certified Doctors */}
        <FeaturedDoctors />

        {/* 5. Simple 4-Step Patient Process */}
        <HowItWorks />

        {/* 6. Telemedicine Platform Showcase */}
        <Telemedicine />

        {/* 7. Patient Testimonials Carousel */}
        <Testimonials />

        {/* 8. Enterprise Healthcare Technology & Security */}
        <Technology />

        {/* 9. Mobile App Showcase */}
        <MobileApp />

        {/* 10. Frequently Asked Questions Accordion */}
        <FAQ />

        {/* 11. Final Call to Action */}
        <FinalCTA />
      </main>

      {/* Footer & Accreditations */}
      <Footer />

      {/* Floating Scroll to Top button */}
      <ScrollToTop />
    </div>
  );
}
