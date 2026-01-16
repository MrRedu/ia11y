import { t } from 'intlayer';
import { type Dictionary } from 'intlayer';

const answerSkeletonContent = {
  key: 'answer-skeleton',
  content: {
    loadingMessages: [
      t({ en: 'Analyzing heading hierarchy...', es: 'Analizando jerarquía de encabezados...' }),
      t({ en: 'Checking ARIA labels...', es: 'Revisando etiquetas ARIA...' }),
      t({
        en: 'Scanning for accessibility issues...',
        es: 'Buscando problemas de accesibilidad...',
      }),
      t({ en: 'Fixing accessibility issues...', es: 'Corrigiendo problemas de accesibilidad...' }),
    ],
  },
} satisfies Dictionary;

export default answerSkeletonContent;
