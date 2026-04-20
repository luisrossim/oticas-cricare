import { inter } from '@/shared/styles/fonts';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
    title: 'Óticas Cricaré',
    description: 'Enxergar com confiança, estilo e atenção de verdade',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html
            lang="pt-br"
            className={`${inter.className} h-full antialiased bg-white`}
        >
            <body className="flex flex-col">{children}</body>
        </html>
    );
}
