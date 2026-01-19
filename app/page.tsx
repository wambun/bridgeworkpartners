import {
  HeroSection,
  ServicesSection,
  AboutPreview,
  StatsSection,
  TeamPreview,
  CoreValuesSection,
  CTASection,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesSection />
      <StatsSection />
      <CoreValuesSection />
      <TeamPreview />
      <CTASection />
    </>
  );
}
