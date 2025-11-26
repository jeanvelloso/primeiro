import Layout from '../components/layout/Layout';
import PageSection from '../components/ui/PageSection';
import CtaButton from '../components/ui/CtaButton';
import FeatureCard from '../components/ui/FeatureCard';
import PricingCard from '../components/ui/PricingCard';
import TestimonialCard from '../components/ui/TestimonialCard';

export default function Home({ settings }) {
  return (
    <Layout settings={settings}>
      {/* HERO */}
      <PageSection
        id="hero"
        bgColor="bg-gradient-to-br from-brand to-brandDark text-white"
        vPadding="py-20 md:py-32"
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {settings.sections.hero.title}
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-95 leading-relaxed">
            {settings.sections.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <CtaButton
              variant="primary"
              href={settings.business.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-brand hover:bg-gray-100"
            >
              {settings.sections.hero.ctaPrimary}
            </CtaButton>
            <CtaButton
              variant="outline"
              href={settings.business.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="border-white text-white hover:bg-white hover:text-brand"
            >
              {settings.sections.hero.ctaSecondary}
            </CtaButton>
          </div>
          {settings.sections.hero.stats && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-16">
              {settings.sections.hero.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </PageSection>

      {/* ABOUT */}
      <PageSection id="about" title={settings.sections.about.title}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {settings.sections.about.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 h-64 md:h-96 flex items-center justify-center">
            {/*<p className="text-gray-400 text-center">
              {settings.sections.about.image && (
                <img
                  src={settings.sections.about.image}
                  alt="Sobre nós"
                  className="w-full h-full object-cover rounded-lg"
                />
              )}
              {!settings.sections.about.image && 'Imagem sobre a empresa'}
            </p>*/}
          </div>
        </div>
      </PageSection>

      {/* FEATURES */}
      <PageSection
        id="features"
        title={settings.sections.features.title}
        subtitle={settings.sections.features.subtitle}
        bgColor="bg-gray-50 dark:bg-gray-800"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {settings.sections.features.items.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </PageSection>

      {/* PRICING */}
      <PageSection
        id="pricing"
        title={settings.sections.pricing.title}
        subtitle={settings.sections.pricing.subtitle}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {settings.sections.pricing.plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </PageSection>

      {/* TESTIMONIALS */}
      <PageSection
        id="testimonials"
        title={settings.sections.testimonials.title}
        bgColor="bg-gray-50 dark:bg-gray-800"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {settings.sections.testimonials.items.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </PageSection>

      {/* CTA FINAL */}
      <PageSection
        id="cta"
        bgColor="bg-gradient-to-br from-brand to-brandDark text-white"
        vPadding="py-20 md:py-24"
      >
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {settings.sections.cta.title}
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-95">
            {settings.sections.cta.subtitle}
          </p>
          <CtaButton
            variant="primary"
            href={settings.business.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-brand hover:bg-gray-100 text-lg px-8 py-4"
          >
            {settings.sections.cta.button}
          </CtaButton>
          {settings.sections.cta.secondaryText && (
            <p className="text-sm mt-6 opacity-80">
              {settings.sections.cta.secondaryText}
            </p>
          )}
        </div>
      </PageSection>
    </Layout>
  );
}

export async function getStaticProps() {
  const settings = {
    business: require('../content/settings/business.json'),
    general: require('../content/settings/general.json'),
    theme: require('../content/settings/theme.json'),
    sections: require('../content/settings/sections.json'),
  };

  return { props: { settings } };
}

