import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout/index';
import SalesProduct from 'pages/dashboard/SalesProduct';
import CurrentStudents from 'pages/dashboard/student/currentStudents/index';
import PromoteStudents from 'pages/dashboard/student/promoteStudents/index';
import RegisterStudents from 'pages/dashboard/student/RegisterStudents/index';
import FormTest from 'pages/FormTest';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// render sections
//exam
const ExamMarkEntry = Loadable(lazy(() => import('pages/dashboard/exams/ExamMarkEntry/index')));
const ViewResult = Loadable(lazy(() => import('pages/dashboard/exams/ViewResult/Index')));
//payment
const PayFee = Loadable(lazy(() => import('pages/dashboard/payment/PayFee/index')));
const PayDue = Loadable(lazy(() => import('pages/dashboard/payment/PayDue/index')));
const DueOverview = Loadable(lazy(() => import('pages/dashboard/payment/DueOverview/index')));
const FeeOverview = Loadable(lazy(() => import('pages/dashboard/payment/FeeOverview/index')));
const ManagePayment = Loadable(lazy(() => import('pages/dashboard/payment/ManagePayment/index')));
//message
const MessageAbsent = Loadable(lazy(() => import('pages/dashboard/message/MessageAbsent')));
const SMSNotice = Loadable(lazy(() => import('pages/dashboard/message/SMSNotice')));
const TargetSMS = Loadable(lazy(() => import('pages/dashboard/message/TargetSMS')));
const Advertising = Loadable(lazy(() => import('pages/dashboard/message/Advertising')));
// accounts
const ExpenseEntry = Loadable(lazy(() => import('pages/dashboard/accounts/ExpenseEntry/index')));
const ExpenseDetails = Loadable(lazy(() => import('pages/dashboard/accounts/ExpenseDetails/index')));
const IncomeVsExpense = Loadable(lazy(() => import('pages/dashboard/accounts/IncomeVsExpense/index')));
const DailyReport = Loadable(lazy(() => import('pages/dashboard/accounts/DailyReport/index')));
// setting
const ManageUser = Loadable(lazy(() => import('pages/dashboard/setting/ManageUser/index')));
const AddUser = Loadable(lazy(() => import('pages/dashboard/setting/AddUser/index')));
const ChangePassword = Loadable(lazy(() => import('pages/dashboard/setting/ChangePassword/index')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/dashboard',
    element: <MainLayout />,
    children: [
        {
            path: '',
            element: <DashboardDefault />
        },
        {
            path: 'color',
            element: <Color />
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        },
        {
            path: 'shadow',
            element: <Shadow />
        },
        {
            path: 'typography',
            element: <Typography />
        },
        {
            path: 'icons/ant',
            element: <AntIcons />
        },
        {
            path: 'form-test',
            element: <FormTest />
        },
        {
            path: 'table',
            element: <SalesProduct />
        },
        // -----------student-----------//
        {
            path: 'students',
            element: <CurrentStudents />
        },
        {
            path: 'register-students',
            element: <RegisterStudents />
        },
        {
            path: 'promote',
            element: <PromoteStudents />
        },

        // -----------exam-----------//
        {
            path: 'exam-mark',
            element: <ExamMarkEntry />
        },
        {
            path: 'view-result',
            element: <ViewResult />
        },
        // -----------payment-----------//
        {
            path: 'pay-fees',
            element: <PayFee />
        },
        {
            path: 'pay-due',
            element: <PayDue />
        },
        {
            path: 'fee-overview',
            element: <FeeOverview />
        },
        {
            path: 'due-overview',
            element: <DueOverview />
        },
        {
            path: 'manage-payment',
            element: <ManagePayment />
        },
        // -----------message-----------//
        {
            path: 'sms-absent',
            element: <MessageAbsent />
        },
        {
            path: 'target-sms',
            element: <TargetSMS />
        },
        {
            path: 'advertising',
            element: <Advertising />
        },
        {
            path: 'sms',
            element: <SMSNotice />
        },
        // -----------accounts-----------//
        {
            path: 'expense-entry',
            element: <ExpenseEntry />
        },
        {
            path: 'expense-details',
            element: <ExpenseDetails />
        },
        {
            path: 'income-vs-expense',
            element: <IncomeVsExpense />
        },
        {
            path: 'daily-report',
            element: <DailyReport />
        },
        // -----------setting-----------//
        {
            path: 'manage-user',
            element: <ManageUser />
        },
        {
            path: 'add-user',
            element: <AddUser />
        },
        {
            path: 'change-password',
            element: <ChangePassword />
        }
    ]
};

export default MainRoutes;
