import styled from "styled-components"
import { CentralSection } from "../components/section"
import { StyledTittle } from "../components/texts"
import { TechList } from "../common/techlist"
import { useObserver } from "../common/observer"

const TechImg = styled.img`
    height: 4rem;
    width: 4rem;
    margin: 0.5rem;
    transition: all 0.3s ease;

    &:hover{
        filter: brightness(1.4);
        transform: scale(1.08);
    };
`

const TechContainer = styled.div<{ $visible: boolean }>`


    & > * {
        opacity: 0;
        transform: translateY(40px);
        transition:
            opacity 0.6s ease,
            transform 0.6s ease;
    }

    ${({ $visible }) =>
        $visible && `
            & > * {
                opacity: 1;
                transform: translateY(0);
            }
            
            & > *:nth-child(1) {transition-delay: 0.1s;}
            & > *:nth-child(2) {transition-delay: 0.2s;}
            & > *:nth-child(3) {transition-delay: 0.3s;}            
            & > *:nth-child(4) {transition-delay: 0.4s;}
            & > *:nth-child(5) {transition-delay: 0.5s;}
            & > *:nth-child(6) {transition-delay: 0.6s;}
            & > *:nth-child(7) {transition-delay: 0.7s;}
            & > *:nth-child(8) {transition-delay: 0.8s;}
        `
    }
`

export const Stack = () => {
    const { ref, visible } = useObserver();

    return (
        <CentralSection>
            <StyledTittle>Stack</StyledTittle>
            <TechContainer ref={ref} $visible={visible}>
                {
                    TechList.map((e, i) => {
                        return (
                            <TechImg src={e.link} key={i} />
                        )
                    })
                }
            </TechContainer>
        </CentralSection>
    )
}