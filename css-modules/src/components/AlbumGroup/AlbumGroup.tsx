import React, { FC } from 'react';
import styles from './AlbumGroup.module.scss';

interface AlbumGroupProps {}

const AlbumGroup: FC<AlbumGroupProps> = () => (
  <div className={styles.AlbumGroup}>
    AlbumGroup Component
  </div>
);

export default AlbumGroup;
