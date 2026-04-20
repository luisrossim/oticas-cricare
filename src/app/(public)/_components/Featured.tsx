import { Section } from './Section';
import { SectionTitle } from './Section/_components/SectionTitle';

export function Featured() {
    return (
        <Section sectionId="destaques">
            <SectionTitle title="Em destaque" />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 h-105 bg-zinc-200"></div>
        </Section>
    );
}
