import { t, type Dictionary } from 'intlayer';

const homePageContent = {
  key: 'home-page',
  content: {
    getStarted: {
      main: t({
        en: 'Get started by editing',
        es: 'Comience por editar',
      }),
      pageLink: 'src/app/page.tsx',
    },
  },
} satisfies Dictionary;

export default homePageContent;
