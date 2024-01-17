import React from 'react';
import {motion} from 'framer-motion';

//import global styles
import{
    PaddingContainer,
    Heading,
    FlexContainer,
    ParaText,
    IconContainer,
  
} from '../../styles/Global.styled';
import { fadeInLeftVariant , fadeInRightVariant } from '../../utils/Variants';
import { TechStackCard ,ProjectImageContainer,ProjectImage} from '../../styles/MyProject.styled';
import { FaGithub } from 'react-icons/fa';


const Project = ({data}) => {
  return (
    <FlexContainer 
    direction={data.reverse ? 'row-reverse' : false}
    fullWidthChild>
    {/* left-section project-container */}
        <motion.div
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible">
<FlexContainer align="center" gap="1rem">
<Heading as="h3" size="h3">
    {data.project_name}
</Heading>
<IconContainer color="white" size="2rem">
  <a href="https://github.com/Tiger-raj/spendwise-webster" target="blank"><FaGithub color="white" /></a>
</IconContainer>
</FlexContainer>
<PaddingContainer top="1rem">
  <FlexContainer gap="1.5rem"> 
    {data.tech_stack.map((stack) =>(
      <TechStackCard>{stack}</TechStackCard>
    ))}
  </FlexContainer>
</PaddingContainer>
<ParaText top="1.5rem">{data.project_desc}
</ParaText>
{/* <Button>Visit Website</Button> */}
        </motion.div>
        {/* right-container */}
        <motion.div
          variants={data.reverse ? fadeInRightVariant:fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
          whileHover={{ scale: 1.05, opacity: 0.8 }}>
      <ProjectImageContainer justify={data.reverse ? "flex-start" : "flex-end"}>
        <ProjectImage src={data.project_img} alt = {data.project_name} />
        
      </ProjectImageContainer>
        </motion.div>
    </FlexContainer>
  )
}

export default Project