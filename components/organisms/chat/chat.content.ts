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
      es: 'Construyendo una web para todos, un commit por vez.',
    }),
    floatingChat: {
      placeholder: t({
        en: 'Paste your code snippet',
        es: 'Pega tu fragmento de código',
      }),
      usageInstruction: t({
        en: 'Enter your code snippet and press Enter to analyze.',
        es: 'Pega tu fragmento de código y presiona Enter para analizar.',
      }),
      aiDisclaimer: t({
        en: 'ia11y can make mistakes. Check its responses.',
        es: 'ia11y puede cometer errores. Revisa sus respuestas.',
      }),
    },
  },
} satisfies Dictionary;

export default chatContent;
