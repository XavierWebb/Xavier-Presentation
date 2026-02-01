import styled from "styled-components";
import { StyledText, StyledTittle } from "../components/texts";
import { useObserver } from "../common/observer";

const StyledImg = styled.img`
    height: 55%;
    width: 40%;
    border-radius: 15px;   
    border: 2px white solid;
    @media (max-width:768px){
        width: 80%;
    }
`

const Divisor = styled.div<{visible: Boolean}>`
  display: flex;
  flex-direction: row;
  gap: 20rem;
  align-items: center;
  height: 100vh;

    @media(max-width: 768px){
        flex-direction: column;
        gap: 1rem;
    }
  & > * {
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    transform: ${({ visible }) => visible ? "translateX(0)" : "translateX(-30rem)"};    
    transition: all 2s ease;
  }
`;


const TextContainer = styled.div`
    max-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    margin-bottom: 20vh;
        @media (max-width: 768px){
        width: 90%;
        gap: 0.25rem;
        text-align: center;
    }
`

export const Presentation = () => {
    const {ref, visible} = useObserver();
    return (
        <Divisor ref={ref} visible={visible}>
            <StyledImg src="/Photo_Two.jpeg"/>
            <TextContainer>
                <StyledTittle>Presentation</StyledTittle>
                <StyledText>
                    My name is Xavier Navarro, im from Mendoza, Argentina, 
                    Im 18 yo and Im a web developer junior,
                </StyledText>
                <StyledText>
                    I have been adquiring knowledges about web development for about 2 years 
                    and now Im looking for a oportunity to participate In a interesant project
                </StyledText>
                
            </TextContainer>
        </Divisor>
    )
};