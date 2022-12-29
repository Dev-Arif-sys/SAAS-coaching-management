import { InputLabel, Stack } from '@mui/material';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const filter = createFilterOptions();

export default function CustomAutocomplete({ required, givenOptions, value, setValue }) {
    return (
        <Stack spacing={0.25}>
            <InputLabel
                sx={{
                    fontSize: { xs: '12px', md: '14px' }
                }}
            >
                {'Batch'} {required && '*'}{' '}
            </InputLabel>
            <Autocomplete
                sx={{
                    fontSize: { xs: '12px', md: '14px' }
                }}
                size="small"
                value={value}
                onChange={(event, newValue) => {
                    if (typeof newValue === 'string') {
                        setValue(newValue);
                    } else if (newValue && newValue.inputValue) {
                        // Create a new value from the user input
                        setValue(newValue.inputValue);
                    } else {
                        setValue(newValue);
                    }
                }}
                filterOptions={(options, params) => {
                    const filtered = filter(options, params);

                    const { inputValue } = params;
                    // Suggest the creation of a new value
                    const isExisting = options.some((option) => inputValue === option);
                    if (inputValue !== '' && !isExisting) {
                        filtered.push(`${inputValue}`);
                    }

                    return filtered;
                }}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                id="free-solo-with-text-demo"
                options={givenOptions}
                getOptionLabel={(option) => {
                    // Value selected with enter, right from the input
                    if (typeof option === 'string') {
                        return option;
                    }
                    // Add "xxx" option created dynamically
                    if (option.inputValue) {
                        return option.inputValue;
                    }
                    // Regular option
                    return option;
                }}
                renderOption={(props, option) => (
                    <li
                        {...props}
                        style={{
                            fontSize: { xs: '12px', md: '14px' }
                        }}
                    >
                        {option}
                    </li>
                )}
                freeSolo
                renderInput={(params) => (
                    <TextField
                        {...params}
                        sx={{
                            fontSize: { xs: '12px', md: '14px' }
                        }}
                    />
                )}
            />
        </Stack>
    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
