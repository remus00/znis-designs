import { Link, useLocation } from 'react-router';
import { navbarItems } from '../../constants/navbar-items';
import { cn } from '../../lib/utils';
import { NavbarItemType } from '../../types';
import { FourPinStar } from '../icons/four-pin-star';

export const Navbar = () => {
    return (
        <div className="flex items-center justify-center pt-[58px] pb-[77px]">
            <div className="relative z-0 flex h-[93px] w-full max-w-[732px] items-center justify-between border-[5px] border-black bg-white pl-4">
                <Link to="/" className="flex items-center gap-4">
                    <FourPinStar width={50} height={50} className="fill-black" />
                    <p className="text-custom-black text-[36px]">znis</p>
                </Link>

                <div className="flex items-center">
                    {navbarItems.map(({ path, label }, idx) => (
                        <NavbarItem key={idx} path={path} label={label} />
                    ))}
                </div>

                <Square className="-top-[8px] -left-[8px]" />
                <Square className="-bottom-[8px] -left-[8px]" />
                <Square className="-top-[8px] -right-[8px]" />
                <Square className="-right-[8px] -bottom-[8px]" />
            </div>
        </div>
    );
};

const NavbarItem = ({ path, label }: NavbarItemType) => {
    const { pathname } = useLocation();
    console.log(pathname);

    return (
        <Link
            to={path}
            className="flex h-[93px] items-center justify-center border-l-[5px] border-black px-4 text-[24px] transition-all duration-300"
        >
            <p className="relative z-0">
                {label}

                {pathname === path && (
                    <span className="bg-custom-yellow absolute bottom-[8px] -left-[1px] -z-10 h-[10px] w-[90%]" />
                )}
            </p>
        </Link>
    );
};

const Square = ({ className }: { className: string }) => {
    return (
        <div
            className={cn(
                'absolute size-[12px] border-3 border-black bg-white',
                className
            )}
        />
    );
};
