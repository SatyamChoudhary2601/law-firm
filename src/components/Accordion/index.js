import { Plus } from '../../assets';
import styles from './index.module.css'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'

const CustomExpandIcon = () => {
    return (
        <Box
            sx={{
                position: "relative",
                height: "28px",
                width: "28px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "var(--color-orange)",
                color: "var(--color-black)",
                ".Mui-expanded & > .collapsIconWrapper": {
                    display: "none",
                },
                ".expandIconWrapper": {
                    display: "none",
                },
                ".Mui-expanded & > .expandIconWrapper": {
                    display: "flex",
                },
                ".collapsIconWrapper": {
                    display: "flex",
                    color: "#9B7CC8",
                },
            }}
        >
            <div className="expandIconWrapper">
                <p className={styles.minus}>-</p>
            </div>
            <div className="collapsIconWrapper">
                <Plus />
            </div>
        </Box>
    );
};
const CustomAccordion = ({ data }) => {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<CustomExpandIcon />}
                aria-controls={`panel${data.id}a-content`}
                id={`panel${data.id}a-header`}
            >
                <Typography>{data.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {data.description}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default CustomAccordion;
