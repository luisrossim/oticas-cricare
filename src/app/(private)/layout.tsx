import { inter } from '@/shared/styles/fonts';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { App, ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';

interface Props {
    children: React.ReactNode;
}

export default function AdminLayout({ children }: Props) {
    return (
        <AntdRegistry>
            <ConfigProvider
                locale={ptBR}
                theme={{
                    token: {
                        colorPrimary: '#155dfc',
                        fontFamily: inter.style.fontFamily,
                    },
                    components: {
                        Input: {
                            paddingInline: 10,
                            paddingBlock: 6,
                        },
                        Form: {
                            verticalLabelPadding: 5,
                        },
                    },
                }}
            >
                <App>{children}</App>
            </ConfigProvider>
        </AntdRegistry>
    );
}
