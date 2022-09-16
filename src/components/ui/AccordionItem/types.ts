import { IDocument } from 'models';

export interface IAccordionProps {
    index: number;
    document: IDocument;
    expanded: string | boolean;
    setExpanded: React.Dispatch<React.SetStateAction<string | false>>;
}
