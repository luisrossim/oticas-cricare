import { Loader } from 'lucide-react';
import { Suspense } from 'react';
import { GalleryHero } from './_components/GalleryHero';
import { GalleryList } from './_components/GalleryList';

export default function GalleryPage() {
    return (
        <main>
            <GalleryHero />
            <Suspense
                fallback={
                    <div className="h-screen flex items-center justify-center">
                        <Loader />
                    </div>
                }
            >
                <GalleryList />
            </Suspense>
        </main>
    );
}
