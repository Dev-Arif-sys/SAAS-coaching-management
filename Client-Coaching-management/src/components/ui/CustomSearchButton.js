import { IconButton, useTheme } from '@mui/material';
import { BiSearchAlt } from 'react-icons/bi';
const CustomSearchButton = ({ handle, ...others }) => {
    const theme = useTheme();
    return (
        <IconButton
            style={{
                background: theme.palette.text.heading,
                padding: '7px',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center',
                maxWidth: '45px'
            }}
            role={'button'}
            tabIndex={0}
            onClick={handle}
            onKeyDown={handle}
            {...others}
        >
            <BiSearchAlt
                style={{
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: '28px'
                }}
            />
        </IconButton>
    );
};

export default CustomSearchButton;
