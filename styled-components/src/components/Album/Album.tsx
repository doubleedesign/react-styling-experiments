import { FC } from 'react';
import { AlbumCard } from './Album.styled';
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
	<AlbumCard color={props.color}>
		<img src={props.image} alt={`${props.title} album cover`} />
		<h3>{props.title}</h3>
		<p>{props.artist}</p>
		<Caption>{props.label}, {props.year}</Caption>
		<LinkButton color={props.color} href="https://www.last.fm/music/Bruce+Springsteen/Born+to+Run">View on Last.fm</LinkButton>
	</AlbumCard>
);

export default Album;
