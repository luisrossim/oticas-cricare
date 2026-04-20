'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { enterprise } from '../_constants/enterprise';
import { Section } from './Section';
import { SectionTitle } from './Section/_components/SectionTitle';

export function BrandCarrousel() {
    const duplicatedBrands = [
        ...enterprise.brands,
        ...enterprise.brands,
        ...enterprise.brands,
        ...enterprise.brands,
    ];

    return (
        <Section sectionId="marcas">
            <SectionTitle
                title="Marcas"
                subtitle="As melhores marcas do mercado reunidas em um só lugar, escolhidas a dedo para o seu estilo e conforto visual."
            />

            <div className="relative flex">
                <motion.div
                    className="flex flex-nowrap gap-16 lg:gap-32 items-center"
                    animate={{
                        x: ['0%', '-50%'],
                    }}
                    transition={{
                        duration: 30,
                        ease: 'linear',
                        repeat: Infinity,
                    }}
                >
                    {duplicatedBrands.map((brand, index) => (
                        <div
                            key={index}
                            className="shrink-0 w-20 lg:w-40 flex justify-center"
                        >
                            <Image
                                src={brand.src}
                                alt={brand.name}
                                width={120}
                                height={60}
                                draggable={false}
                                className="object-contain opacity-50 hover:opacity-100 h-auto w-full transition-opacity duration-300 grayscale hover:grayscale-0"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
}
