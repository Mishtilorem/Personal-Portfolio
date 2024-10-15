import React from "react";
import {motion} from 'framer-motion';
import {
    FlexContainer,
    IconContainer,
    Heading,
    BlueText,
    ParaText,
    PaddingContainer,
} from '../styles/Global.styled'
import { socialLinks } from "../utils/Data";
import { ShowParticleContainer,Particle } from "../styles/Showcase.styled";
import {BsLinkedin,BsTwitter} from 'react-icons/bs';
import {RiMailFill, RiGithubFill} from 'react-icons/ri';
import pparticle from '../assets/particle.png';
import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Variants";

const Showcase = () => {
    return (
        <PaddingContainer
        id="Home"
        left="3%"
        right="10%"
        top="15%"
        bottom="12%"
        responsiveLeft = "1rem"
        reponsiveRight = "1rem"
        responsiveTop = "8rem">

        <FlexContainer align="center" fullWidthChild>
        <motion.div
            variants={fadeInLeftVariant}
            initial = "hidden"
            whileInView ="visible"
        >
        <Heading as="h4" size="h4">Hello!</Heading>
        <Heading
            as="h2"
            size="h2"
            top="0.5rem"
            bottom="1rem"
        >I'm <BlueText>Mishti</BlueText></Heading>
        <Heading as="h3" size="h3">
            I'm <BlueText>Web Developer</BlueText>
        </Heading>
        <ParaText>
            Hello, my name is Mishti and I'm a Web developer gaining experience in creating web applications through some projects.
        </ParaText>
        {/* social icons */}
        <FlexContainer as="mi" gap="30px" responsievFlex>
        <FlexContainer flex-direction= "column" responsievFlex >
        <IconContainer color="white" size="2rem">
        <a href="https://www.linkedin.com/in/mishtikeshari/" target="blank"> <BsLinkedin color="white" /></a>
        </IconContainer>
        </FlexContainer>

        <FlexContainer>
        <IconContainer color="primary" size="2rem">
       <a href="https://twitter.com/leftatseen" target="blank"> <BsTwitter color="white" /></a>
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
        </motion.div>
        {/* right-container */}
        <FlexContainer 
        as ={motion.div}
        variants={fadeInRightVariant}
        initial="hidden"
        whileInView="visible"
        justify ="flex-end">
            <ShowParticleContainer>
            <Particle 
                      as={motion.img}
                      animate={{
                      x:[0,100,0],
                      rotate: 360,
                      scale: [1,0.5,1]
                      }}
                      transition={{
                        duration:20,
                        repeat: Infinity,
                      }}
                      src={pparticle}
                      alt="particle"
                      bottom="450px"
                      right="450px"
                      rotate="60deg" />

            <Particle 
                      as={motion.img}
                      animate={{
                      x:[0,100,0],
                      rotate: 360,
                      scale: [1,0.5,1]
                      }}
                      transition={{
                        duration:20,
                        repeat: Infinity,
                      }}  
                      src={pparticle}
                      alt="particle"
                      top="250px"
                      right="100px"
                      rotate="20deg" />

            <Particle 
                      as={motion.img}
                      animate={{
                      x:[0,100,0],
                      rotate: 360,
                      scale: [1,0.5,1]
                      }}
                      transition={{
                        duration:20,
                        repeat: Infinity,
                      }}
                      src={pparticle}
                      alt="particle"
                      top="200px"
                      right="300px"
                      rotate="50deg" />
            </ShowParticleContainer>
        </FlexContainer>
        </FlexContainer>
        </PaddingContainer>
    )
}


export default Showcase;
