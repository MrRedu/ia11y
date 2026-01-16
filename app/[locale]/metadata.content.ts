import { type Dictionary, t } from 'intlayer';
import { Metadata } from 'next';

const metadataContent = {
  key: 'home-page-metadata',
  content: {
    title: t({
      en: 'ia11y',
      es: 'ia11y',
    }),
    description: t({
      en: 'Building a web for everyone, one commit at a time.',
      es: 'Building a web for everyone, one commit at a time.',
    }),
  },
} satisfies Dictionary<Metadata>;

export default metadataContent;
