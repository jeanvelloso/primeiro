import Head from 'next/head';
import Header from '../ui/Header';
import Footer from '../ui/Footer';
import TopRibbon from '../ui/TopRibbon';

export default function Layout({ children, settings }) {
  return (
    <>
      <Head>
        <title>{settings.general.seoTitle}</title>
        <meta name="description" content={settings.general.seoDescription} />
        <meta property="og:title" content={settings.general.seoTitle} />
        <meta property="og:description" content={settings.general.seoDescription} />
        <meta property="og:image" content={settings.general.openGraphImage} />
        <meta property="og:url" content={settings.general.siteUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
      </Head>
      <div className="min-h-screen flex flex-col">
        {settings.sections.topRibbon.enabled && (
          <TopRibbon
            message={settings.sections.topRibbon.message}
            closeable={settings.sections.topRibbon.closeable}
          />
        )}
        <Header settings={settings} />
        <main className="flex-grow">{children}</main>
        <Footer settings={settings} />
      </div>
    </>
  );
}

