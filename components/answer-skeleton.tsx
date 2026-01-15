'use client';
import { useEffect, useState, type ElementType, type ComponentPropsWithoutRef } from 'react';
import { Typography } from '@/components/ui/typography';
import { MESSAGES_ANSWER_LOADING } from '@/lib/constants';

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

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % MESSAGES_ANSWER_LOADING.length);
    }, 3 * ONE_SECOND_IN_MS);

    return () => window.clearInterval(id);
  }, []);

  return (
    <Component {...props}>
      <Typography className="animate-pulse" variant="muted">
        {MESSAGES_ANSWER_LOADING[index]}
      </Typography>
    </Component>
  );
};
