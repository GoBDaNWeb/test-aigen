// * react
import React, { PropsWithChildren } from 'react';
import { ITitle } from './types';

// * styles
import styles from './Title.module.scss';

const Title: React.FC<PropsWithChildren<ITitle>> = ({ children, variant }) => {
    const Tag = `${variant}` as keyof JSX.IntrinsicElements;

    return <Tag className={styles.title}>{children}</Tag>;
};

export default Title;
