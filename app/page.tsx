import { HeroSection } from '@/components/sections/hero';
import { FeaturedProjects } from '@/components/sections/featured-projects';
import { Skills } from '@/components/sections/skills';
import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturedProjects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}