import React from 'react';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material';
import LogoSection from 'components/Logo/index';
import Menu from './Menu';
import SuggestionPages from './SuggestionPages';
import NavMobile from './NavMobile';
import Profile from '../../../layout/MainLayout/Header/HeaderContent/Profile/index';

const Header = styled('header')(({ theme }) => ({
    position: 'fixed',
    zIndex: '999',
    // width: '100%',
    top: '40px',
    width: '1280px',
    maxWidth: '90%',
    margin: '0 auto',
    transition: 'all 300ms ease',
    color: 'white'
}));
const LayStyled = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}));
const UlStyled = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    gap: '30px',
    alignItems: 'center'
}));
const LiStyled = styled('small')(({ theme }) => ({
    listStyleType: 'none',
    margin: 0,
    cursor: 'pointer'
}));
const mystery = {
    display: {
        md: 'flex',
        xs: 'none'
    }
};
const mysteryActive = {
    display: {
        md: 'none',
        xs: 'block'
    }
};

const NavBar = () => {
    const theme = useTheme();
    const menuNavItems = ['Pages', 'System Pages', 'Blog'];
    const pages = ['Services', 'Team', 'Testimonial'];
    const systemPages = ['404 Error', 'Reset Pass', 'Search Result', 'Achievement', 'Coming Soon', 'Institute'];
    const blogPages = ['Blog', 'Single Blog', 'Testimonial'];

    return (
        <Header>
            <LayStyled sx={{ ...mystery }}>
                <div>
                    <LogoSection style={{ color: 'white' }} />
                </div>
                <UlStyled>
                    <LiStyled>Home</LiStyled>
                    <LiStyled>About</LiStyled>
                    <SuggestionPages LiStyled={LiStyled} menuNavItems={menuNavItems[0]} pages={pages} />
                    <SuggestionPages LiStyled={LiStyled} menuNavItems={menuNavItems[1]} pages={systemPages} />
                    <SuggestionPages LiStyled={LiStyled} menuNavItems={menuNavItems[2]} pages={blogPages} />
                    <LiStyled>Contact</LiStyled>
                </UlStyled>
                {/* <Menu /> */}
                <Profile />
            </LayStyled>
            <LayStyled sx={{ ...mysteryActive }}>
                <NavMobile
                    menuNavItems={menuNavItems}
                    pages={pages}
                    systemPages={systemPages}
                    blogPages={blogPages}
                    LiStyled={LiStyled}
                    LayStyled={LayStyled}
                />
            </LayStyled>
        </Header>
    );
};

export default NavBar;
