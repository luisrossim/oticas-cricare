import Image from 'next/image';
import { enterprise } from '../_constants/enterprise';
import { Section } from './Section';
import { SectionTitle } from './Section/_components/SectionTitle';

export function Posts() {
    return (
        <Section sectionId="redes-sociais">
            <SectionTitle
                title="Fique atento às nossas redes sociais"
                subtitle="Acompanhe eventos, promoções exclusivas e feedbacks de clientes."
            />

            <div className="grid grid-cols-1 md:grid-cols-2">
                {enterprise.social_media.map((social) => (
                    <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col space-y-1 p-4 lg:p-8 border border-gray-100"
                    >
                        <div className="flex items-center gap-4">
                            <Image
                                src={social.icon}
                                alt="Social"
                                width={35}
                                height={35}
                                className="opacity-70"
                            />
                            <div>
                                <h3 className="text-sm lg:text-base font-medium">
                                    {social.name}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {social.profile}
                                </p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </Section>
    );
}
