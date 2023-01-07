import CustomMainHeading from 'components/ui/CustomMainHeading';
import { MdManageAccounts } from 'react-icons/md';
import { useSelector } from 'react-redux';

const Heading = () => {
    const hidden = useSelector((state) => state.student.IsUpdate);
    return (
        <>
            {hidden == true ? (
                <CustomMainHeading
                    icon={
                        <MdManageAccounts
                            style={{
                                marginRight: '5px',
                                fontSize: '20px'
                            }}
                        />
                    }
                    title={' Update Institution'}
                />
            ) : (
                <CustomMainHeading
                    icon={
                        <MdManageAccounts
                            style={{
                                marginRight: '5px',
                                fontSize: '20px'
                            }}
                        />
                    }
                    title={' View Institution'}
                />
            )}
        </>
    );
};

export default Heading;
