type Option = {
    value: string;
    label: string;
};

export interface ISelectProps {
    placeholder: string;
    isClearable: boolean;
    options: Option[];
}
