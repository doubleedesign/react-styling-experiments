import styled, { css } from 'styled-components';
import { meetsContrastGuidelines, shade, transparentize } from 'polished';
import { Caption } from '../Caption/Caption.styled.ts';
import { Button } from '../Button/Button.styled.ts';
import { breakpointUp } from '@doubleedesign/styled-media-queries';

export const AlbumCardWrapper = styled.div`
    padding: 1rem;
    width: 100%;
    flex-basis: 100%;

    ${props => breakpointUp(props.theme.breakpoints.md, css`
        width: 50%;
        flex-basis: 50%;
    `)};

    ${props => breakpointUp(props.theme.breakpoints.lg, css`
        width: 33.33%;
        flex-basis: 33.33%;
    `)};
`;

export const AlbumCard = styled.div<{ primaryColor: string }>`
    box-shadow: ${props => `0 0 0.5rem 0 ${transparentize(0.65, shade(0.25, props.primaryColor))}`};
    background: white;
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0.5rem;

    div {
        height: 100%;
        width: 75%;
        flex-basis: 75%;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        padding: 0.5rem;
    }

    img {
        width: 35%;
        flex-basis: 35%;
        max-width: 35%;
        display: block;
        margin-right: 0.5rem;
    }

    h3, p {
        width: 100%;
    }

    h3 {
        font-size: 1.35rem;
        padding: 0.25rem 0;
        color: ${props => {
		const scores = meetsContrastGuidelines(props.primaryColor, 'white');
		if (!scores.AA) {
			// TODO: Add more logic here to progressively darken until an accessible shade is found
			return shade(0.3, props.primaryColor);
		}
		return props.primaryColor;
	}};
    }
}

${Caption} {
    color: inherit;
    text-align: right;
    margin-top: auto;
}

${Button} {
    margin-left: auto;
    margin-top: 0.5rem;
}
`;
