import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center bg-black">
            <div className="space-y-4">
                <h2 className="font-serif text-9xl font-bold text-white/10 select-none">
                    404
                </h2>

                <h1 className="font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    Página não encontrada
                </h1>

                <p className="mx-auto max-w-md text-lg text-gray-400">
                    Parece que os óculos que você está procurando não estão
                    nesta vitrine. Que tal voltar para a página inicial?
                </p>
            </div>

            <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                    href="/"
                    className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition-all hover:bg-gray-200 active:scale-95"
                >
                    Voltar ao Início
                </Link>

                <Link
                    href="/#contato"
                    className="text-sm font-semibold text-white hover:underline decoration-white/30 underline-offset-4"
                >
                    Falar com Atendimento <span aria-hidden="true">&rarr;</span>
                </Link>
            </div>
        </main>
    );
}
