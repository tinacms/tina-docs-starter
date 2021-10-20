import styled from 'styled-components';
import rem from "../utils/rem";

export const SubHeader = styled.h3`
color: rgb(120,120,120);
  display: block;
  margin: 2em 0 0.75em;
  font-size: ${rem(24)};
  font-weight: 600;
`;
export const Title = styled.h1`
  display: block;
  text-align: left;
  width: 100%;
  color: rgb(120,120,120);
  font-size: ${rem(42)};
  font-weight: bold;
`;

export const CalloutWrapper = styled.div`
  background:  ${props => props.type || "rgba(255,250,240,1)"};
  padding: ${rem(7)} ${rem(10)} ${rem(5)} ${rem(14)};
  border-left: ${rem(4)} solid rgb(220,220,220);
  
  margin: ${rem(45)} 0;
  border-radius: ${rem(3)};
  > p {
    margin: 0 0 ${rem(5)} 0;
  }
  ${SubHeader} + &, ${Title} + & {
    margin-top: ${rem(35)};
  }
`;

const CalloutLabel = styled.strong`
  display: block;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 100%;
  margin-bottom: ${rem(7)};
`;
const CalloutText = styled.p`
color: ${props => props.textColor || "rgba(156,66,33,1)"};
font-weight: 500;
font-size: 90%;
`
const backgroundColor = {
    warning: "rgba(254,252,191,1)",
    error: "rgba(254,215,215,1)",
    default: "rgba(255,250,240,1)"
}

const textColor = {
    warning: "rgba(116,66,16,1)",
    error: "rgba(116,42,42,1)",
    default: "rgba(156,66,33,1)"
}

const label = {
   default: "Note" 
}
export default function Callout({callout}) {

return(
        
  <CalloutWrapper type={backgroundColor[callout.type]} >
    <CalloutLabel >{label[callout.type] || callout.type}</CalloutLabel>
    <CalloutText textColor={textColor[callout.type] || textColor.default}>{callout?.text}</CalloutText>
  </CalloutWrapper>
    
)}