import { Footer } from './_components/Footer';
import { Nav } from './_components/Nav';

interface Props {
    children: React.ReactNode;
}

export default function LandingLayout({ children }: Props) {
    return (
        <>
            <Nav />
            <main className="grow">{children}</main>
            <Footer />
        </>
    );
}
