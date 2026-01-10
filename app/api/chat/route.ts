import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateText } from 'ai';
import { NextRequest } from 'next/server';

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY!,
});

const MODEL = google('gemini-2.5-flash');
const ACCESSIBILITY_SYSTEM_PROMPT = `Eres un experto en accesibilidad web (WCAG 2.1). Analiza el siguiente código HTML o React.js. Identifica fallos de accesibilidad y devuelve un JSON con la siguiente estructura:

{
  "errors": [
    {
      "code_wcag": "WCAG 2.1 - [código específico]",
      "description": "Descripción del error"
    }
  ],
  "suggestions": [
    {
      "description": "Sugerencia de mejora",
      "priority": "high" | "medium" | "low"
    }
  ],
  "fixed_code": "código corregido con todas las mejoras aplicadas",
  "code_extension": "html" | "jsx" | "tsx"
}

Responde estrictamente con el esquema proporcionado de JSON, sin explicaciones adicionales. Si no encuentras errores, devuelve un JSON con arrays vacíos y el código original en "fixed_code". 

IMPORTANTE:
- Revisa atentamente: alt text en imágenes, etiquetas semánticas, ARIA labels, contraste de colores, navegación por teclado, estructura de encabezados
- El contenido debe estar en el idioma que se recibe
- Responde SOLO con JSON válido, sin markdown ni explicaciones adicionales`;

export async function POST(request: NextRequest) {
  const { codeSnippet } = await request.json();

  const result = await generateText({
    model: MODEL,
    system: ACCESSIBILITY_SYSTEM_PROMPT,
    prompt: `Analiza la accesibilidad de este código: ${codeSnippet}`,
  });

  return Response.json(result);
}

export async function GET(request: NextRequest) {
  return Response.json({ message: 'Hello World' });
}
