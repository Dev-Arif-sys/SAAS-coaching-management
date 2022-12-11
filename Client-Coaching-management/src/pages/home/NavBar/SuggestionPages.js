import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { closeItem } from '../../../features/menu/languageMenuSlice';

export default function SuggestionPages({ LiStyled, menuNavItems, pages }) {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    const lngOption = ['English - Australia', 'English - Canadian'];
    const pagesMenuItems = pages.map((e, index) => (
        <MenuItem key={index} onClick={() => dispatch(clickItem(e))}>
            {e}
        </MenuItem>
    ));
    // const navItem = menuNavItems.map((e, index) => (
    //     <LiStyled
    //         key={index}
    //         ref={anchorRef}
    //         id="composition-button"
    //         aria-controls={open ? 'composition-menu' : undefined}
    //         aria-expanded={open ? 'true' : undefined}
    //         aria-haspopup="true"
    //         onMouseOver={handleToggle}
    //     >
    //         {e}
    //     </LiStyled>
    // ));

    return (
        <div onMouseLeave={() => setOpen(false)}>
            <LiStyled
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onMouseEnter={handleToggle}
            >
                {menuNavItems}
            </LiStyled>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
                // onMouseLeave={() => setOpen(false)}
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom'
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}
                                >
                                    {pagesMenuItems}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
}
