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
    <div className="min-h-screen">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* Trust Indicators Bar */}
        <TrustBar />

        {/* 2. Services Section */}
        <Services />

        {/* 3. Specialties Section */}
        <Specialties />

        {/* 4. Featured Doctors */}
        <FeaturedDoctors />

        {/* 5. How It Works */}
        <HowItWorks />

        {/* 6. Telemedicine Showcase */}
        <Telemedicine />

        {/* 7. Patient Testimonials */}
        <Testimonials />

        {/* 8. Healthcare Technology */}
        <Technology />

        {/* 9. Mobile App */}
        <MobileApp />

        {/* 10. FAQ */}
        <FAQ />

        {/* 11. Final CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  );
}
