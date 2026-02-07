import styled from "styled-components"
import { CentralSection } from "../components/section"
import { StyledTittle } from "../components/texts"
import { TechList } from "../common/techlist"

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

export const Stack = () => {
    return (
        <CentralSection>
            <StyledTittle>Stack</StyledTittle>
            <div>
                {
                    TechList.map((e, i)=> {
                        return (
                            <TechImg src={e.link} key={i}/>
                        )
                    })
                }
            </div>
        </CentralSection>
    )
}