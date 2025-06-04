export const metadata = {
  title: 'Philadelphia Cup Regatta 2025 - Liberty Sailing Club',
  description: 'Join us in celebrating the return of the Philadelphia Cup, the ultimate sailing regatta uniting clubs across the region! Liberty Sailing Club is taking the helm as the organizing club, and we would love to have you as part of this event.',
}

import Hero from '@/components/hero-home'
import FeaturesBlocks from '@/components/features-blocks'
import Features from '@/components/features-home'
import Features02 from '@/components/features-home-02'
import Features03 from '@/components/features-home-03'
import Target from '@/components/target'
import PricingSection from '@/components/pricing'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <>
      <Hero />
      <Features02 />
      <Cta />
      <Features />

      <Features03 />


      {/*<Hero />*/}
      {/*<FeaturesBlocks />*/}
      {/*<Features />*/}
      {/*<Features02 />*/}
      {/*<Features03 />*/}
      {/*<Target />*/}
      {/*<PricingSection />*/}
      {/*<Cta />*/}
    </>
  )
}
