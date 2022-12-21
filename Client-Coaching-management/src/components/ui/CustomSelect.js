import { InputLabel, MenuItem, Stack, TextField } from '@mui/material';
const CustomSelect = ({ options, label, required, ...others }) => {
    return (
        <Stack spacing={0.25}>
            <InputLabel
                sx={{
                    fontSize: { xs: '13px', md: '15px' }
                }}
            >
                {label} {required && '*'}{' '}
            </InputLabel>
            <TextField
                id="standard-select-currency"
                select
                required={required ? true : false}
                {...others}
                sx={{ '& .MuiInputBase-input': { py: 0.88, minWidth: '50px', fontSize: '14px' } }}
            >
                {options.map((option) => (
                    <MenuItem sx={{ fontSize: { xs: '12px', md: '14px' } }} key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </Stack>
    );
};

export default CustomSelect;

// const status = [
//     {
//         value: 'today',
//         label: 'Today'
//     },
//     {
//         value: 'month',
//         label: 'This Month'
//     },
//     {
//         value: 'year',
//         label: 'This Year'
//     }
// ];
