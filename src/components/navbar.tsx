import styled from "styled-components";
import { Button } from "./button";

const NavBar = styled.div`
    padding: 0.5rem;
    display: flex;
    position: fixed;
    justify-content: start;
    width: 100%;
    box-sizing: border-box;
    z-index: 1;

    @media (max-width: 768px) {
        width: 100%;
        padding: 0;
        z-index: 5;
        justify-content: start;
        height: 5rem;
    }
`

const WebIcons = styled.img`
    height: 2.5rem;
    width: 2.5rem;
    cursor: pointer;

    transition: all 0.25s ease;
    filter: brightness(0.7);

    &:hover {
        filter: brightness(1.4);
        transform: scale(1.08);
    }
`

const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.25rem;
    margin-left: auto;
    margin-right: 3rem;
`

interface NavbarProps {
    stack: () => void,
    contact: () => void,
    projects: () => void,
}

export const Navbar = ({ stack, contact, projects }: NavbarProps) => {
    return (
        <NavBar>
            <div>
                <Button variant='second' onClick={projects}>Projects</Button>
                <Button variant='second' onClick={stack}>Stack</Button>
                <Button variant='second' onClick={contact}>Contact</Button>
            </div>

            <IconsContainer>
                <a href="https://github.com/XavierWebb"><WebIcons src="/github.png"/></a>
                <a href="https://www.linkedin.com/in/xavier-navarro-2b27b4383/"><WebIcons src="/linkedin.png" /></a>
            </IconsContainer>
        </NavBar>
    )
};