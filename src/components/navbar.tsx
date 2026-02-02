import styled from "styled-components";
import { Button } from "./button";

const NavBar = styled.div`
    padding: 0.5rem;
    display: flex;
    position:fixed;
    justify-content: end;
    width: 100%;
    background-color: #0A0D16;
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
interface NavbarProps {
    home: () => void,
    presentation: () => void,
    knowledge: () => void,
    contact: () => void,
    projects: () => void,
}

export const Navbar = ({home, presentation, knowledge, contact, projects}: NavbarProps) => {
    return (
        <NavBar>
            <Button variant='second' onClick={home}>Home</Button>
            <Button variant='second' onClick={projects}>Projects</Button>
            <Button variant='second' onClick={presentation}>Presentation</Button>
            <Button variant='second' onClick={knowledge}>Knowledges</Button>
            <Button onClick={contact}>CONTACT ME</Button>
        </NavBar>
    )
};