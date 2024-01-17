import React from 'react';
import {motion} from 'framer-motion';
import { PaddingContainer,
Heading,
BlueText } from '../styles/Global.styled'
import Project from '../../src/components/layouts/Project.js';
import { projectDetails } from '../utils/Data';
import  {fadeInTopVariant} from '../utils/Variants.js';
const MyProjects = () => {
  return (
    <PaddingContainer 
    id="Projects"
    top="20%"
    bottom="5%" 
    responsiveTop ="20%"
    reponsiveLeft="1rem"
    responsiveRight="1rem">
        <Heading

        as={motion.h4} 
        variants={fadeInTopVariant}
        initial ="hidden"
        whileInView = "visible"
        size="h4">
            MY PROJECTS
        </Heading>
        <Heading 
        as={motion.h2} 
        variants={fadeInTopVariant}
        initial ="hidden"
        whileInView = "visible"
        size="h2">
            What <BlueText> I have built</BlueText>
        </Heading>
    {projectDetails.map((project) =>(
        <PaddingContainer key={project.id}
        top="5rem"
        bottom="5rem">
            <Project data={project}/>
        </PaddingContainer>
    ))}
</PaddingContainer>
    
  )
}

export default MyProjects