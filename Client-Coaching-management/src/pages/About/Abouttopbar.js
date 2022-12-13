import React, { useState } from 'react';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Grid, Typography, Avatar, Box, useMediaQuery, useTheme } from '@mui/material';
const Abouttopbar = () => {
    const theme = useTheme();
    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const tabStyle = {
        backgroundColor: theme.palette.text.heading
    };
    const singleTab = {
        boxShadow: 1,

        mt: 2
    };
    return (
        <Box sx={{ width: '100%', typography: 'body1', mt: 3, marginBottom: '7rem' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList
                        textColor="secondary"
                        indicatorColor="secondary"
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile
                        aria-label="scrollable force tabs example"
                        onChange={handleChange}
                        sx={{
                            backgroundColor: theme.palette.text.heading
                            // borderRadius: RADIUS.sm
                        }}
                    >
                        <Tab sx={{ ...tabStyle }} label="ক্লাস ব্যাবস্থা" value="1" className="tab-button" />
                        <Tab label="শিক্ষক-শিক্ষিকা " value="2" className="tab-button" />
                        <Tab label="আমাদের অর্জন " value="3" className="tab-button" />
                    </TabList>
                </Box>
                <TabPanel
                    value="1"
                    //  sx={{ ...singleTab }}
                >
                    bnvbn
                </TabPanel>
                <TabPanel value="2">bcvb</TabPanel>
                <TabPanel value="3">fdgfg</TabPanel>
                <TabPanel value="5">Coming Soon....</TabPanel>
            </TabContext>
        </Box>
    );
};

export default Abouttopbar;
