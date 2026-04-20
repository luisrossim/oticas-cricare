'use client';

import Image from 'next/image';

interface Props {
    title: string;
    description: string;
    image: string;
    isReversed?: boolean;
}

export function CategoryCard({
    title,
    description,
    image,
    isReversed = false,
}: Props) {
    return (
        <div
            className={`
            flex flex-col items-center gap-8 md:gap-16
            ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'}
        `}
        >
            <div className="w-full md:w-1/2 overflow-hidden aspect-video md:aspect-4/2 relative group">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    unoptimized
                />
            </div>

            <div
                className={`w-full md:w-1/2 flex flex-col ${isReversed ? 'md:text-right md:items-end' : 'md:text-left md:items-start'}`}
            >
                <h3 className="text-xl lg:text-3xl font-light mb-3 lg:mb-6">
                    {title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base font-light max-w-md">
                    {description}
                </p>
            </div>
        </div>
    );
}
