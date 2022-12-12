import { createTheme } from '@mui/material/styles';
// ==============================|| DEFAULT THEME - TYPOGRAPHY  ||============================== //

const theme = createTheme();
const Typography = (fontFamily) => ({
    htmlFontSize: 16,
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
        fontWeight: 600,
        fontSize: '2.1rem',
        fontFamily: ['Poppins', 'sans-serif'].join(','),
        lineHeight: 1.21,
        [theme.breakpoints.down('md')]: {
            fontSize: '1.7rem'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem'
        }
    },
    h2: {
        fontWeight: 600,
        fontSize: '1.875rem',
        fontFamily: ['Poppins', 'sans-serif'].join(','),
        lineHeight: 1.27
    },
    h3: {
        fontWeight: 600,
        fontSize: '1.5rem',
        fontFamily: ['Poppins', 'sans-serif'].join(','),
        lineHeight: 1.33
    },
    h4: {
        fontWeight: 600,
        fontSize: '1.25rem',
        fontFamily: ['Poppins', 'sans-serif'].join(','),
        lineHeight: 1.4
    },
    h5: {
        fontWeight: 600,
        fontSize: '1rem',
        fontFamily: ['Poppins', 'sans-serif'].join(','),
        lineHeight: 1.5
    },
    h6: {
        fontWeight: 400,
        fontSize: '0.875rem',
        fontFamily: ['Poppins', 'sans-serif'].join(','),
        lineHeight: 1.57
    },
    caption: {
        fontWeight: 400,
        fontSize: '0.75rem',
        fontFamily: ['Poppins', 'sans-serif'].join(','),
        lineHeight: 1.66
    },
    body1: {
        fontWeight: 400,
        fontSize: '1rem',
        fontFamily: ['Poppins', 'sans-serif'].join(','),
        lineHeight: 1.57,
        [theme.breakpoints.down('md')]: {
            fontSize: '.9rem'
        }
    },
    body2: {
        fontSize: '0.75rem',
        fontFamily: ['Poppins', 'sans-serif'].join(','),
        lineHeight: 1.66
    },
    subtitle1: {
        fontSize: '0.875rem',
        fontWeight: 600,
        fontFamily: ['Poppins', 'sans-serif'].join(','),
        lineHeight: 1.57,
        [theme.breakpoints.down('md')]: {
            fontSize: '.775rem'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '675rem'
        }
    },
    subtitle2: {
        fontSize: '0.75rem',
        fontWeight: 500,
        fontFamily: ['Poppins', 'sans-serif'].join(','),
        lineHeight: 1.66
    },
    overline: {
        lineHeight: 1.66
    },
    button: {
        textTransform: 'capitalize'
    }
});

export default Typography;
