import { inter, lora } from '@/styles/fonts';

interface Props {
    title: string;
    subtitle?: string;
}

export function SectionTitle({ title, subtitle }: Props) {
    return (
        <div className="flex flex-col gap-2 text-gray-900 mb-8">
            <h1 className={`text-3xl lg:text-4xl ${lora.className}`}>
                {title}
            </h1>
            {subtitle && (
                <p
                    className={`text-sm lg:text-xl font-light ${inter.className}`}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
}
