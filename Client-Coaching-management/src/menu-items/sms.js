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

const sms = {
    id: 'message',
    title: 'Message',
    type: 'collapse',
    children: [
        {
            id: 'util-typography',
            title: 'SMS Absent Student',
            type: 'item',
            url: '/sms-absent',
            icon: icons.FontSizeOutlined
        },
        {
            id: 'notice',
            title: 'SMS Notice',
            type: 'item',
            url: '/color',
            icon: icons.BgColorsOutlined
        },
        {
            id: 'target',
            title: 'Targeted SMS',
            type: 'item',
            url: '/target-sms',
            icon: icons.BarcodeOutlined
        },
        {
            id: 'advertise',
            title: 'Advertising',
            type: 'item',
            url: '/icons/ant',
            icon: icons.AntDesignOutlined,
            breadcrumbs: false
        },
        {
            id: 'buy',
            title: 'Buy SMS',
            type: 'item',
            url: '/table',
            icon: icons.AntDesignOutlined,
            breadcrumbs: false
        }
    ]
};

export default sms;
