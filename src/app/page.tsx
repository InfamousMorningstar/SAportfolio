import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Interests from '@/components/Interests';
import Footer from '@/components/Footer';
import ScrollToTopArrow from '@/components/ScrollToTopArrow';
import CursorTrail from '@/components/CursorTrail';
import { AuroraBackground } from '@/components/ui/AuroraBackground';
import Section from '@/components/Section';
import LoadingScreen from '@/components/LoadingScreen';

export default function HomePage() {
  return (
    <div className="min-h-screen text-foreground relative">
      <LoadingScreen />
      <CursorTrail />
      <AuroraBackground />
      <Navbar />

      <main className="flex flex-col gap-0">
        <Hero />
        
        <Section>
          <About />
        </Section>
        
        <Projects />
        
        <Section>
          <Experience />
        </Section>
        
        <Section>
          <Education />
        </Section>
        
        <Section>
          <Interests />
        </Section>

      </main>
      <ScrollToTopArrow />
      <Footer />
    </div>
  );
}
