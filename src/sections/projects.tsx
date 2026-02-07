import styled from "styled-components"
import { Section } from "../components/section"
import { StyledText, StyledTittle, Subtittle } from "../components/texts"
import { palette } from "../common/styles"
import { projectsList } from "../common/projectsList"
import { ProjectCard } from "../components/projectCard"
import { useObserver } from "../common/observer"

const Line = styled.div`
    background-color: ${palette.yellow};
    height: 0.1rem;
    width: 28rem;
`

const MyPhoto = styled.img`
    height: 12rem;
    width: 12rem;
    border-radius: 100%;
`

const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
    margin-bottom: 10rem;
`

const ProjectsContainer = styled.div<{ $visible: boolean }>`
    display: flex;
    gap: 2rem;

    & > * {
        opacity: 0;
        transform: translateY(40px);
        transition:
            opacity 0.6s ease,
            transform 0.6s ease;
    }

    ${({$visible}) => 
        $visible && `
            & > * {
                opacity: 1;
                transform: translateY(0);
            }
            
            & > *:nth-child(1) {transition-delay: 0.1s;}
            & > *:nth-child(2) {transition-delay: 0.25s;}
            & > *:nth-child(3) {transition-delay: 0.4s;}
        `
    }
    
`


export const Projects = () => {
    const {ref, visible} = useObserver();
    return (
        <Section>
            <InfoContainer>
                <MyPhoto src="/Photo.jpeg" />
                <div>
                    <Subtittle>Web Developer</Subtittle>
                    <Line />
                    <StyledTittle>Xavier Navarro</StyledTittle>
                    <StyledText>Turning ideas into Visual Experiences</StyledText>
                </div>
            </InfoContainer>

            <StyledText>Main Projects:</StyledText>
            <ProjectsContainer ref={ref} $visible={visible}>
                {
                  projectsList.map((e, i)=> {
                    return(
                        <ProjectCard
                            key={i}
                            name={e.name}
                            desc={e.des}
                            link={e.link}
                        />
                    )
                  })  
                }
            </ProjectsContainer>
        </Section>
    )
}