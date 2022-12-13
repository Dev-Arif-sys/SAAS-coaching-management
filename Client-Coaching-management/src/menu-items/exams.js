// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
    ChromeOutlined,
    QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const exams = {
    id: 'exams',
    title: 'Exams',
    type: 'item',
    children: [
        {
            id: 'Exam-Mark',
            title: 'Exam Mark Entry',
            type: 'item',
            url: '/exam-mark',
            icon: icons.ChromeOutlined
        },
        {
            id: 'view-result',
            title: 'View Result and SMS',
            type: 'item',
            url: '/view-result',
            icon: icons.QuestionOutlined
        }
    ]
};

export default exams;
