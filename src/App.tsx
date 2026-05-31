import { Navbar } from './components/Navbar';
import { MobileNav } from './components/MobileNav';

import { Hero } from './sections/Hero';
import { ServicesSection } from './sections/ServicesSection';
import { CredentialsSection } from './sections/CredentialsSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { FAQSection } from './sections/FAQSection';
import { ContactCTA } from './sections/ContactCTA';
import { LocationSection } from './sections/LocationSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <main className="bg-[#020817] text-[#F8FAFC] font-sans relative overflow-x-hidden">
      {/* Cinematic Ambient Lighting - Optimized without CSS blur */}
      <div 
        className="fixed top-[-30%] right-[-20%] w-[1000px] h-[1000px] pointer-events-none z-0" 
        style={{ background: 'radial-gradient(circle, rgba(197,160,89,0.06) 0%, transparent 70%)' }}
      />
      <div 
        className="fixed bottom-[-15%] left-[-20%] w-[800px] h-[800px] pointer-events-none z-0" 
        style={{ background: 'radial-gradient(circle, rgba(30,58,138,0.1) 0%, transparent 70%)' }}
      />
      
      <Navbar />
      <MobileNav />
      <Hero />
      
      <CredentialsSection />
      
      <div className="relative z-10">
        <ServicesSection />
      </div>
      
      <TestimonialsSection />
      <FAQSection />

      <ContactCTA />
      <LocationSection />
      <Footer />
    </main>
  );
}
