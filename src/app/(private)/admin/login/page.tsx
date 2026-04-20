import { enterprise } from '@/app/(public)/_constants/enterprise';
import { createClient } from '@/libs/supabase/sup-server';
import { lora } from '@/shared/styles/fonts';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { SignInForm } from '../_components/SignInForm';

export default async function Page() {
    const supabase = await createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (user) {
        redirect('/admin/dashboard');
    }

    return (
        <main className="flex min-h-screen bg-white">
            <div className="relative hidden w-0 flex-1 lg:block">
                <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                    alt="Escritório Administrativo"
                />

                <div className="absolute inset-0 bg-gray-900/10 mix-blend-multiply" />
            </div>

            <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm lg:w-96 space-y-8">
                    <div className="space-y-1">
                        <Image
                            src={enterprise.logos.green}
                            alt="Óticas Cricaré"
                            width={50}
                            height={30}
                            className="object-contain mb-6"
                        />

                        <h2
                            className={`text-2xl font-medium ${lora.className}`}
                        >
                            Bem-vindo de volta
                        </h2>

                        <p className="text-sm font-light tracking-wide">
                            Acesse o painel administrativo para gerenciar sua
                            plataforma.
                        </p>
                    </div>

                    <SignInForm />
                </div>
            </div>
        </main>
    );
}
