import { t } from 'intlayer';
import { type Dictionary } from 'intlayer';

const analysisResponseContent = {
  key: 'analysis-response',
  content: {
    errorsAccessibility: t({
      en: 'Accessibility Errors',
      es: 'Errores de Accesibilidad',
    }),
    suggestionsAccessibility: t({
      en: 'Accessibility Suggestions',
      es: 'Sugerencias de Mejoras',
    }),
    suggestedCode: t({
      en: 'Suggested Code',
      es: 'Código Sugerido',
    }),
    noAccessibilityIssues: t({
      en: 'No accessibility issues found.',
      es: 'No se encontraron problemas de accesibilidad.',
    }),
    priority: t({
      en: 'Priority',
      es: 'Prioridad',
    }),
    clipboard: {
      copy: t({
        en: 'Copy',
        es: 'Copiar',
      }),
      copied: t({
        en: 'Copied!',
        es: '¡Copiado!',
      }),
    },
  },
} satisfies Dictionary;

export default analysisResponseContent;
