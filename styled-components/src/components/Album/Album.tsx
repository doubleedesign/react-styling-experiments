import { FC } from 'react';
import { AlbumCard, AlbumCardWrapper } from './Album.styled';
import { Caption } from '../Caption/Caption.styled.ts';

// import { ButtonLink } from '../Button/ButtonLink.styled.ts';

interface AlbumProps {
	title: string;
	artist: string;
	year: string;
	label: string;
	image: string;
	primaryColor: string;
	link: string;
}

const Album: FC<AlbumProps> = (props) => {

	return (
		<AlbumCardWrapper>
			<AlbumCard primaryColor={props.primaryColor}>
				<img src={props.image} alt={`${props.title} album cover`}/>
				<div>
					<h3>{props.title}</h3>
					<p>{props.artist}</p>
					<Caption>{props.label}, {props.year}</Caption>
					{/*<ButtonLink primaryColor={props.primaryColor} href="#">View</ButtonLink>*/}
				</div>
			</AlbumCard>
		</AlbumCardWrapper>
	);
};

export default Album;
