// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
    ChromeOutlined,
    QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const setting = {
    id: 'setting',
    title: 'Setting',
    type: 'item',
    children: [
        {
            id: 'manage-user',
            title: 'Manage User',
            type: 'item',
            url: '/manage-user',
            icon: icons.ChromeOutlined
        },
        {
            id: 'add-user',
            title: 'Add User',
            type: 'item',
            url: '/add-user',
            icon: icons.QuestionOutlined
        },
        {
            id: 'change-password',
            title: 'Change Password',
            type: 'item',
            url: '/change-password',
            icon: icons.QuestionOutlined
        }
    ]
};

export default setting;
