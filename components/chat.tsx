'use client';

import { Cpu, User } from 'lucide-react';
import { Typography } from '@/components/ui/typography';
import Composer from '@/components/ui/composer';
import { cn } from '@/lib/utils';
import { AnalysisResponse } from './analysis-response';
import { useChat } from '@/hooks/use-chat';
import { AnswerSkeleton } from './answer-skeleton';

export const Chat = () => {
  const { text, handleTextChange, messages, isLoading, handleSubmit } = useChat();

  return (
    <div className="relative mx-auto max-w-3xl px-4 pt-10">
      <div className="w-full flex flex-col items-center justify-center text-center">
        {/* Starting conversation */}
        {messages.length === 0 && (
          <div className="mb-4 pt-32">
            <Typography variant="h2" className="flex items-center gap-2 pb-0!">
              <User className="size-8" aria-hidden="true" /> Welcome to ia11y!
            </Typography>
            <Typography variant="h3" className="text-muted-foreground">
              {`Building a web for everyone, one commit at a time.`}
            </Typography>
          </div>
        )}

        {/* Conversation */}
        {messages.length > 0 && (
          <ul className="flex-1 w-full flex flex-col gap-3" role="log" aria-live="polite">
            {messages.map((m, idx) => {
              if (m.role === 'assistant') {
                // AI if response is a object
                if (typeof m.content === 'object' && m.content !== null) {
                  return <AnalysisResponse key={idx} data={m.content} />;
                }

                // AI if not is a object
                return (
                  <li key={idx} className={cn(`max-w-full text-start self-start`)}>
                    <Cpu className="absolute -top-1 -left-10" aria-hidden="true" />
                    <pre className="whitespace-pre-wrap text-sm">
                      {JSON.stringify(m.content, undefined, 2)}
                    </pre>
                  </li>
                );
              }

              // User
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
            {/* Loading */}
            {isLoading && (
              <AnswerSkeleton as="li" className="p-3 max-w-full text-start self-start" />
            )}
          </ul>
        )}

        {/* Chat input */}
        <div
          className={cn(
            'w-full bg-background mt-4',
            messages.length > 0 && 'sticky bottom-0 md:w-[calc(100%+4rem)]'
          )}
        >
          <Composer
            placeholder="Share your code snippet"
            value={text}
            onChange={handleTextChange}
            onSubmit={handleSubmit}
            showToolsButton={false}
            className={cn('', messages.length > 0 && '')}
          />
          <Typography variant="small" className="mt-2 text-muted-foreground">
            {messages.length < 1
              ? 'Enter your code snippet and press Enter to analyze.'
              : 'ai11y can make mistakes. Check its responses.'}
          </Typography>
        </div>
      </div>
    </div>
  );
};
