// * react
import React, { useState, useEffect } from 'react';
import { IAccordionProps } from './types';

// * store
import { observer } from 'mobx-react-lite';
import filter from '@store/filter';

// * components
import AccordionItem from '@components/ui/AccordionItem';

const Accordion: React.FC<IAccordionProps> = observer(
    ({ documents, isLoading }) => {
        const [expanded, setExpanded] = useState<string | false>('panel1');

        useEffect(() => {
            setExpanded('panel1');
        }, [filter.page]);

        return (
            <div>
                {isLoading ? (
                    <span>LOADING...</span>
                ) : (
                    <>
                        {documents && documents?.length > 0 ? (
                            <>
                                {documents?.map((document, index) => (
                                    <AccordionItem
                                        key={document.id}
                                        index={index + 1}
                                        document={document}
                                        expanded={expanded}
                                        setExpanded={setExpanded}
                                    />
                                ))}
                            </>
                        ) : (
                            <>Ничего не найдено</>
                        )}
                    </>
                )}
            </div>
        );
    },
);

export default Accordion;
