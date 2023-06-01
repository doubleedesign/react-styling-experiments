import { FC, PropsWithChildren } from 'react';
import { AlbumGroupWrapper } from './AlbumGroup.styled';


const AlbumGroup: FC<PropsWithChildren> = ({ children }) => (
	<AlbumGroupWrapper>
		{children}
	</AlbumGroupWrapper>
);

export default AlbumGroup;
