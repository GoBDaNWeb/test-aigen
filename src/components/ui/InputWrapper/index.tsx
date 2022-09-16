// * react
import React, { PropsWithChildren } from 'react';
import { IInputProps } from './types';

// * styles
import styles from './Input.module.scss';

// * components
import Title from '../Title';

const InputWrapper: React.FC<PropsWithChildren<IInputProps>> = ({
    children,
    title,
    additional,
}) => {
    return (
        <div className={styles.inputWrapper}>
            <label htmlFor="input" className={styles.input}>
                {title && <Title variant="h4">{title}</Title>}
                {children}
            </label>
            {additional ? (
                <span className={styles.additional}>{additional}</span>
            ) : null}
        </div>
    );
};

export default InputWrapper;
