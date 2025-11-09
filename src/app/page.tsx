import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTopArrow from '@/components/ScrollToTopArrow';
import ScrollProgress from '@/components/ScrollProgress';
import CursorTrail from '@/components/CursorTrail';
import AmbientParticles from '@/components/AmbientParticles';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <ScrollProgress />
      <CursorTrail />
      <AmbientParticles />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <ScrollToTopArrow />
      <Footer />
    </div>
  );
}
