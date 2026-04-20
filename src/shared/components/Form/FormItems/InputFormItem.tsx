'use client';

import { Col, Form, Input } from 'antd';
import { Rule } from 'antd/es/form';

interface Props {
    name: string;
    label?: string;
    rules?: Rule[];
    placeholder?: string;
    span?: number;
}

export function InputFormItem({
    name,
    label,
    rules,
    placeholder,
    span = 24,
}: Props) {
    return (
        <Col xs={24} md={span} span={span}>
            <Form.Item name={name} label={label} rules={rules}>
                <Input placeholder={placeholder} />
            </Form.Item>
        </Col>
    );
}
