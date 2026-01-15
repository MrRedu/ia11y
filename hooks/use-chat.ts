import { useState } from 'react';
import { getAnswer } from '@/services/get-answer';
import type { Message } from '@/types/types';

const getErrorMessage = (err: unknown): string => {
  const isApiError = (e: any): e is { status: number; message: string } =>
    e && typeof e.status === 'number';

  if (isApiError(err)) {
    if (err.status === 429)
      return 'ia11y está un poco cansado (Límite de cuota). Espera un minuto.';
    return `Error del servidor (${err.status}): ${err.message}`;
  }
  return 'Error de conexión. Revisa tu internet.';
};

export function useChat() {
  const [text, setText] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleTextChange = (value: string) => setText(value);

  const handleSubmit = async () => {
    if (!text) return;

    try {
      setIsLoading(true);
      setError(null);

      const userMessage: Message = { role: 'user', content: text };
      setMessages((prev) => [...prev, userMessage]);
      setText('');

      const response = await getAnswer({ codeSnippet: text });

      const assistantMessage: Message = {
        role: 'assistant',
        content: response,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err: unknown) {
      const msg = getErrorMessage(err);

      setError(msg);
      setMessages((prev) => [...prev, { role: 'system', content: msg }]);

      console.error('Chat Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    text,
    handleTextChange,

    messages,

    isLoading,
    handleSubmit,
    error,
  };
}
