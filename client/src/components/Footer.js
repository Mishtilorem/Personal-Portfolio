import React from 'react';
import {motion} from 'framer-motion';
import {fadeInBottomVariant} from '../utils/Variants';
import { PaddingContainer,
Heading,
FlexContainer,
IconContainer, 
BlueText} from '../styles/Global.styled';
import { BsLinkedin,BsTwitter } from 'react-icons/bs';
import { RiMailFill, RiGithubFill } from 'react-icons/ri';
import { socialLinks } from '../utils/Data';
const Footer = () => {
  return (
    <PaddingContainer
    id="Contact"
    top="5%"
    bottom="10%">

    <Heading
    as={motion.div}
    variants={fadeInBottomVariant}
    initial ="hidden"
    whileInView="visible"
    size="h4"
    align="center">
        My Contact
    </Heading>
    <Heading as={motion.h2}
    variants={fadeInBottomVariant}
    initial ="hidden"
    whileInView="visible"
    size="h2"
    align="center"
    top="0.5rem">
    Contact <BlueText>Me Here</BlueText>
    </Heading>
    <FlexContainer as="mi" gap="30px" responsievFlex>
        <FlexContainer flex-direction= "column" responsievFlex >
        <IconContainer color="white" size="2rem">
        <a href="https://www.linkedin.com/in/mishtikeshari/" target="blank" > <BsLinkedin color="white" /></a>
        </IconContainer>
        </FlexContainer>
        <FlexContainer>
        <IconContainer color="white" size="2rem">
        <a href="https://twitter.com/leftatseen" target="blank" > <BsTwitter color="white" /></a>
        </IconContainer>
        </FlexContainer>
        <FlexContainer>
        <IconContainer color="white" size="2rem">
        <a href={`mailto:${socialLinks.href}`} target="blank">{socialLinks.href}<RiMailFill color="white" /></a>
        </IconContainer>
        </FlexContainer>
        <FlexContainer>
        <IconContainer color="white" size="2.2rem">
        <a href="https://github.com/Mishtilorem" target="blank"><RiGithubFill color="white" /></a>
        </IconContainer>
        </FlexContainer>
        </FlexContainer>
    </PaddingContainer>
  )
}

export default Footer