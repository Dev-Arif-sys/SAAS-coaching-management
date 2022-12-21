import { InputLabel, OutlinedInput, Stack, useTheme } from '@mui/material';

const CustomTextField = ({ label, required, lablegaping, ...others }) => {
    const theme = useTheme();
    return (
        <Stack spacing={0.25}>
            <InputLabel
                sx={{
                    fontSize: { xs: '13px', md: '15px' },
                    margin: lablegaping
                }}
            >
                {label} {required && '*'}{' '}
            </InputLabel>
            <OutlinedInput sx={{ fontSize: { xs: '12px', md: '14px' }, backgroundColor: theme.palette.common.white }} {...others} />
        </Stack>
    );
};

export default CustomTextField;
