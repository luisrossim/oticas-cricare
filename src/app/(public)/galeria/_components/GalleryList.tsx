'use client';

import { lora } from '@/shared/styles/fonts';
import { AnimatePresence, motion } from 'framer-motion';
import { SlidersHorizontal, X } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Section } from '../../_components/Section';
import { SectionTitle } from '../../_components/Section/_components/SectionTitle';

const FILTER_GROUPS = [
    { label: 'Tipo', options: ['Com Grau', 'Solar', 'Tecnológico', 'Lentes'] },
    {
        label: 'Gênero/Público',
        options: ['Masculino', 'Feminino', 'Unissex', 'Infantil', 'Adulto'],
    },
    {
        label: 'Destaques',
        options: ['Em destaque', 'Novidade', 'Mais vendido'],
    },
    { label: 'Estilo', options: ['Esporte', 'Marcas'] },
    {
        label: 'Formato da Armação',
        options: [
            'Aviador',
            'Gatinho',
            'Quadrado',
            'Retangular',
            'Redondo',
            'Oval',
            'Pantos',
            'Hexagonal',
        ],
    },
];

export function GalleryList() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const activeFilters = searchParams.get('f')?.split(',') || [];
    const [tempFilters, setTempFilters] = useState<string[]>(activeFilters);

    const toggleTempFilter = (filter: string) => {
        setTempFilters((prev) =>
            prev.includes(filter)
                ? prev.filter((f) => f !== filter)
                : [...prev, filter],
        );
    };

    const applyFilters = () => {
        const params = new URLSearchParams(searchParams);

        if (tempFilters.length > 0) {
            params.set('f', tempFilters.join(','));
        } else {
            params.delete('f');
        }

        router.push(`?${params.toString()}`, { scroll: false });
        setIsModalOpen(false);
    };

    const removeFilter = (filter: string) => {
        const newFilters = activeFilters.filter((f) => f !== filter);
        const params = new URLSearchParams(searchParams);

        if (newFilters.length > 0) {
            params.set('f', newFilters.join(','));
        } else {
            params.delete('f');
        }

        setTempFilters(newFilters);
        router.push(`?${params.toString()}`, { scroll: false });
    };

    const clearAllFilters = () => {
        const params = new URLSearchParams(searchParams);
        params.delete('f');

        setTempFilters([]);
        router.push('?', { scroll: false });
    };

    return (
        <Section>
            <SectionTitle title="Galeria" />

            <div className="flex flex-wrap items-center gap-4 mb-12">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 text-blue-600 text-xs uppercase tracking-widest font-bold transition-all active:scale-95"
                >
                    <SlidersHorizontal size={16} />
                    Filtrar
                </button>

                <div className="flex flex-wrap gap-2">
                    <AnimatePresence>
                        {activeFilters.map((filter) => (
                            <motion.span
                                key={filter}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="flex items-center gap-2 bg-zinc-100 border border-zinc-200 px-4 py-2 rounded-full text-[10px] uppercase font-bold tracking-tighter text-zinc-600"
                            >
                                {filter}
                                <button onClick={() => removeFilter(filter)}>
                                    <X
                                        size={14}
                                        className="hover:text-red-500"
                                    />
                                </button>
                            </motion.span>
                        ))}
                    </AnimatePresence>

                    {activeFilters.length > 0 && (
                        <button
                            onClick={clearAllFilters}
                            className="text-[10px] uppercase text-zinc-400 hover:text-zinc-800 ml-2"
                        >
                            Limpar Tudo
                        </button>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-16 lg:gap-x-8 lg:gap-y-24">
                {[...Array(9)].map((_, index) => (
                    <div key={index} className="group cursor-pointer">
                        <div className="relative aspect-4/3 w-full overflow-hidden bg-zinc-100 mb-4 lg:mb-6">
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                        </div>
                        <div className="space-y-2 max-w-md">
                            <h3 className="text-sm xl:text-base font-serif text-black leading-tight uppercase tracking-widest">
                                Item {index + 1}
                            </h3>
                            <p className="text-zinc-500 text-xs xl:text-sm leading-relaxed font-light">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Deserunt impedit accusantium
                                neque cumque unde!
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {isModalOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-2000"
                        />

                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{
                                type: 'spring',
                                damping: 25,
                                stiffness: 200,
                            }}
                            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-2001 p-8 flex flex-col"
                        >
                            <div className="flex justify-between items-center mb-12">
                                <h2
                                    className={`text-xl uppercase tracking-widest ${lora.className}`}
                                >
                                    Filtros
                                </h2>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="p-2 hover:bg-zinc-100 rounded-full"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto pr-2 space-y-10">
                                {FILTER_GROUPS.map((group) => (
                                    <div key={group.label}>
                                        <h4 className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-bold mb-5">
                                            {group.label}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {group.options.map((option) => (
                                                <button
                                                    key={option}
                                                    onClick={() =>
                                                        toggleTempFilter(option)
                                                    }
                                                    className={`px-5 py-2.5 rounded-full text-[10px] uppercase font-bold tracking-widest transition-all border ${
                                                        tempFilters.includes(
                                                            option,
                                                        )
                                                            ? 'bg-blue-600 border-blue-600 text-white'
                                                            : 'bg-white border-zinc-200 text-zinc-500 hover:border-zinc-900 hover:text-zinc-900'
                                                    }`}
                                                >
                                                    {option}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={applyFilters}
                                className="w-full bg-lime-600 text-white py-5 rounded-none uppercase text-xs tracking-[0.2em] hover:bg-lime-500 transition-colors mt-8"
                            >
                                Aplicar Filtros
                            </button>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </Section>
    );
}
