// material-ui
import { Box, FormControl, InputAdornment, OutlinedInput } from '@mui/material';

// assets
import { SearchOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';

// ==============================|| HEADER CONTENT - SEARCH ||============================== //

const MultiPurposeSearch = ({ setSearchTerm, searchTerm }) => {
    const [tempSearch, setTempSearch] = useState(searchTerm);

    useEffect(() => {
        const delayId = setTimeout(() => {
            setSearchTerm(tempSearch);
        }, 1000);

        return () => clearTimeout(delayId);
    }, [tempSearch]);

    return (
        <Box sx={{ width: '100%', ml: { xs: 0, md: 1 } }}>
            <FormControl sx={{ width: { xs: '100%', md: 224 } }}>
                <OutlinedInput
                    value={tempSearch}
                    onChange={(e) => setTempSearch(e.target.value)}
                    size="small"
                    id="header-search"
                    endAdornment={
                        <InputAdornment position="end" sx={{ mr: -0.5 }}>
                            <SearchOutlined />
                        </InputAdornment>
                    }
                    aria-describedby="header-search-text"
                    inputProps={{
                        'aria-label': 'weight'
                    }}
                    placeholder="search here"
                />
            </FormControl>
        </Box>
    );
};

export default MultiPurposeSearch;
