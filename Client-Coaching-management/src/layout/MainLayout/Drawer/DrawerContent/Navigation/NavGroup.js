import PropTypes from 'prop-types';
import { MdOutlineExpandLess, MdOutlineExpandMore } from 'react-icons/md';
import { useSelector } from 'react-redux';

// material-ui
import { Box, Collapse, List, ListItemButton, ListItemText, Typography } from '@mui/material';

// project import
import { useState } from 'react';
import NavItem from './NavItem';

// ==============================|| NAVIGATION - LIST GROUP ||============================== //

const NavGroup = ({ item }) => {
    const menu = useSelector((state) => state.menu);
    const { drawerOpen } = menu;
    const [open, setOpen] = useState(false);

    const handleTitleClick = () => {
        setOpen(!open);
    };

    const navCollapse = item.children?.map((menuItem) => {
        return (
            <Collapse in={open}>
                <NavItem key={menuItem.id} item={menuItem} level={1} />
            </Collapse>
        );
    });

    return (
        <List
            subheader={
                item.title &&
                drawerOpen && (
                    <Box>
                        <ListItemButton onClick={handleTitleClick} timeout="auto" unmountOnExit>
                            <ListItemText
                                primary={
                                    <Typography variant="body1" fontSize={'14px'}>
                                        {item.title}
                                    </Typography>
                                }
                            />
                            {open ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
                        </ListItemButton>
                    </Box>
                )
            }
            sx={{ mb: drawerOpen ? 1.5 : 0, py: 0, zIndex: 0 }}
        >
            {navCollapse}
        </List>
    );
};

NavGroup.propTypes = {
    item: PropTypes.object
};

export default NavGroup;
