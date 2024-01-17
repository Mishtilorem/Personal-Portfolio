import styled from "styled-components";

export const ShowParticleContainer = styled.div`
    postiton: "relative";
`

export const Particle = styled.img`
       position: absolute;
       top: ${({top}) => top};
       left: ${({left})=> left} ;
       right: ${({right})=> right} ;
       bottom: ${({bottom})=> bottom} ;
       transform: rotate (${({rotate}) => rotate});
 `     

