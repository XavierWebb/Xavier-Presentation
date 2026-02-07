import styled from "styled-components";
import { palette } from "../common/styles";

export const StyledText = styled.p`
    font-size: 1.25rem;
    font-family: 'Inter';
    @media(max-width: 768px){
        font-size: 1rem;
    }
`

export const StyledTittle = styled.h1`
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    margin-left: 0;
    margin-right: 0;
    font-size: 3rem;
    font-family: 'Inter';
    font-weight: 700;
    @media (max-width: 768px){
        font-size: 2rem;
    }
`

export const Subtittle = styled.h1`
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    margin-left: 0;
    margin-right: 0;
    font-size: 1.75rem;
    font-family: 'Inter';
    font-style: italic;
    color: ${palette.yellow};
    font-weight: 800;
    @media (max-width: 768px){
        font-size: 1.5rem;
    }
`

export const SmallTittle = styled.h1`
    font-size: 1.5rem;
    font-family: 'Inter';
    font-weight: 700;
`

export const SmallText = styled.p`
    font-size: 1rem;
    font-family: 'Inter';
`