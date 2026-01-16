import { t } from 'intlayer';
import { type Dictionary } from 'intlayer';

const themeSwitcherContent = {
  key: 'theme-switcher',
  content: {
    title: t({
      en: 'Theme',
      es: 'Tema',
    }),
    light: t({
      en: 'Light',
      es: 'Claro',
    }),
    dark: t({
      en: 'Dark',
      es: 'Oscuro',
    }),
    system: t({
      en: 'System',
      es: 'Sistema',
    }),
  },
} satisfies Dictionary;

export default themeSwitcherContent;
