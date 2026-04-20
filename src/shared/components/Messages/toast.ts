import { message } from 'antd';

export const toast = {
    success: (content: string) => {
        message.success({
            content,
            style: { marginTop: '5vh' },
        });
    },
    error: (content: string) => {
        message.error({
            content,
        });
    },
    info: (content: string) => {
        message.info({
            content,
        });
    },
    warning: (content: string) => {
        message.warning({
            content,
        });
    },
    loading: (content: string) => {
        return message.loading({
            content,
        });
    },
};
