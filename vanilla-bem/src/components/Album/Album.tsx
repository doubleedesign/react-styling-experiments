import { FC } from 'react';

interface AlbumProps {
	title: string;
	artist: string;
	year: string;
	label: string;
	image: string;
	color: string;
	link: string;
}

const Album: FC<AlbumProps> = (props) => {

	return (
		<div className="album">
			<div className="album__card">
				<img src={props.image} alt={`${props.title} album cover`}/>
				<div>
					<h3>{props.title}</h3>
					<p>{props.artist}</p>
					<span className="album__card__meta">{props.label}, {props.year}</span>
				</div>
			</div>
		</div>
	);
};

export default Album;
