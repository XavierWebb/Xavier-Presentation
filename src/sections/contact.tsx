import styled from "styled-components"
import { Button } from "../components/button"
import { StyledText, StyledTittle } from "../components/texts"
import { useObserver } from "../common/observer"
const Section = styled.div<{visible: Boolean}>`
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    text-align: center;

    & > * {
        opacity: ${({ visible }) => (visible ? 1 : 0)};
        transform: ${({ visible }) => visible ? "translateX(0)" : "translateX(3rem)"};    
        transition: all 1.5s ease;
    }
`
export const Contact = () => {
    const {ref, visible} = useObserver();
    return (
        <Section ref={ref} visible={visible}>
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