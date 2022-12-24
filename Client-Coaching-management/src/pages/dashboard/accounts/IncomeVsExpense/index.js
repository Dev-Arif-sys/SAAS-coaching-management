import ContentContainer from 'components/ui/ContentContainer';
import Heading from 'pages/dashboard/student/currentStudents/Heading';
import React from 'react';
import { BsFillPeopleFill } from 'react-icons/bs';
import SearchData from './SearchData';

const IncomeVsExpense = () => {
    return (
        <div>
            <Heading />
            <ContentContainer>
                <SearchData />
            </ContentContainer>
        </div>
    );
};

export default IncomeVsExpense;
