import { SidebarTrigger } from '@/components/ui/sidebar';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CircleQuestionMark } from 'lucide-react';
import { Ia11yIcon } from '@/components/atoms/icons/ia11y.icon';
import { InfoDialog } from '@/components/atoms/info-dialog/info-dialog';
import { GithubButton } from '@/components/ui/github-button';
import { useEffect, useState } from 'react';
import { getRepoStars } from '@/actions/github';

export const Header = () => {
  const [stars, setStars] = useState(0);

  useEffect(() => {
    getRepoStars().then((data) => setStars(data));
  }, []);

  return (
    <header className="flex items-center justify-between max-h-[52px] py-2 px-4 border-b">
      <div className="flex items-center justify-between w-full">
        <SidebarTrigger className="block md:hidden" />
        <h1 className="hidden  font-mono font-bold md:flex items-center gap-2">
          <Ia11yIcon className="size-6 text-primary" aria-hidden="true" />
          ia11y
        </h1>
        <div className="flex items-center gap-4">
          <div className="flex gap-4 flex-wrap">
            <GithubButton
              key={`github-stars-${stars}`}
              initialStars={0}
              targetStars={stars}
              separator={true}
              label=""
              roundStars={true}
              repoUrl="https://github.com/MrRedu/ia11y"
              variant="outline"
              size="sm"
            />
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon">
                <CircleQuestionMark />
              </Button>
            </DialogTrigger>
            <InfoDialog />
          </Dialog>
        </div>
      </div>
    </header>
  );
};
