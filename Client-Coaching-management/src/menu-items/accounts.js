// assets
import {
    AntDesignOutlined,
    AppstoreAddOutlined,
    BarcodeOutlined,
    BgColorsOutlined,
    FontSizeOutlined,
    LoadingOutlined
} from '@ant-design/icons';

// icons
const icons = {
    FontSizeOutlined,
    BgColorsOutlined,
    BarcodeOutlined,
    AntDesignOutlined,
    LoadingOutlined,
    AppstoreAddOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const accounts = {
    id: 'accounts',
    title: 'Accounts',
    type: 'collapse',
    children: [
        {
            id: 'expense-entry',
            title: 'Expense Entry',
            type: 'item',
            url: '/expense-entry',
            icon: icons.FontSizeOutlined
        },
        {
            id: 'expense-details',
            title: 'Expense Details',
            type: 'item',
            url: '/expense-details',
            icon: icons.BgColorsOutlined
        },
        {
            id: 'income-vs-expense',
            title: 'Income Vs Expense',
            type: 'item',
            url: '/income-vs-expense',
            icon: icons.BarcodeOutlined
        },
        {
            id: 'daily-report',
            title: 'Daily Report',
            type: 'item',
            url: '/daily-report',
            icon: icons.AntDesignOutlined,
            breadcrumbs: false
        }
    ]
};

export default accounts;
