import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Interests from '@/components/Interests';
import SystemsStrip from '@/components/SystemsStrip';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';
import ScrollToTopArrow from '@/components/ScrollToTopArrow';
import CursorTrail from '@/components/CursorTrail';
import { ParticleNetworkBackground } from '@/components/ui/ParticleNetworkBackground';
import Section from '@/components/Section';
import LoadingScreen from '@/components/LoadingScreen';

export default function HomePage() {
  return (
    <div className="min-h-screen text-foreground relative">
      <LoadingScreen />
      <CursorTrail />
      <ParticleNetworkBackground />
      <Navbar />

      <main className="flex flex-col gap-0">
        <Hero />

        {/* Deliberately ahead of About: under an infrastructure-focused
            positioning the strongest evidence should be the first thing after
            the name. Not wrapped in <Section> — that fades content to opacity 0
            at the edges of its scroll range, which is wrong for a link people
            are meant to click. */}
        <SystemsStrip />

        <Section>
          <About />
        </Section>

        {/* Also unwrapped: these sections contain links, and Section fades its
            children to opacity 0 at the edges of the scroll range. */}
        <Skills />

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
