'use server';

import { createClient } from '@/libs/supabase/sup-server';
import { redirect } from 'next/navigation';
import { SignInRequestType } from '../_types/SignInRequestType';

export async function signIn(values: SignInRequestType) {
    const supabase = await createClient();

    const { error } = await supabase.auth.signInWithPassword({
        email: values.username!,
        password: values.password!,
    });

    if (error) {
        return { success: false, message: error.message };
    }

    redirect('/admin/dashboard');
}
