'use client';

import { enterprise } from '../_constants/enterprise';
import { Section } from './Section';
import { SectionTitle } from './Section/_components/SectionTitle';

export function Contact() {
    return (
        <Section sectionId="contato">
            <SectionTitle
                title="Entre em contato"
                subtitle="Você encontra mais produtos excelentes em nossas lojas físicas."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {enterprise.stores.map((store, index) => (
                    <div
                        key={index}
                        className="flex flex-col space-y-1 p-5 lg:p-8 border border-gray-100"
                    >
                        <h3 className="text-base lg:text-lg font-medium">
                            {store.city}
                        </h3>

                        <p className="text-sm text-gray-600">{store.address}</p>

                        <p className="text-sm text-gray-600">{store.details}</p>

                        <a
                            href={`tel:${store.phone.replace(/\D/g, '')}`}
                            className="text-sm font-medium mt-3 text-blue-600"
                        >
                            {store.phone}
                        </a>
                    </div>
                ))}
            </div>
        </Section>
    );
}
