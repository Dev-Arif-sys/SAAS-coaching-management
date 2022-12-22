import ContentContainer from 'components/ui/ContentContainer';
import Heading from 'pages/dashboard/student/currentStudents/Heading';
import React from 'react';

import SearchData from './SearchData';

const DailyReport = () => {
    return (
        <div>
            <Heading title="Today Income Vs Expense" />
            <ContentContainer>
                <SearchData />
            </ContentContainer>
        </div>
    );
};

export default DailyReport;
