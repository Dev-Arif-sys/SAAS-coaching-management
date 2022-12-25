// material-ui
import { styled } from '@mui/material/styles';

// loader style
const ButtonWrapper = styled('button')(({ theme }) => ({
    display: 'inline-block',
    padding: '.75rem 1.25rem',
    borderRadius: '5px',
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: '0.8rem',
    letterSpacing: '.15rem',
    transition: 'all .3s',
    position: 'relative',
    overflow: 'hidden',
    zIndex: '1',
    border: 'none',

    ' &:after': {
        content: `''`,
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: ' #0cf',
        borderRadius: '5px',
        zIndex: '-2'
    },
    '&:before': {
        content: `''`,
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '0%',
        height: '100%',
        backgroundColor: 'darken(#0cf, 15%)',
        transition: 'all .3s',
        borderRadius: ' 5px',
        zIndex: ' -1'
    },
    '&:hover': {
        color: '#fff',
        '&:before': {
            width: '100%'
        }
    }
}));

// ==============================|| Loader ||============================== //

const CustomButton = ({ children }) => <ButtonWrapper>{children}</ButtonWrapper>;

export default CustomButton;
