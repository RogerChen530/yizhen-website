import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WorksSection from '@/components/WorksSection';
import ExhibitionsSection from '@/components/ExhibitionsSection';
import AwardsSection from '@/components/AwardsSection';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  return (
    <div className="ink-enter" style={{ background: '#121212', minHeight: '100vh' }}>
      <HeroSection />
      <AboutSection />
      <WorksSection />
      <ExhibitionsSection />
      <AwardsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}