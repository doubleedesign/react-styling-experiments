import styled from 'styled-components';
import { darken, readableColor } from 'polished';

interface ButtonProps {
	color: string;
}

export const Button = styled.button<ButtonProps>`
	background: ${props => props.color};
	padding: 0.5rem 2rem;
	border-radius: 0.25rem;
	color: ${props => readableColor(props.color)};
	transition: all 0.2s ease;
	
	&:hover, &:focus, &:active {
        background: ${props => darken(0.2, props.color)};
        color: ${props => readableColor(darken(0.2, props.color))};
	}
`;
