import { createClient } from '@/libs/supabase/sup-server';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        redirect('/admin');
    }

    return <h1>Bem-vindo, {user.email}</h1>;
}
