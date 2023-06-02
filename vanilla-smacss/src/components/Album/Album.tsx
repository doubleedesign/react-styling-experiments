import { FC } from 'react';
import './Album.css';

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
		<div className="l-card-wrapper">
			<div className="album-card">
				<img className="album-image" src={props.image} alt={`${props.title} album cover`}/>
				<div className="album-content">
					<h3 className="album-title">{props.title}</h3>
					<p>{props.artist}</p>
					<span className="caption album-meta">{props.label}, {props.year}</span>
				</div>
			</div>
		</div>
	);
};

export default Album;
