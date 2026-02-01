import styled from "styled-components"
import {StyledTittle } from "../components/texts"
import { useObserver } from "../common/observer"

const Section = styled.div<{visible: Boolean}>`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & {
        opacity: ${({ visible }) => (visible ? 1 : 0)};
        transition: all 2s ease;
    }
`

const StyledLine = styled.div`
    background-color: white;
    height: 1px;
    width: 40%;
    margin-bottom: 2rem;
`
const KnowledgesBox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 35vw;
    @media (max-width: 768px){
        max-width: 100%;
    }
`

const TechLogo = styled.img`
    margin: 1rem;
    height: 4rem;
    width: 4rem;

    transition: all 0.3s ease;

    &:hover {
        filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.9));
        transform: scale(1.05);
    }

    @media (max-width: 768px){
        margin: 0.25rem;
    }
`

export const Knowledge = () => {
    const {ref, visible} = useObserver();
    return (
        <Section ref={ref} visible={visible}>
            <StyledTittle>Knowledges</StyledTittle>
            <StyledLine />
            <KnowledgesBox>
                <TechLogo src="html.png"/>
                <TechLogo src='css.png'/>
                <TechLogo src='javascript.png'/>
                <TechLogo src='typescript.png'/>
                <TechLogo src='python.png'/>
                <TechLogo src="react.png"/>
                <TechLogo src='node.png'/>
                <TechLogo src='fastApi.png'/>
                <TechLogo src='prismaorm.png'/>
                <TechLogo src='postgresql.png'/>
                <TechLogo src='git.png'/>
                <TechLogo src='github.png'/>
                <TechLogo src='redux.png'/>
                <TechLogo src='tailwindcss.png'/>
            </KnowledgesBox>

        </Section>
    )
}