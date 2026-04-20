import { About } from '@/app/(public)/_components/About';
import { Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { enterprise } from '../_constants/enterprise';
import { landingRoutes } from '../_constants/routes';

const footerLinks = {
    institucional: [
        { name: 'Coleções', href: '/colecoes' },
        { name: 'Marcas', href: '/marcas' },
        { name: 'Pós venda', href: '/pos-venda' },
        { name: 'Serviços', href: '/servicos' },
    ],
    ajuda: [
        { name: 'Sobre nós', href: '/sobre' },
        { name: 'Contato', href: '/contato' },
        { name: 'Localizações', href: '/localizacoes' },
    ],
    sociais: [
        { name: '@oticascricare', href: '#', icon: Phone },
        { name: '@oticascricareoficial', href: '#', icon: Phone },
        { name: '(27) 99999-9999', href: 'tel:27999999999', icon: Phone },
    ],
};

export function Footer() {
    return (
        <>
            <About />

            <footer className="bg-white text-black py-16 lg:py-24 font-light border-t border-zinc-100">
                <div className="max-w-430 mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
                        <div className="lg:col-span-7">
                            <h2
                                className={`text-2xl lg:text-3xl font-normal max-w-md`}
                            >
                                Enxergar com confiança, estilo e atenção de
                                verdade.
                            </h2>
                        </div>

                        <div className="lg:col-span-5 grid grid-cols-1 gap-8 lg:pl-12 text-sm lg:text-base">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                                {landingRoutes.map((route) => (
                                    <Link key={route.name} href={route.href}>
                                        {route.name}
                                    </Link>
                                ))}
                            </div>

                            <div className="flex flex-col gap-4">
                                {enterprise.social_media.map(
                                    (social, index) => (
                                        <Link
                                            key={index}
                                            href={social.href}
                                            className="flex items-center gap-2"
                                        >
                                            <Image
                                                src={social.icon}
                                                alt={social.name}
                                                width={20}
                                                height={20}
                                                className="object-contain opacity-70"
                                            />
                                            {social.profile}
                                        </Link>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 lg:mt-32">
                        <Image
                            src="/assets/logos/logo-icon.png"
                            alt="Óticas Cricaré"
                            width={60}
                            height={40}
                            className="object-contain"
                        />
                    </div>
                </div>
            </footer>
        </>
    );
}
