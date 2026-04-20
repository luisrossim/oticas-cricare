'use client';

import { useMotionValueEvent, useScroll } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { NavDesktop } from './_components/NavDesktop';
import { NavMobile } from './_components/NavMobile';

export function Nav() {
    const { scrollY } = useScroll();
    const [isVisible, setIsVisible] = useState(true);
    const [menuMobileIsOpen, setMenuMobileIsOpen] = useState(false);

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const previous = scrollY.getPrevious() ?? 0;

        if (menuMobileIsOpen) {
            setIsVisible(true);
            return;
        }

        if (latest > previous && latest > 50) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    });

    return (
        <header
            className={`fixed top-0 z-997 w-full p-2 lg:p-6 transition-all duration-300 text-white ${isVisible || menuMobileIsOpen ? 'translate-y-0' : '-translate-y-full'}`}
        >
            <div className="flex justify-between items-stretch max-w-460 mx-auto gap-4 rounded-full backdrop-blur-sm bg-blue-600 lg:bg-transparent lg:backdrop-blur-none">
                <div className="rounded-full lg:backdrop-blur-sm lg:bg-blue-600 lg:px-7 px-5 flex items-center gap-2 justify-center">
                    <Link href={'/'} className="relative block">
                        <div className="relative w-13 h-9 lg:w-16 lg:h-15">
                            <Image
                                src="/assets/logos/logo-icon-white.png"
                                className="object-contain"
                                fill
                                alt="Logo"
                            />
                        </div>
                    </Link>
                    <strong className="text-sm font-normal">
                        Óticas Cricaré
                    </strong>
                </div>

                <div className="rounded-full lg:backdrop-blur-sm lg:bg-blue-600 lg:px-7 px-4 p-3 lg:p-2 flex items-center justify-center font-light ">
                    <NavDesktop />
                    <NavMobile
                        menuMobileIsOpen={menuMobileIsOpen}
                        setMenuMobileIsOpen={setMenuMobileIsOpen}
                    />
                </div>
            </div>
        </header>
    );
}
