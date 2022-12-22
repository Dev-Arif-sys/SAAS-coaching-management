import ContentContainer from 'components/ui/ContentContainer';
import Heading from 'pages/dashboard/student/currentStudents/Heading';
import React from 'react';
import DueSearchBarOption from './DueSearchBarOption';

const index = () => {
    return (
        <>
            <Heading title="Payment Due" />
            <ContentContainer>
                <DueSearchBarOption />
            </ContentContainer>
        </>
    );
};

export default index;
