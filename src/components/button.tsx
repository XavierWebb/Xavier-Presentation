import styled from 'styled-components';
import { palette } from '../common/styles';
import type React from 'react';

const backgrounColors = {
    first: palette.purple,
    second: 'transparent'
}

const transitionBackgroundColors = {
    first: palette.purple_darked,
    second: 'transparent' 
}

const varColors = {
    first: 'black',
    second: 'white',
}

const transitionVarColors = {
    first: 'black',
    second: 'grey',
}

type variantsType = 'first' | 'second' 

interface ButtonProps {
    variant?: variantsType,
    children: React.ReactNode,
    onClick?: ()=>void,
}
const StyledButton = styled.button<{variant: variantsType}>`
    padding: 1rem 1.5rem;
    background-color: ${({variant}) => backgrounColors[variant]};
    color: ${({variant}) => varColors[variant]};
    position: relative;
    cursor: pointer;
    font-family: 'Julius Sans One', sans-serif;
    font-size: 1.25rem;
    margin: 1rem;
    border: 0px;
    transition: 
        background-color 0.3s ease,
        color 0.3s ease
    ;
    
    &:hover {
        background-color: ${({variant}) => transitionBackgroundColors[variant]};
        color: ${({variant}) => transitionVarColors[variant]}
    }

    ${({ variant }) => variant === 'second' && `
        &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background: white;
            transition: transform 0.5s ease;
            transform: scaleX(0);
            transform-origin: center;
        }

        &:hover::after {
            transform: scaleX(1);
        };
    `}
`

export const Button = ({
    variant = 'first',
    children,
    onClick,
}: ButtonProps ) => {
    return (
        <StyledButton variant={variant} onClick={onClick}>
            <p>{children}</p>
        </StyledButton>
    )
};