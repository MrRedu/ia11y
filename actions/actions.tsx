'use server';

import { generateText } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY!,
});

// Define el modelo y el sistema de instrucciones
const model = google('gemini-2.0-flash');
const system = `Eres un experto en accesibilidad web (WCAG 2.1). Analiza el siguiente código HTML o React.js. Identifica fallos de accesibilidad y devuelve un JSON con la siguiente estructura:

  {
  "errors": [
      {
        "code_wcag": "WCAG 2.1 - 1.3.1 Info and Relationships",
        "description": <string>
      },
      ...
    ],
    "suggestions": [
      {
        "description": <string>,
        "priority": <"high" | "medium" | "low">
      },
      ...
    ],
    "fixed_code": <string>
  }

Responde estrictamente con el esquema proporcionado de JSON, sin explicaciones adicionales. Por último, si no encuentras errores, devuelve un JSON con arrays vacíos y el código original en "fixed_code". Además, el contenido debe estar en el idioma que se recibe.`;

export async function getAnswer({ codeSnippet }: { codeSnippet: string }) {
  const result = await generateText({
    model: model,
    system: system,
    prompt: `Analiza la accesibilidad de este código: ${codeSnippet}`,
  });

  return result;
}
