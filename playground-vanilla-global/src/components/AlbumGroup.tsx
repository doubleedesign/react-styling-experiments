import { FC, PropsWithChildren } from 'react';
import styles from './AlbumGroup.module.scss';

const AlbumGroup: FC<PropsWithChildren> = ({ children }) => (
	<div className={styles.AlbumGroup}>
		<div className={styles.AlbumList}>
			{children}
		</div>
	</div>
);

export default AlbumGroup;
