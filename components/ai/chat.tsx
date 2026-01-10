'use client';

import { Cpu, User } from 'lucide-react';
import { Typography } from '@/components/ui/typography';
import Composer from '@/components/ui/composer';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { AnalysisResponse } from './analysis-response';
type Role = 'user' | 'assistant' | 'system';

interface ApiResponse {
  errors: Array<{ code_wcag: string; description: string }>;
  suggestions: Array<{ description: string; priority: string }>;
  fixed_code: string;
  code_extension: 'html' | 'jsx' | 'tsx';
}

interface Message {
  role: Role;
  content: string | ApiResponse;
}

const getAnswer = async (codeSnippet: string) => {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ codeSnippet }),
  });
  const data = await response.json();
  return data._output;
};

export const Chat = () => {
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

  useEffect(() => {
    console.log('messages 📨', messages);
  }, [messages]);

  return (
    <div className="mx-auto max-w-3xl px-4">
      <div className="flex flex-col items-center justify-center text-center">
        {/* Starting conversation */}
        {messages.length === 0 && (
          <Typography variant="h2" className="flex items-center gap-2 mb-4 pt-32">
            <User className="size-8" aria-hidden="true" /> Welcome to ia11y!
          </Typography>
        )}
        {/* Conversation */}
        {messages.length > 0 && (
          <ul className="flex-1 w-full flex flex-col gap-3" role="log" aria-live="polite">
            {messages.map((m, idx) => {
              if (m.role === 'assistant') {
                if (typeof m.content === 'object' && m.content !== null) {
                  return <AnalysisResponse key={idx} data={m.content} />;
                }

                return (
                  <li key={idx} className={cn(`relative max-w-full text-start self-start`)}>
                    <Cpu className="absolute -top-1 -left-10" aria-hidden="true" />
                    <pre className="whitespace-pre-wrap text-sm">
                      {JSON.stringify(m.content, undefined, 2)}
                    </pre>
                  </li>
                );
              }

              return (
                <li
                  key={idx}
                  className={cn(
                    `rounded-2xl rounded-tr p-3 max-w-full bg-primary dark:bg-secondary text-end self-end`
                  )}
                >
                  <pre className="whitespace-pre-wrap text-sm">{m.content as string}</pre>
                </li>
              );
            })}
            {/* Loading state */}
            {isLoading && (
              <li className={cn(`rounded-2xl rounded-tr p-3 max-w-full text-start self-start`)}>
                {`Analyzing...`}
              </li>
            )}
          </ul>
        )}

        <div className={cn('w-full mt-8', messages.length > 0 && 'sticky bottom-4 left-0')}>
          <Composer
            placeholder="Share your code snippet"
            value={text}
            onChange={handleTextChange}
            onSubmit={handleSubmit}
            showToolsButton={false}
            className={cn('', messages.length > 0 && '')}
          />
          <Typography variant="small" className="mt-2 text-muted-foreground">
            Paste your code snippet and press Enter to analyze.
          </Typography>
        </div>
      </div>
    </div>
  );
};
