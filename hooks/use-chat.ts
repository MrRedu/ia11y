import { getAnswer } from '@/services/get-answer';
import { ApiResponse, Message } from '@/types/types';
import { useState } from 'react';

export function useChat() {
  const [text, setText] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleTextChange = (value: string) => setText(value);
  const handleSubmit = async () => {
    if (!text) return;

    try {
      setIsLoading(true);
      const userMessage: Message = { role: 'user', content: text };
      setMessages((prev) => [...prev, userMessage]);
      setText('');

      const response = await getAnswer(text);

      const cleanJsonString = response.replace(/^```json\n?|```$/g, '').trim();
      const parsedObject = JSON.parse(cleanJsonString) as ApiResponse;

      const assistantMessage: Message = {
        role: 'assistant',
        content: parsedObject,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error fetching answer:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    text,
    handleTextChange,

    messages,
    setMessages,

    isLoading,
    handleSubmit,
  };
}
