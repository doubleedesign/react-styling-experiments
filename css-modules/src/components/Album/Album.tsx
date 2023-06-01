import { FC } from 'react';
import styles from './Album.module.scss';

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
		<div className={styles.Album}>
			<div className={styles.AlbumCard}>
				<img src={props.image} alt={`${props.title} album cover`}/>
				<div>
					<h3>{props.title}</h3>
					<p>{props.artist} <span className={styles.caption}>{props.label}, {props.year}</span></p>
					<a className={styles.ButtonLink} href="#">View</a>
				</div>
			</div>
		</div>
	);
};

export default Album;
