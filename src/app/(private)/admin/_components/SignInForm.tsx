'use client';

import { FormContainer } from '@/shared/components/Form/FormContainer';
import { InputFormItem } from '@/shared/components/Form/FormItems/InputFormItem';
import { PasswordFormItem } from '@/shared/components/Form/FormItems/PasswordFormItem';
import { toast } from '@/shared/components/Messages/toast';
import { Form } from 'antd';
import { Rule } from 'antd/es/form';
import { useState } from 'react';
import { SignInRequestType } from '../_types/SignInRequestType';
import { signIn } from './actions';

const rules: Record<keyof SignInRequestType, Rule[]> = {
    username: [{ required: true }],
    password: [{ required: true }],
};

export function SignInForm() {
    const [form] = Form.useForm();
    const [signInIsloading, setSignInIsloading] = useState(false);

    const onFinish = async (values: SignInRequestType) => {
        setSignInIsloading(true);
        try {
            const result = await signIn(values);

            if (result?.success === false) {
                toast.error(result.message ?? 'Ocorreu um erro!');
            }
        } catch (err) {
            toast.error('Erro inesperado ao realizar login');
        } finally {
            setSignInIsloading(false);
        }
    };

    return (
        <div className="max-w-300">
            <FormContainer
                form={form}
                onFinish={onFinish}
                formName="admin-login"
                submitText="Acessar"
                loading={signInIsloading}
            >
                <InputFormItem
                    span={24}
                    name="username"
                    label="Usuário"
                    rules={rules.username}
                />

                <PasswordFormItem
                    span={24}
                    name="password"
                    label="Senha"
                    rules={rules.password}
                />
            </FormContainer>
        </div>
    );
}
