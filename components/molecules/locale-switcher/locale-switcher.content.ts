import { t } from 'intlayer';
import { type Dictionary } from 'intlayer';

const localeSwitcherContent = {
  key: 'locale-switcher',
  content: {
    title: t({
      en: 'Languages',
      es: 'Idiomas',
    }),
  },
} satisfies Dictionary;

export default localeSwitcherContent;
