import ContentContainer from 'components/ui/ContentContainer';
import Heading from 'pages/dashboard/student/currentStudents/Heading';
import React from 'react';

import SearchData from './SearchData';

const IncomeVsExpense = () => {
    return (
        <div>
            <Heading title="fee Overview" />
            <ContentContainer>
                <SearchData />
            </ContentContainer>
        </div>
    );
};

export default IncomeVsExpense;
