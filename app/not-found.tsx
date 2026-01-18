'use client';
import { Typography } from '@/components/ui/typography';
import { MoveLeft } from 'lucide-react';
import { useIntlayer } from 'next-intlayer';
import Link from 'next/link';

export default function NotFound() {
  const content = useIntlayer('not-found-page');

  return (
    <section className="min-h-[calc(100svh-72px)] grid place-content-center text-center">
      <Typography variant="h2" className="text-9xl text-primary font-mono pb-0!">
        #404
      </Typography>
      <Typography variant="lead">{content.title}</Typography>
      <Link href="/" className="text-3xl underline mt-8 flex items-center gap-2">
        <MoveLeft className="size-8" />
        {content.backToHome}
      </Link>
    </section>
  );
}
