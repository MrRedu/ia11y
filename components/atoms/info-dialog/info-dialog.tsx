import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Typography } from '@/components/ui/typography';
import { useIntlayer } from 'next-intlayer';
import Link from 'next/link';

export const InfoDialog = () => {
  const content = useIntlayer('info-dialog');

  return (
    <DialogContent className="sm:max-w-lg">
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2">{content.title}</DialogTitle>
        <DialogDescription>{content.description}</DialogDescription>
      </DialogHeader>

      <div className="space-y-4 py-4 text-sm">
        <section>
          <Typography variant="h4" className="mb-1">
            {content.howToUseTitle}
          </Typography>
          <Typography variant="muted">{content.howToUseText}</Typography>
        </section>

        <section>
          <Typography variant="h4" className="mb-1">
            {content.modelTitle}
          </Typography>
          <Typography variant="muted">{content.modelText}</Typography>
        </section>

        <section className="pt-2 border-t text-center flex flex-col gap-2">
          <Typography variant="muted" className="text-balance">
            {content.openSourceText}
          </Typography>
          <Link
            href="https://github.com/MrRedu/ia11y"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {content.githubButton}
          </Link>
        </section>
      </div>
    </DialogContent>
  );
};
