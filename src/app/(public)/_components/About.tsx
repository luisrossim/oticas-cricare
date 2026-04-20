import { lora } from '@/shared/styles/fonts';
import Image from 'next/image';
import { Section } from './Section';

export function About() {
    return (
        <Section>
            <div
                className={`grid grid-cols-1 md:grid-cols-3 w-full overflow-hidden rounded-sm ${lora.className}`}
            >
                <div className="order-2 md:order-1 bg-[#B2E00A] p-3 lg:p-6 xl:p-12 col-span-1 md:col-span-2 flex flex-col gap-12 justify-between min-h-30 md:min-h-50">
                    <div className="text-white">
                        <svg
                            width="50"
                            height="50"
                            viewBox="0 0 100 100"
                            fill="currentColor"
                        >
                            <path d="M50 20c-5-10-20-10-25 0s0 20 10 25c-10 5-10 20 0 25s20 0 25-10c5 10 20 10 25 0s0-20-10-25c10-5 10-20 0-25s-20 0-25 10z" />
                        </svg>
                    </div>

                    <h2 className="text-xl lg:text-3xl font-light tracking-tighter text-black uppercase italic pl-3">
                        Excelência em{' '}
                        <span className="font-bold not-italic text-white pl-1">
                            Saúde Visual
                        </span>
                    </h2>
                </div>

                <div className="order-1 md:order-2 relative min-h-50 md:min-h-full">
                    <Image
                        src="/assets/images/about.avif"
                        alt="Modelo usando óculos"
                        fill
                        className="object-cover"
                        unoptimized
                    />
                </div>
            </div>
        </Section>
    );
}
