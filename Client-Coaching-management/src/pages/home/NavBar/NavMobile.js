import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { HomeFilled, DownOutlined, AlignRightOutlined } from '@ant-design/icons';
import SuggestionPages from './SuggestionPages';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import LogoSection from 'components/Logo/index';
import Menu from './Menu';

const navItems = [
    { title: 'Home', link: '' },
    { title: 'About', link: '' },
    { title: 'Pages', link: '' },
    { title: 'System Pages', link: '' },
    { title: 'Blog', link: '' },
    { title: 'Contact', link: '' }
];
const iconStyle = {
    fontSize: '23px'
    // padding: '8px'
    // border: '2px solid'
    // borderRadius: '50%'
};

export default function NavMobile({ menuNavItems, pages, blogPages, systemPages, LayStyled }) {
    const [state, setState] = React.useState({ top: false });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            // onClick={toggleDrawer(anchor, false)}
            // onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem disablePadding onClick={toggleDrawer(anchor, false)}>
                    <ListItemButton>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ControlledAccordions
                    toggleDrawer={toggleDrawer}
                    anchor={anchor}
                    menuNavItems={menuNavItems}
                    pages={pages}
                    blogPages={blogPages}
                    systemPages={systemPages}
                />
                <ListItem disablePadding onClick={toggleDrawer(anchor, false)}>
                    <ListItemButton>
                        <ListItemText primary="About" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding onClick={toggleDrawer(anchor, false)}>
                    <ListItemButton>
                        <ListItemText primary="Contact" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary={<Menu />} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment>
                <LayStyled>
                    <LogoSection />
                    <Button onClick={toggleDrawer('top', true)}>
                        <AlignRightOutlined style={{ ...iconStyle }} />
                    </Button>
                </LayStyled>
                <Drawer anchor="top" open={state['top']} onClose={toggleDrawer('top', false)}>
                    {list('top')}
                </Drawer>
            </React.Fragment>
        </div>
    );
}

/* Acordion */

function ControlledAccordions({ menuNavItems, pages, blogPages, systemPages, toggleDrawer, anchor }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const pagesItem = pages.map((e, index) => (
        <MenuItem key={index} onClick={toggleDrawer(anchor, false)}>
            {e}
        </MenuItem>
    ));
    const blogItem = blogPages.map((e, index) => (
        <MenuItem key={index} onClick={toggleDrawer(anchor, false)}>
            {e}
        </MenuItem>
    ));
    const systemPagesItem = systemPages.map((e, index) => (
        <MenuItem key={index} onClick={toggleDrawer(anchor, false)}>
            {e}
        </MenuItem>
    ));

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<DownOutlined />} aria-controls="panel1bh-content" id="panel1bh-header">
                    <Typography sx={{ width: '100%', flexShrink: 0 }}>{menuNavItems[0]}</Typography>
                </AccordionSummary>
                <AccordionDetails>{pagesItem}</AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary expandIcon={<DownOutlined />} aria-controls="panel2bh-content" id="panel2bh-header">
                    <Typography sx={{ width: '100%', flexShrink: 0 }}>{menuNavItems[1]}</Typography>
                </AccordionSummary>
                <AccordionDetails>{systemPagesItem}</AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary expandIcon={<DownOutlined />} aria-controls="panel3bh-content" id="panel3bh-header">
                    <Typography sx={{ width: '100%', flexShrink: 0 }}>{menuNavItems[2]}</Typography>
                </AccordionSummary>
                <AccordionDetails>{blogItem}</AccordionDetails>
            </Accordion>
        </div>
    );
}
