import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTopArrow from '@/components/ScrollToTopArrow';
import CursorTrail from '@/components/CursorTrail';
import Scene3D from '@/components/Scene3D';
import Section from '@/components/Section';

export default function HomePage() {
  return (
    <div className="min-h-screen text-foreground relative">
      <CursorTrail />
      <Scene3D />
      <Navbar />

      <main className="flex flex-col gap-0">
        <Hero />
        
        <Section>
          <About />
        </Section>
        
        <Section>
          <Projects />
        </Section>
        
        <Section>
          <Experience />
        </Section>
        
        <Section>
          <Education />
        </Section>
        
        <Section>
          <Contact />
        </Section>
      </main>
      <ScrollToTopArrow />
      <Footer />
    </div>
  );
}
