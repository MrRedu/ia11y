'use client';
import ShikiHighlighter from 'react-shiki';
import { CheckCircle2, AlertCircle, Lightbulb, Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface AnalysisProps {
  data: {
    errors: Array<{ code_wcag: string; description: string }>;
    suggestions: Array<{ description: string; priority: string }>;
    fixed_code: string;
    code_extension: 'html' | 'jsx' | 'tsx';
  };
}

export const AnalysisResponse = ({ data }: AnalysisProps) => {
  const [isCopied, setIsCopies] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(data.fixed_code);
      setIsCopies(true);

      setTimeout(() => setIsCopies(false), 2000);
    } catch (err) {
      console.error('Error al copiar al portapapeles', err);
    }
  };

  return (
    <li className="flex flex-col gap-6 w-full text-start">
      {/* SECCIÓN DE ERRORES */}
      {data.errors.length > 0 && (
        <section>
          <h3 className="flex items-center gap-2 font-bold text-red-500 mb-3">
            <AlertCircle className="size-5" aria-hidden="true" /> Errores de Accesibilidad
          </h3>
          <div className="space-y-3">
            {data.errors.map((error, i) => (
              <div key={i} className="p-3 rounded-lg bg-red-50 border border-red-100 shadow-sm">
                <span className="text-xs font-mono font-bold text-red-700 uppercase tracking-wider">
                  {error.code_wcag}
                </span>
                <p className="text-sm text-red-800 mt-1">{error.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECCIÓN DE SUGERENCIAS */}
      {data.suggestions.length > 0 && (
        <section>
          <h3 className="flex items-center gap-2 font-bold text-amber-500 mb-3">
            <Lightbulb className="size-5" aria-hidden="true" /> Sugerencias de Mejora
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {data.suggestions.map((sug, i) => (
              <div key={i} className="p-3 rounded-lg bg-amber-50 border border-amber-100">
                <div className="flex justify-between items-start mb-1">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                      sug.priority === 'high'
                        ? 'bg-amber-200 text-amber-800'
                        : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    Prioridad {sug.priority}
                  </span>
                </div>
                <p className="text-sm text-amber-900">{sug.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECCIÓN DE CÓDIGO CORREGIDO */}
      {data.fixed_code.length > 0 && (
        <section className="mt-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="flex items-center gap-2 font-bold text-green-600">
              <CheckCircle2 className="size-5" aria-hidden="true" /> Código Sugerido
            </h3>
            <button
              onClick={handleCopy}
              disabled={isCopied}
              className={`flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-md transition-all duration-200 ${
                isCopied
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-600 active:scale-95'
              }`}
            >
              {isCopied ? (
                <>
                  <Check className="size-3" /> ¡Copiado!
                </>
              ) : (
                <>
                  <Copy className="size-3" /> Copiar código
                </>
              )}
            </button>
          </div>

          <div className="rounded-xl overflow-hidden border shadow-inner bg-[#1e1e1e]">
            <ShikiHighlighter
              language={data.code_extension || 'html'}
              theme={{ light: 'github-light', dark: 'github-dark' }}
              defaultColor="dark"
              showLineNumbers={true}
            >
              {data.fixed_code.trim()}
            </ShikiHighlighter>
          </div>
        </section>
      )}

      {data.errors.length === 0 && data.suggestions.length === 0 && (
        <p className="text-sm text-green-700 bg-green-50 p-3 rounded-lg border border-green-100 shadow">
          ¡No se encontraron problemas de accesibilidad! El código cumple con las pautas WCAG
          analizadas.
        </p>
      )}
    </li>
  );
};
