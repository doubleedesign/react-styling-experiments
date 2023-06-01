import { FC } from 'react';
import { AlbumWrapper, AlbumDetail, AlbumImage } from './Album.styled';
import { LinkButton } from '../Button/LinkButton.styled.ts';
import { Caption } from '../Caption/Caption.styled.ts';

interface AlbumProps {
	title: string;
	artist: string;
	year: string;
	label: string;
	image?: string;
	color: string;
}

const Album: FC<AlbumProps> = (props) => (
	<AlbumWrapper>
		<AlbumImage>
			<img src={props.image} alt={`${props.title} album cover`} />
		</AlbumImage>
		<AlbumDetail>
			<h3>{props.title}</h3>
			<p>{props.artist}</p>
			<Caption>{props.label}, {props.year}</Caption>
		</AlbumDetail>
		<LinkButton color={props.color} href="https://www.last.fm/music/Bruce+Springsteen/Born+to+Run">View on Last.fm</LinkButton>
	</AlbumWrapper>
);

export default Album;
