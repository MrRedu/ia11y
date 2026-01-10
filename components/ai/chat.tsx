'use client';

import { Cpu, User } from 'lucide-react';
import { Typography } from '../ui/typography';
import Composer from '../ui/composer';
import { useState } from 'react';
import { cn } from '@/lib/utils';

type Role = 'user' | 'assistant' | 'system';

interface Message {
  role: Role;
  content: string;
}

export const Chat = () => {
  const [text, setText] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);

  const handleTextChange = (text: string) => setText(text);

  return (
    <div className="mx-auto max-w-3xl px-4">
      <div className="flex flex-col items-center justify-center text-center">
        {/* Starting conversation */}
        {messages.length === 0 && (
          <Typography variant="h2" className="flex items-center gap-2 mb-4 pt-32">
            <User className="size-8" /> Welcome to ia11y!
          </Typography>
        )}
        {/* Conversation */}
        {messages.length > 0 && (
          <div className="flex-1 w-full flex flex-col-reverse gap-3">
            {/* Loading state */}
            {/* {isLoading && (
              <div className={cn(`rounded-2xl rounded-tr p-3 max-w-full text-start self-start`)}>
                {`Analyzing...`}
              </div>
            )} */}
            {messages.map((m, idx) => {
              if (m.role === 'assistant') {
                return (
                  <div key={idx} className={cn(`relative max-w-full text-start self-start`)}>
                    <Cpu className="absolute -top-1 -left-10" />
                    <pre className="whitespace-pre-wrap text-sm">{JSON.stringify(m.content)}</pre>
                  </div>
                );
              }

              return (
                <div
                  key={idx}
                  className={cn(
                    `rounded-2xl rounded-tr p-3 max-w-full bg-secondary text-end self-end`
                  )}
                >
                  <pre className="whitespace-pre-wrap text-sm">{JSON.stringify(m.content)}</pre>
                </div>
              );
            })}
          </div>
        )}

        <div className={cn('w-full mt-8', messages.length > 0 && 'sticky bottom-4 left-0')}>
          <Composer
            placeholder="Share your code snippet"
            value={text}
            onChange={handleTextChange}
            onSubmit={() => {}}
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
