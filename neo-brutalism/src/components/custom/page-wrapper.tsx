import { ReactNode } from 'react';
import { cn } from '../../lib/utils';
import { Navbar } from './navbar';

interface PageWrapperProps {
    children: ReactNode;
    className?: string;
}

export const PageWrapper = ({ children, className }: PageWrapperProps) => {
    return (
        <div
            className={cn(
                'relative mx-auto w-full max-w-[1440px] outline-[6px] outline-black',
                className
            )}
        >
            <Navbar />
            <div className="flex w-full flex-col overflow-hidden">{children}</div>
        </div>
    );
};
