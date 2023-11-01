import {BasicExamples} from '@/components/sections/basic-examples'
import {Catch} from '@/components/sections/catch'
import {FAQ} from '@/components/sections/faq'
import {Features} from '@/components/sections/features'
import {Hero} from '@/components/sections/hero'
import {IntegrationExamples} from '@/components/sections/integration-examples'
import {JSSurvey} from '@/components/sections/js-survey'
import {ReplacementExamples} from '@/components/sections/replacement-examples'
import {Screenshots} from '@/components/sections/screenshots'
import {TechLogos} from '@/components/sections/tech-logos'
import {Tweets} from '@/components/sections/tweets'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TechLogos />
      <JSSurvey />
      <Features />
      <BasicExamples />
      <ReplacementExamples />
      <IntegrationExamples />
      <Screenshots />
      <Tweets />
      <Catch />
      <FAQ />
    </main>
  )
}