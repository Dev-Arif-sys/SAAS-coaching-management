import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout/index';
import MultiPurposeTable from 'components/propsTable/MultiPurposeTable';
import SalesProduct from 'pages/dashboard/SalesProduct';
import ExamMarkEntry from 'pages/dashboard/exams/ExamMarkEntry/index';
import ViewResult from 'pages/dashboard/exams/ViewResult/Index';
import DueOverview from 'pages/dashboard/payment/DueOverview/index';
import FeeOverview from 'pages/dashboard/payment/FeeOverview/index';
import ManagePayment from 'pages/dashboard/payment/ManagePayment/index';
import PayDue from 'pages/dashboard/payment/PayDue/index';
import PayFee from 'pages/dashboard/payment/PayFee/index';
import FormTest from 'pages/FormTest';
import MessageAbsent from 'pages/dashboard/message/MessageAbsent';
import TargetSMS from 'pages/dashboard/message/TargetSMS';
import Advertising from 'pages/dashboard/message/Advertising';
import SMSNotice from 'pages/dashboard/message/SMSNotice';
import ExpenseEntry from 'pages/dashboard/accounts/ExpenseEntry/index';
import ExpenseDetails from 'pages/dashboard/accounts/ExpenseDetails/index';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

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
        {
            path: 'exam-mark',
            element: <ExamMarkEntry />
        },
        {
            path: 'view-result',
            element: <ViewResult />
        },
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
            element: 'call your component Kibria vai'
        },
        {
            path: 'daily-report',
            element: 'call your component Kibria vai'
        }
    ]
};

export default MainRoutes;
