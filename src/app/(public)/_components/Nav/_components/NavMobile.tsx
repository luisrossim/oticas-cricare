'use client';

import { landingRoutes } from '@/app/(public)/_constants/routes';
import { lora } from '@/shared/styles/fonts';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { SetStateAction } from 'react';

interface Props {
    menuMobileIsOpen: boolean;
    setMenuMobileIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

export function NavMobile({ menuMobileIsOpen, setMenuMobileIsOpen }: Props) {
    const toggleMenu = () => setMenuMobileIsOpen(!menuMobileIsOpen);
    const closeMenu = () => setMenuMobileIsOpen(false);

    return (
        <div className="lg:hidden">
            <button
                onClick={toggleMenu}
                className="relative z-1001 p-2 flex items-center justify-center text-white"
                aria-label="Toggle Menu"
            >
                <motion.div
                    animate={{ rotate: menuMobileIsOpen ? 90 : 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                    {menuMobileIsOpen ? <X size={22} /> : <Menu size={22} />}
                </motion.div>
            </button>

            <AnimatePresence>
                {menuMobileIsOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                            opacity: 1,
                            height: 'auto',
                        }}
                        exit={{
                            opacity: 0,
                            height: 0,
                            transition: { duration: 0.2, ease: 'easeIn' },
                        }}
                        className={`absolute left-0 top-0 w-full overflow-hidden rounded-3xl backdrop-blur-xl bg-blue-600 z-999 origin-top ${lora.className}`}
                    >
                        <nav className="flex flex-col pt-16 pb-10 px-6">
                            {landingRoutes.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -5 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        ease: 'easeInOut',
                                    }}
                                    className="w-full"
                                >
                                    <Link
                                        href={item.href}
                                        onClick={closeMenu}
                                        className="flex text-white text-lg uppercase w-full py-3 font-light tracking-wider"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
