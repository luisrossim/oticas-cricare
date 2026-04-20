import { BrandCarrousel } from './_components/BrandCarrousel';
import { Categories } from './_components/Categories';
import { Contact } from './_components/Contact';
import { Featured } from './_components/Featured';
import { Hero } from './_components/Hero';
import { Posts } from './_components/Posts';

export default function Page() {
    return (
        <>
            <Hero />
            <Categories />
            <BrandCarrousel />
            <Featured />
            <Posts />
            <Contact />
        </>
    );
}
