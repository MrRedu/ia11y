import { t } from 'intlayer';
import { type Dictionary } from 'intlayer';

const infoDialogContent = {
  key: 'info-dialog',
  content: {
    title: t({
      en: 'About ia11y',
      es: 'Sobre ia11y',
    }),
    description: t({
      en: 'Your AI partner for building a web for everyone.',
      es: 'Tu aliado de IA para construir una web para todos.',
    }),
    howToUseTitle: t({
      en: 'How to use',
      es: 'Cómo usar',
    }),
    howToUseText: t({
      en: 'Paste your HTML or component code (React, Vue, Svelte) to analyze its accessibility structure.',
      es: 'Pega tu código HTML o de componentes (React, Vue, Svelte) para analizar su estructura de accesibilidad.',
    }),
    modelTitle: t({
      en: 'Powered by Gemini',
      es: 'Impulsado por Gemini',
    }),
    modelText: t({
      en: 'This tool uses Gemini 3. High traffic may lead to temporary rate limits.',
      es: 'Esta herramienta utiliza Gemini 3. El tráfico alto puede causar límites de uso temporales.',
    }),
    openSourceTitle: t({
      en: 'Open Source',
      es: 'Código Abierto',
    }),
    openSourceText: t({
      en: 'ia11y is an open-source project. Contributions are welcome!',
      es: 'ia11y es un proyecto de código abierto. ¡Las contribuciones son bienvenidas!',
    }),
    githubButton: t({
      en: 'View on GitHub',
      es: 'Ver en GitHub',
    }),
  },
} satisfies Dictionary;

export default infoDialogContent;
