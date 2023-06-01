import styled from 'styled-components';
import { complement } from 'polished';

export const AlbumCard = styled.div<{color: string}>`
	display: flex;
	align-items: center;
	
	h3 {
        color: ${props => complement(props.color)};
    }
`;
