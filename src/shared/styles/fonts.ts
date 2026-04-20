import { Fraunces, Inter, Inter_Tight, Lora } from 'next/font/google';

export const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

export const interTight = Inter_Tight({
    subsets: ['latin'],
    variable: '--font-inter-tight',
    display: 'swap',
});

export const fraunces = Fraunces({
    subsets: ['latin'],
    variable: '--font-fraunces',
    display: 'swap',
});

export const lora = Lora({
    subsets: ['latin'],
    variable: '--font-lora',
    display: 'swap',
});
