// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
    ChromeOutlined,
    QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const payment = {
    id: 'Payment',
    title: 'Payment',
    type: 'item',
    children: [
        {
            id: 'pay-fees',
            title: 'Pay Fees',
            type: 'item',
            url: '/pay-fees',
            icon: icons.ChromeOutlined
        },
        {
            id: 'pay-due',
            title: 'Pay Due',
            type: 'item',
            url: '/pay-due',
            icon: icons.QuestionOutlined
        },
        {
            id: 'fee-overview',
            title: 'Fees Overview',
            type: 'item',
            url: '/fee-overview',
            icon: icons.QuestionOutlined
        },
        {
            id: 'due-overview',
            title: 'Due Overview',
            type: 'item',
            url: '/due-overview',
            icon: icons.QuestionOutlined
        },
        {
            id: 'manage-payment',
            title: 'Manage-Payment',
            type: 'item',
            url: '/manage-payment',
            icon: icons.QuestionOutlined
        }
    ]
};

export default payment;
