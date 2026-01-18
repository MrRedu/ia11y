import { type Dictionary, t } from 'intlayer';
import { Metadata } from 'next';

const metadataContent = {
  key: 'metadata',
  content: {
    title: t({
      en: 'ia11y | AI-Powered Web Accessibility Auditor',
      es: 'ia11y | Auditor de Accesibilidad Web con IA',
    }),
    description: t({
      en: 'Audit, fix, and optimize your website accessibility (WCAG) with AI. Building a web for everyone, one commit at a time.',
      es: 'Audita, corrige y optimiza la accesibilidad de tu web (WCAG) con IA. Construyendo una web para todos, un commit a la vez.',
    }),
    keywords: t({
      en: ['Accessibility', 'A11y', 'AI code auditor', 'WCAG compliance', 'Web development tools'],
      es: [
        'Accesibilidad',
        'A11y',
        'Auditor de código IA',
        'Cumplimiento WCAG',
        'Herramientas de desarrollo web',
      ],
    }),
    openGraph: {
      title: t({
        en: 'ia11y | AI-Powered Web Accessibility Auditor',
        es: 'ia11y | Auditor de Accesibilidad Web con IA',
      }),
      description: t({
        en: 'Audit, fix, and optimize your website accessibility (WCAG) with AI. Building a web for everyone, one commit at a time.',
        es: 'Audita, corrige y optimiza la accesibilidad de tu web (WCAG) con IA. Construyendo una web para todos, un commit a la vez.',
      }),
      siteName: 'ia11y',
      type: 'website',
    },
  },
} satisfies Dictionary<Metadata>;

export default metadataContent;
