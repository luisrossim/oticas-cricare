import { Section } from '../../_components/Section';
import { SectionTitle } from '../../_components/Section/_components/SectionTitle';
import { enterprise } from '../../_constants/enterprise';

export function PosDescription() {
    return (
        <Section>
            <SectionTitle title="Pós venda" />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
                {enterprise.pos_sale.map((item, index) => (
                    <div key={index} className="space-y-2">
                        <h3 className="text-lg text-gray-900 flex items-center gap-2">
                            {item.title}
                        </h3>
                        <p className="text-zinc-600 text-sm lg:text-base leading-relaxed font-light">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
