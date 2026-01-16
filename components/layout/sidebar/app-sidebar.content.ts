import { t } from 'intlayer';
import { type Dictionary } from 'intlayer';

const appSidebarContent = {
  key: 'app-sidebar',
  content: {
    title: t({
      en: 'Actions',
      es: 'Acciones',
    }),
  },
} satisfies Dictionary;

export default appSidebarContent;
