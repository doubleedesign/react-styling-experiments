import styled from 'styled-components';
import { Button } from './Button.styled.ts';

interface ButtonLinkProps {
	href: string;
}

export const ButtonLink = styled(Button).attrs({ as: 'a' })<ButtonLinkProps>`
    // styles
`;
