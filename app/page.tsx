import { BenefitsSection } from '@/components/sections/benefits-section';
import { ClassroomImpactSection } from '@/components/sections/classroom-impact-section';
import { ConclusionSection } from '@/components/sections/conclusion-section';
import { ExamplesSection } from '@/components/sections/examples-section';
import { ExplainerSection } from '@/components/sections/explainer-section';
import { GolemanSection } from '@/components/sections/goleman-section';
import { HeroSection } from '@/components/sections/hero-section';
import { SectionNavigator } from '@/components/sections/section-navigator';
import { SiteBackground } from '@/components/layout/site-background';

export default function Home() {
  return (
    <main id="top" className="relative min-h-screen overflow-x-clip text-ink">
      <SiteBackground />
      <div className="relative">
        <SectionNavigator />
        <HeroSection />
        <ExplainerSection />
        <GolemanSection />
        <ClassroomImpactSection />
        <BenefitsSection />
        <ExamplesSection />
        <ConclusionSection />
      </div>
    </main>
  );
}
