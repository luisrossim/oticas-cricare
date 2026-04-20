import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { enterprise } from '../../_constants/enterprise';
import { Section } from '../Section';
import { SectionTitle } from '../Section/_components/SectionTitle';
import { CategoryCard } from './_components/CategoryCard';

export function Categories() {
    return (
        <Section sectionId="categorias">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <SectionTitle
                    title="Categorias"
                    subtitle="Soluções completas que unem alta tecnologia, design exclusivo e o ajuste perfeito para cada fase da sua vida."
                />

                <Link
                    href="/galeria"
                    className="group flex items-center gap-2 uppercase text-xs tracking-widest hover:text-blue-500 transition-colors mb-2"
                >
                    Explorar Galeria
                    <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                    />
                </Link>
            </div>

            <div className="flex flex-col gap-20 md:gap-32">
                {enterprise.categories.map((category, index) => (
                    <CategoryCard
                        key={index}
                        title={category.title}
                        image={category.image}
                        description={category.description}
                        isReversed={index % 2 !== 0}
                    />
                ))}
            </div>
        </Section>
    );
}
