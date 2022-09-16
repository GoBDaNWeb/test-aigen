// * react
import React from 'react';
import { IAccordionProps } from './types';

// * styles/mui
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const AccordionMain = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(210, 232, 184)'
            : 'rgba(210, 232, 184)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const AccordionItem: React.FC<IAccordionProps> = ({
    index,
    document,
    expanded,
    setExpanded,
}) => {
    const handleChange =
        (panel: string) =>
        (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <AccordionMain
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
        >
            <AccordionSummary
                aria-controls={`panel${index}d-content`}
                id={`panel${index}d-header`}
            >
                <Typography>{document.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={{ fontWeight: 'bold', paddingBottom: '1rem' }}>
                    id: {document.id}
                </Typography>
                <Typography>{document.content}</Typography>
                <Typography sx={{ fontWeight: 'bold', paddingTop: '1rem' }}>
                    Создано {document.createdAt}
                </Typography>
            </AccordionDetails>
        </AccordionMain>
    );
};

export default AccordionItem;
