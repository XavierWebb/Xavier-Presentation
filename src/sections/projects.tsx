import styled from "styled-components"
import { Section } from "../components/section"
import { StyledText, StyledTittle, Subtittle } from "../components/texts"
import { palette } from "../common/styles"
import { projectsList } from "../common/projectsList"
import { ProjectCard } from "../components/projectCard"

const Line = styled.div`
    background-color: ${palette.yellow};
    height: 0.1rem;
    width: 28rem;
`

const MyPhoto = styled.img`
    height: 12rem;
    width: 12rem;
`

const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
    margin-bottom: 10rem;
`

const ProjectsContainer = styled.div`
    display: flex;
    gap: 2rem;
`

export const Projects = () => {
    return (
        <Section>
            <InfoContainer>
                <MyPhoto src="/github.png" />
                <div>
                    <Subtittle>Web Developer</Subtittle>
                    <Line />
                    <StyledTittle>Xavier Navarro</StyledTittle>
                    <StyledText>Turning ideas into Visual Experiences</StyledText>
                </div>
            </InfoContainer>

            <StyledText>Main Projects:</StyledText>
            <ProjectsContainer>
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