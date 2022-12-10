import { makeStyles } from '@mui/styles';

const afterStyleCoustome = makeStyles({
    borderpos: {
        // background: 'red',
        position: 'relative',
        '&:before': {
            position: 'absolute',
            content: `' '`,
            top: '73px',
            left: '-124px',
            right: '0px',
            width: '60%',
            height: 2,
            background: 'grey'
        },
        '&:after': {
            position: 'absolute',
            content: `' '`,
            top: '73px',
            left: '316px',
            right: '7px',
            width: ' 60%',
            height: 2,
            background: 'grey'
        }
    },
    curcleStyle: {
        // color: 'success.main',
        // bgcolor: 'success.lighter'
        background: '#fff',
        width: '80px',
        height: '80px',
        borderRadius: '100px',
        overflow: 'hidden',
        margin: '0 auto',
        fontSize: '30px',
        color: '#878991',
        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        fontWeight: '400',
        padding: '27px'
    },
    TitleStyle: {
        fontSize: '48px',
        lineHeight: '48px',
        fontWeight: '600',
        color: '#30323d',
        paddingBottom: '27px'
    },
    TitleSupStyle: {
        fontSize: '24px',
        fontWeight: '600',
        color: '#30323d',
        paddingBottom: '20px'
    },

    parStyle: {
        fontSize: '16px',
        color: '#878991',
        lineHeight: '1.6em',

        fontWeight: '400',
        letterSpacing: '0.1px'
    }
});

export default afterStyleCoustome;
