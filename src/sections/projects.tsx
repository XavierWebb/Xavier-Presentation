import styled from "styled-components"
import { useObserver } from "../common/observer"
import { StyledText, StyledTittle } from "../components/texts";
import { projectsList } from "../common/projectsList";
import { Button } from "../components/button";

const Divisor = styled.div<{visible: Boolean}>`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    height: 100vh;

    @media(max-width: 768px){
        gap: 1rem;
    }
    & {
        opacity: ${({ visible }) => (visible ? 1 : 0)};
        transform: ${({ visible }) =>
        visible ? "translateY(0)" : "translateY(15rem)"};
        transition: all 2s ease;
    }
`

const AppCard = styled.div`
    border: white 1px solid;
    border-radius: 1rem;
    padding: 2rem;
    width: 50%;

    @media(max-width:768px){
        padding: 0.5rem;
        width: 100%;
    }
`

const AppCardCointainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 3rem;
    width: 100%;
    max-width: 100%;
    
    @media(max-width: 768px){
        flex-direction: column;
    }

`

export const Projects = () => {
    const {ref, visible} = useObserver();

    return(
        <Divisor ref={ref} visible={visible}>
            <StyledTittle>Projects</StyledTittle>
            <AppCardCointainer>
                {projectsList.map((e, i)=>{
                    return(
                        <AppCard key={i}>
                            <StyledTittle>{e.name}</StyledTittle>
                            <StyledText>{e.des}</StyledText>
                            <Button onClick={()=> {
                                window.location.href = `${e.link}`
                            }}>Go</Button>
                        </AppCard>
                    )
                })}
            </AppCardCointainer>
        </Divisor>
    )
}