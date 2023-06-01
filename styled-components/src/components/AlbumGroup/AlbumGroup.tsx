import { FC, PropsWithChildren } from 'react';
import { AlbumGroupWrapper, AlbumList } from './AlbumGroup.styled';


const AlbumGroup: FC<PropsWithChildren> = ({ children }) => (
	<AlbumGroupWrapper>
		<AlbumList>
			{children}
		</AlbumList>
	</AlbumGroupWrapper>
);

export default AlbumGroup;
