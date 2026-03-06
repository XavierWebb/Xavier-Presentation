import styled from "styled-components"
import { Button } from "./button"
import { SmallText, SmallTittle } from "./texts"
import { palette } from "../common/styles"

interface CardProps {
    name: string,
    desc: string,
    link: string,
    star: boolean
};

const Card = styled.div<{ $star: boolean }>`
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

    ${({ $star }) => $star == true && (`
          box-shadow: 
            0 0 10px ${palette.light_yellow},
            0 0 20px ${palette.yellow},
            0 0 40px ${palette.yellow};
    `)}

    @media (max-width: 768px) {
        gap: 1rem;
        margin-bottom: 1rem;
        margin-top: 1.25rem;
    }
`

export const ProjectCard = ({
    name,
    desc,
    link,
    star,
}: CardProps) => {
    return (
        <Card $star={star}>
            <SmallTittle>{name}</SmallTittle>
            <SmallText>{desc}</SmallText>
            <a href={link}><Button>Go</Button></a>
        </Card>
    )
}