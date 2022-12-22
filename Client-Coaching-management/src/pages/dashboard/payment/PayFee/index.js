import ContentContainer from 'components/ui/ContentContainer';
import Heading from 'pages/dashboard/student/currentStudents/Heading';
import React from 'react';
import SearchBarOption from './SearchBarOption';

const index = () => {
    return (
        <div>
            <Heading title="Pay Fees" />
            <ContentContainer>
                <SearchBarOption />
            </ContentContainer>
        </div>
    );
};

export default index;
