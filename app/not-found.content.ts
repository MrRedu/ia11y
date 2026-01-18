import { t, type Dictionary } from 'intlayer';

const notFoundPageContent = {
  key: 'not-found-page',
  content: {
    title: t({
      en: 'Not Found Page',
      es: 'Página no encontrada',
    }),
    backToHome: t({
      en: 'Back to Home',
      es: 'Volver al Inicio',
    }),
  },
} satisfies Dictionary;

export default notFoundPageContent;
