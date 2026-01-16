'use client';
import { useEffect, useState, type ElementType, type ComponentPropsWithoutRef } from 'react';
import { Typography } from '@/components/ui/typography';
import { useIntlayer } from 'next-intlayer';

type PolymorphicAs<E extends ElementType> = {
  as?: E;
};

type AnswerSkeletonProps<E extends ElementType> = PolymorphicAs<E> & ComponentPropsWithoutRef<E>;

const ONE_SECOND_IN_MS = 1000;

export const AnswerSkeleton = <E extends ElementType = 'div'>({
  as,
  ...props
}: AnswerSkeletonProps<E>) => {
  const Component = (as || 'div') as ElementType;

  const { loadingMessages } = useIntlayer('answer-skeleton');

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % loadingMessages.length);
    }, 3 * ONE_SECOND_IN_MS);

    return () => window.clearInterval(id);
  }, [loadingMessages.length]);

  return (
    <Component {...props}>
      <Typography className="animate-pulse" variant="muted">
        {loadingMessages[index]}
      </Typography>
    </Component>
  );
};
