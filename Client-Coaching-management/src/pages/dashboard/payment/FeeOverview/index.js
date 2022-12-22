import ContentContainer from 'components/ui/ContentContainer';
import Heading from 'pages/dashboard/student/currentStudents/Heading';
import React from 'react';
import FeesSearchBarOption from './FeesSearchBarOption';

const index = () => {
    return (
        <>
            <Heading title="fee Overview" />
            <ContentContainer>
                <FeesSearchBarOption />
            </ContentContainer>
        </>
    );
};

export default index;
