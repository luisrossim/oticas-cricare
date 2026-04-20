import { landingRoutes } from '@/app/(public)/_constants/routes';
import Link from 'next/link';

export function NavDesktop() {
    return (
        <nav className="hidden lg:block">
            <ul
                className={`flex gap-11 text-sm transition-colors duration-300 `}
            >
                {landingRoutes.map((link) => (
                    <li key={link.name}>
                        <Link href={link.href} className="py-1">
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
