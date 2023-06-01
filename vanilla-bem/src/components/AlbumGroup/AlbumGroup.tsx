import { FC, PropsWithChildren } from 'react';

const AlbumGroup: FC<PropsWithChildren> = ({ children }) => (
	<div className={styles.AlbumGroup}>
		<div className={styles.AlbumList}>
			{children}
		</div>
	</div>
);

export default AlbumGroup;
