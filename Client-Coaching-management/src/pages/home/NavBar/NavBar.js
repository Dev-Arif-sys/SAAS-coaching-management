import React from 'react';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material';
import LogoSection from 'components/Logo/index';
import Menu from './Menu';
import SuggestionPages from './SuggestionPages';

const LayStyled = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '40px',
    marginBottom: '100px'
}));
const UlStyled = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    gap: '30px'
}));
const LiStyled = styled('p')(({ theme }) => ({
    listStyleType: 'none',
    margin: 0,
    cursor: 'pointer'
}));

const NavBar = () => {
    const theme = useTheme();
    const menuNavItems = ['Pages', 'System Pages', 'Blog'];
    const pages = ['Services', 'Team', 'Testimonial'];
    const systemPages = ['404 Error', 'Reset Pass', 'Search Result', 'Achivement', 'Coming Soon', 'Institute'];
    const blogPages = ['Blog', 'Single Blog', 'Testimonial'];

    return (
        <LayStyled>
            <div>
                <LogoSection />
            </div>
            <UlStyled>
                <LiStyled>Home</LiStyled>
                <LiStyled>About</LiStyled>
                <SuggestionPages LiStyled={LiStyled} menuNavItems={menuNavItems[0]} pages={pages} />
                <SuggestionPages LiStyled={LiStyled} menuNavItems={menuNavItems[1]} pages={systemPages} />
                <SuggestionPages LiStyled={LiStyled} menuNavItems={menuNavItems[2]} pages={blogPages} />
                <LiStyled>Contact</LiStyled>
            </UlStyled>
            <Menu />
        </LayStyled>
    );
};

export default NavBar;
