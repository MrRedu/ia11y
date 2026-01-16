'use client';

import { cn } from '@/lib/utils';

import { Cpu, User } from 'lucide-react';

import { Typography } from '@/components/ui/typography';
import { Composer } from '@/components/ui/composer';

import { AnalysisResponse } from '@/components/organisms/analysis-response/analysis-response';
import { AnswerSkeleton } from '@/components/atoms/answer-skeleton/answer-skeleton';

import { useChat } from '@/hooks/use-chat';
import { useIntlayer } from 'next-intlayer';
import type { ApiResponse } from '@/types/types';
import { Ia11yIcon } from '@/components/atoms/icons/ia11y.icon';

export const Chat = () => {
  const { text, handleTextChange, messages, isLoading, handleSubmit } = useChat();
  const content = useIntlayer('chat');

  return (
    <div
      className={cn(
        'relative mx-auto max-w-2xl xl:max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl h-full px-4',
        messages.length > 0 && 'pt-10'
      )}
    >
      <div className="w-full flex flex-col h-full items-center justify-center text-center">
        {/* Starting conversation / Empty state */}
        {messages.length === 0 && (
          <div className="mb-4 text-left">
            <Typography variant="h2" className="flex items-center gap-2 pb-0!">
              <Ia11yIcon className="size-8 text-primary" aria-hidden="true" />

              {content.welcome}
            </Typography>
            <Typography variant="h3" className="text-muted-foreground text-xl">
              {content.description}
            </Typography>
          </div>
        )}
        {/* Conversation list */}
        {messages.length > 0 && (
          <ul className="flex-1 w-full flex flex-col gap-3  md:px-0" role="log" aria-live="polite">
            {messages.map((m, idx) => {
              // Caso 1: Respuesta de Análisis (Objeto)
              if (m.role === 'assistant' && typeof m.content === 'object') {
                return <AnalysisResponse key={idx} data={m.content as ApiResponse} />;
              }

              // Caso 2: Mensajes de Sistema / Errores
              if (m.role === 'system') {
                return (
                  <li
                    key={idx}
                    className="relative p-3 rounded-2xl bg-destructive/15 border border-destructive/20 self-start w-fit text-start"
                  >
                    <Cpu
                      className="absolute -top-1 -left-10 size-5 text-destructive"
                      aria-hidden="true"
                    />
                    <Typography className="text-destructive font-medium mt-0!">
                      {m.content as string}
                    </Typography>
                  </li>
                );
              }

              // Caso 3: Mensajes de Usuario
              return (
                <li
                  key={idx}
                  className={cn(
                    'p-3 rounded-2xl max-w-[85%] text-sm',
                    m.role === 'user'
                      ? 'bg-primary text-primary-foreground self-end rounded-tr-none'
                      : 'bg-muted self-start rounded-tl-none'
                  )}
                >
                  <Typography>
                    {typeof m.content === 'string' ? m.content : JSON.stringify(m.content)}
                  </Typography>
                </li>
              );
            })}

            {/* isLoading */}
            {isLoading && (
              <AnswerSkeleton
                as="li"
                aria-atomic="true"
                className="p-3 max-w-full text-start self-start"
              />
            )}
          </ul>
        )}
        {/* Floating Input Area */}
        <div
          className={cn(
            'w-full mt-4 bg-background',
            messages.length > 0 && 'sticky space-y-2 pb-2 bottom-0 '
          )}
        >
          <Composer
            placeholder={content.floatingChat.placeholder.value}
            value={text}
            onChange={handleTextChange}
            onSubmit={handleSubmit}
            showToolsButton={false}
            isLoading={isLoading}
            className={cn('', messages.length > 0 && 'md:w-[calc(100%+4rem)] md:ml-[-2rem]')}
          />
          <Typography variant="small" className="text-muted-foreground">
            {messages.length < 1 ? (
              <>{content.floatingChat.usageInstruction}</>
            ) : (
              <>{content.floatingChat.aiDisclaimer}</>
            )}
          </Typography>
        </div>
      </div>
    </div>
  );
};
