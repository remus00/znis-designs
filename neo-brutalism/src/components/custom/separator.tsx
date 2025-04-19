import { cn } from '../../lib/utils';

export const Separator = ({ className }: { className?: string }) => {
    return <div className={cn('h-[6px] w-full bg-black', className)} />;
};
