import { FC, PropsWithChildren } from 'react';
import './AlbumGroup.scss';

const AlbumGroup: FC<PropsWithChildren> = ({ children }) => (
	<div className="album-group">
		<div className="album-group__list">
			{children}
		</div>
	</div>
);

export default AlbumGroup;
