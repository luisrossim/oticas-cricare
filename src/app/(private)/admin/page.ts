import { createClient } from '@/libs/supabase/sup-server';
import { redirect } from 'next/navigation';

export default async function AdminPage() {
    const supabase = await createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (user) {
        redirect('/admin/dashboard');
    }

    redirect('/admin/login');
}
