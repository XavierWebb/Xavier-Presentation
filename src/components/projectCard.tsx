import styled from "styled-components"
import { Button } from "./button"
import { SmallText, SmallTittle } from "./texts"

interface CardProps {
    name: string,
    desc: string,
    link: string,  
};

const Card = styled.div`
    background-color: #ffffff14;
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    border-radius: 2rem;
    width: 20rem;
    padding: 1.25rem;
    gap: 2.5rem;
`

export const ProjectCard = ({
    name,
    desc,
    link
} : CardProps ) => {
    return (
        <Card>
            <SmallTittle>{name}</SmallTittle>
            <SmallText>{desc}</SmallText>
            <a href={link}><Button>Go</Button></a>
        </Card>
    )
}