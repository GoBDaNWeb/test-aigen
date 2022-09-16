// * react
import React, { PropsWithChildren } from 'react';
import { ITitle } from './types';

const Title: React.FC<PropsWithChildren<ITitle>> = ({ children, variant }) => {
    const Tag = `${variant}` as keyof JSX.IntrinsicElements;

    return <Tag>{children}</Tag>;
};

export default Title;
