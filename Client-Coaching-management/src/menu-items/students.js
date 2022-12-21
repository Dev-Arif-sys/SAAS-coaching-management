// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
    ChromeOutlined,
    QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const students = {
    id: 'students',
    title: 'Students',
    type: 'item',
    children: [
        {
            id: 'current-student',
            title: 'Current Students',
            type: 'item',
            url: '/students',
            icon: icons.ChromeOutlined
        },
        {
            id: 'register-students',
            title: 'Register Students',
            type: 'item',
            url: '/register-students',
            icon: icons.QuestionOutlined
        },
        {
            id: 'promote-students',
            title: 'Promote Students',
            type: 'item',
            url: '/promote',
            icon: icons.QuestionOutlined
        }
    ]
};

export default students;
