// project import
import accounts from './accounts';
import dashboard from './dashboard';
import exams from './exams';
import pages from './pages';
import payment from './payment';
import setting from './setting';
import SMS from './sms';
import support from './support';
import utilities from './utilities';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
    items: [dashboard, pages, utilities, support, exams, payment, SMS, accounts, setting]
};

export default menuItems;
