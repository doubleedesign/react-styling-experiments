import styled from 'styled-components';
import { readableColor, shade } from 'polished';

interface ButtonProps {
	primaryColor: string;
}

export const Button = styled.button<ButtonProps>`
    display: inline-block;
    background: ${props => props.primaryColor};
    padding: 0.4rem 1.2rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    color: ${props => readableColor(props.primaryColor)};
    transition: all 0.2s ease;
    text-decoration: none;
    font-weight: 600;
    border: 0;
    font-family: 'Barlow', sans-serif;
    cursor: pointer;

    &:hover, &:focus, &:active {
        background: ${props => shade(0.2, props.primaryColor)};
        color: ${props => readableColor(shade(0.3, props.primaryColor))};
    }
`;
