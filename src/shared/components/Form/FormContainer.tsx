'use client';

import { Button, Form, FormInstance, Row } from 'antd';
import { Store } from 'antd/es/form/interface';
import { ReactNode } from 'react';

const validateMessages = {
    required: '${label} é obrigatório!',
    types: {
        email: '${label} não é um e-mail válido!',
        number: '${label} não é um número válido!',
    },
    string: {
        min: '${label} deve ter pelo menos ${min} caracteres',
    },
};

interface Props {
    form?: FormInstance;
    formName?: string;
    initialValues?: Store;
    onFinish: (values: any) => void;
    submitText?: string;
    loading?: boolean;
    children: ReactNode;
}

export function FormContainer({
    form,
    onFinish,
    formName,
    initialValues,
    submitText = 'Confirmar',
    loading,
    children,
}: Props) {
    return (
        <Form
            form={form}
            name={formName}
            initialValues={initialValues}
            onFinish={onFinish}
            validateMessages={validateMessages}
            layout="vertical"
            requiredMark="optional"
        >
            <Row gutter={[16, 0]}>{children}</Row>

            <Form.Item style={{ marginTop: 24 }}>
                <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    block
                >
                    {submitText}
                </Button>
            </Form.Item>
        </Form>
    );
}
