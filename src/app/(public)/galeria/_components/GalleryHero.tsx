'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function GalleryHero() {
    const { scrollY } = useScroll();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const yRange = useTransform(scrollY, [0, 1000], [0, 400]);

    const y = isMobile ? 0 : yRange;

    return (
        <section className="relative w-full h-[30vh] lg:h-[40vh] overflow-hidden">
            <motion.div
                className="absolute inset-0 z-0 h-[120%] w-full"
                style={{ y }}
            >
                <Image
                    src="/assets/images/galeria.avif"
                    alt="Óticas Cricaré Galeria"
                    fill
                    priority
                    unoptimized
                    className="object-cover"
                />
            </motion.div>
        </section>
    );
}
