import { t } from 'intlayer';
import { type Dictionary } from 'intlayer';

const chatContent = {
  key: 'chat',
  content: {
    welcome: t({
      en: 'Welcome to ia11y!',
      es: 'Bienvenido a ia11y!',
    }),
    description: t({
      en: 'Building a web for everyone, one commit at a time.',
      es: 'Building a web for everyone, one commit at a time.',
    }),
  },
} satisfies Dictionary;

export default chatContent;
