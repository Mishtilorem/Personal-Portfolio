import React from 'react';
import {motion} from 'framer-motion';
//impor global styles
import{
    FlexContainer,
    PaddingContainer,
    Heading,
    IconContainer,
    ParaText,
    BlueText,
} from '../styles/Global.styled';
//import my skills styles
import {
  SkillsCard,
    SkillsCardContainer
} from '../styles/MySkills.styled';
import { Skills } from '../utils/Data';
import { fadeInLeftVariant ,fadeInRightVariant } from '../utils/Variants';
const MySkills = () => {
  return (
    <PaddingContainer responsiveFlex
    id="Skills"
    top="22%"
    bottom="10%"
    responsiveLeft="1rem"
    resonsiveRight = "1rem"> 
    <FlexContainer responsiveFlex 
    fullWidthChild
    reponsiveDirection = "column-reverse">
    {/* left section */}
      <SkillsCardContainer
      as ={motion.div}
      variants ={fadeInLeftVariant}
      initial ="hidden"
      whileInView="visible">
      {Skills.map((skill) => (
        <SkillsCard>
          <IconContainer size="5rem" color="blue" align="center">
            {skill.icon}
          </IconContainer>
          <Heading as ="h4" size="h4" align="center">
            {skill.tech}
          </Heading>
        </SkillsCard>
      ))}
      </SkillsCardContainer>
      {/* right section */}
      <motion.div
      variants={fadeInRightVariant}
      initial="hidden"
      whileInView="visible">
          <Heading as="h4" size="h4">
            MY SKILLS
          </Heading>
          <Heading as="h2" size="h2" top="0.5rem">
            What <BlueText> I can do</BlueText>
          </Heading>
        <ParaText top="2rem" bottom="1.5rem">
        As a Developer, I have a wide range of experience in front-end development. I am proficient in JavaScript,  React, HTML and CSS. My strong experience in building responsive and dynamic user interfaces using React. 
        </ParaText>
        <ParaText>
          I have experience in using React for building scalable and maintainable applications.This has allowed me to create efficient and sustainable code that can adept to the changing needs of business.
        </ParaText>
      </motion.div>
    </FlexContainer>
    </PaddingContainer>
  )
}

export default MySkills