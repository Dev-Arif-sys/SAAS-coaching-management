// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
    ChromeOutlined,
    QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const institutionManagement = {
    id: 'management',
    title: 'Management',
    type: 'item',
    children: [
        {
            id: 'register-institution',
            title: 'Registration Institution',
            type: 'item',
            url: '/register-institution',
            icon: icons.ChromeOutlined
        }
    ]
};

export default institutionManagement;
