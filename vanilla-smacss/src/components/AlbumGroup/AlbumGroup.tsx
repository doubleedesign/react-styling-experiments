import { FC, PropsWithChildren } from 'react';
import './AlbumGroup.css';

const AlbumGroup: FC<PropsWithChildren> = ({ children }) => (
	<div className="album-group">
		{children}
	</div>
);

export default AlbumGroup;
