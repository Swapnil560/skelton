import Hero from '../components/Hero'
import Stats from '../components/Stats'
import HowItWorks from '../components/HowItWorks'
import RevolutionaryFeatures from '../components/RevolutionaryFeatures'
import Audience from '../components/Audience'
import SmartToothbrush from '../components/SmartToothbrush'
import AppInAction from '../components/AppInAction'
import Security from '../components/Security'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import Features from '../components/Features'

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <HowItWorks />
      <RevolutionaryFeatures />
      <Audience />
      <SmartToothbrush />
      <AppInAction />
      <Security />
      <Testimonials />
      <FAQ />
      <CTA />
      <Features />
    </main>
  )
}