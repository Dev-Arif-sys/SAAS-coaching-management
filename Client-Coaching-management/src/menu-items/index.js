// project import
import accounts from './accounts';
import dashboard from './dashboard';
import exams from './exams';
import institutionManagement from './institutionManagement';
import payment from './payment';
import setting from './setting';
import SMS from './sms';
import students from './students';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
    items: [dashboard, students, exams, payment, SMS, accounts, setting, institutionManagement]
};

export default menuItems;
