import ContentContainer from 'components/ui/ContentContainer';
import Heading from 'pages/dashboard/student/currentStudents/Heading';
import React from 'react';
import SuperAdminTableSearchBarOption from './SuperAdminTableSearchBarOption';

const Super = () => {
    return (
        <>
            <Heading title="fee Overview" />
            <ContentContainer>
                <SuperAdminTableSearchBarOption />
            </ContentContainer>
        </>
    );
};

export default Super;
