import { SidebarTrigger } from '@/components/ui/sidebar';
// import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  // DialogFooter,
  // DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CircleQuestionMark } from 'lucide-react';

export const Header = () => {
  return (
    <header className="flex items-center justify-between max-h-[52px] py-2 px-4 border-b">
      <div className="flex items-center justify-between w-full">
        <SidebarTrigger className="block md:hidden" />
        <h1 className="hidden md:block font-mono font-bold">ia11y</h1>
        <div className="flex items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon">
                <CircleQuestionMark />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>ia11y</DialogTitle>
                <DialogDescription>
                  ia11y is an open-source project created by MrRedu.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center gap-2">The code is available on GitHub.</div>
            </DialogContent>
          </Dialog>
          {/* <Avatar className="rounded-lg">
            <AvatarImage src="#" alt="@mrredu" />
            <AvatarFallback className="rounded-lg">MR</AvatarFallback>
          </Avatar> */}
        </div>
      </div>
    </header>
  );
};
