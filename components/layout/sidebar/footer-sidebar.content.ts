import { t } from 'intlayer';
import { type Dictionary } from 'intlayer';

const footerSidebarContent = {
  key: 'footer-sidebar',
  content: {
    title: t({
      en: 'Settings',
      es: 'Configuraciones',
    }),
  },
} satisfies Dictionary;

export default footerSidebarContent;
