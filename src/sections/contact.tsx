import styled from "styled-components"
import { Button } from "../components/button"
import { StyledText, StyledTittle } from "../components/texts"

const Section = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
`
export const Contact = () => {
    return (
        <Section>
            <StyledTittle>My Contact</StyledTittle>
            <StyledText>
                If you want to contact with me you can send me a email to xavier.w3b.contact@gmail.com
                or click in the button below
            </StyledText>
            <Button onClick={() => {
                window.open(
                    "https://mail.google.com/mail/?view=cm&fs=1&to=xavier.w3b.contact@gmail.com",
                    "_blank"
                );
            }}>Contact Now</Button>
        </Section>
    )
}