import React from 'react';
import { motion,AnimatePresence } from 'framer-motion';
//import global styles
import {
    FlexContainer,
    PaddingContainer,
    Container,} from '../styles/Global.styled';
import {NavbarContainer,Logo, MenuIcon,MenuItem} from '../styles/Navbar.styled';
import logo1 from '../assets/logo2-fotor-bg-remover-2024011416233.png';
import NavMenu from '../components/layouts/NavMenu';
import {GiHamburgerMenu} from 'react-icons/gi';
import {theme} from '../utils/Theme';
import { useState ,useEffect} from 'react';
const Navbar = () => {
const [openMenu,setOpenMenu] = useState(false);
const [sticky, setSticky] = useState(false); 

useEffect(() => {
    const onScroll = () => {
        window.pageYOffset > 50 ? setSticky(true) : setSticky(false);
    }
    window.addEventListener('scroll',onScroll);
//cleanup
    return() => window.removeEventListener('scroll', onScroll);
},[])

return (
    <NavbarContainer bgColor = { sticky ? theme.colors.primary : 'transparent' }>
    <PaddingContainer top="1.2rem"
    bottom ="1.2rem"
    reponsiveLeft= "1rem"
    resposiveRight="1rem"
    >
        <Container>
            <FlexContainer justify="space-between" reponsiveFlex>
    {/* left-logo */}
    <Logo  fullWidthchild
        src ={logo1}
        top ="1.9px"
        left="-20px"
        width="5%"
        height="2%"
        >

    </Logo>
    {/* right-menu-icon */}
    <MenuIcon as ={motion.a}
    whileHover = {{scale:1.2 }}
     onClick={() => {setOpenMenu(true)}}>
        <GiHamburgerMenu />
    </MenuIcon>
        </FlexContainer>
        </Container>
    <AnimatePresence>
    {openMenu && <NavMenu setOpenMenu={setOpenMenu} />}
    </AnimatePresence>
    
    </PaddingContainer>
    </NavbarContainer>
  )
}

export default Navbar