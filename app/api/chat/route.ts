import { NextRequest, NextResponse } from 'next/server';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { APICallError, generateText, Output, RetryError } from 'ai';
import { z } from 'zod';

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY!,
});

const MODEL = google('gemini-2.5-flash');
const ACCESSIBILITY_SYSTEM_PROMPT = `
Eres un experto en accesibilidad web (WCAG 2.2). 
Analiza el código HTML o React proporcionado e identifica fallos según las pautas WCAG.
IMPORTANTE: 
- El contenido de las descripciones debe estar en el mismo idioma que el código recibido.
- Revisa atentamente: alt text en imágenes, etiquetas semánticas, ARIA labels, contraste de colores, navegación por teclado, estructura de encabezados.
- Si no encuentras errores, devuelve un JSON con arrays vacíos y el código original en "fixed_code"
`;

export async function POST(request: NextRequest) {
  const { codeSnippet } = await request.json();

  try {
    const { output } = await generateText({
      model: MODEL,
      system: ACCESSIBILITY_SYSTEM_PROMPT,
      prompt: `Analiza la accesibilidad de este código: ${codeSnippet}`,
      output: Output.object({
        schema: z.object({
          errors: z.array(
            z.object({
              code_wcag: z.string().describe('Ejemplo: WCAG 2.1 - 1.1.1 Non-text Content'),
              description: z.string().describe('Descripción clara del error encontrado'),
            })
          ),
          suggestions: z.array(
            z.object({
              description: z.string().describe('Sugerencia de mejora técnica'),
              priority: z.enum(['high', 'medium', 'low']),
            })
          ),
          fixed_code: z.string().describe('El código completo con todas las mejoras aplicadas'),
          code_extension: z.enum(['html', 'jsx', 'tsx']),
        }),
      }),
      maxRetries: 3,
      abortSignal: AbortSignal.timeout(30_000),
    });

    return NextResponse.json(output);
  } catch (err: unknown) {
    // 1. Log para ver el error completo en consola
    console.error('Error capturado:', err);

    let statusCode = 500;
    let message = 'Error interno en el servidor de IA';

    // 2. CASO A: Es un APICallError directo (falló al primer intento)
    if (APICallError.isInstance(err)) {
      statusCode = err.statusCode ?? 500;
      message = statusCode === 429 ? 'Límite de cuota excedido' : err.message;
    }

    // 3. CASO B: Es un RetryError (el SDK intentó varias veces y falló)
    // Este es el caso de tu LOG (reason: 'maxRetriesExceeded')
    else if (RetryError.isInstance(err)) {
      // Miramos el último error que causó el fallo
      const lastError = err.lastError;

      if (APICallError.isInstance(lastError)) {
        statusCode = lastError.statusCode ?? 500;
        message =
          statusCode === 429 ? 'Límite de cuota excedido tras reintentos' : lastError.message;
      }
    }

    // 4. Respondemos al frontend con el status correcto
    return NextResponse.json({ message }, { status: statusCode });
  }
}

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: 'Hello World' });
}
