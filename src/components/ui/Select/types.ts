import { ActionMeta } from 'react-select';

type Option = {
    value: string;
    label: string;
};

export interface ISelectProps {
    placeholder: string;
    isClearable: boolean;
    onChange?:
        | ((newValue: any, actionMeta: ActionMeta<any>) => void)
        | undefined;
    options: Option[];
}
