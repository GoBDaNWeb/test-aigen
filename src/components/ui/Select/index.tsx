// * react
import React from 'react';
import { ISelectProps } from './types';
import Select, { StylesConfig } from 'react-select';

const styles: StylesConfig<any> = {
    container: (styles) => ({
        ...styles,
        width: '100%',
    }),
    control: (styles) => ({
        ...styles,
        backgroundColor: 'white',
        boxShadow: 'none',
        borderBox: 'none',
        borderColor: '#a3a3a3',
        cursor: 'pointer',
    }),
};

const SingleSelect: React.FC<ISelectProps> = ({
    placeholder,
    isClearable,
    onChange,
    options,
}) => {
    return (
        <Select
            defaultValue={options[0]}
            isClearable={isClearable}
            isSearchable={false}
            onChange={onChange}
            name="color"
            options={options}
            styles={styles}
            placeholder={placeholder}
        />
    );
};

export default SingleSelect;
