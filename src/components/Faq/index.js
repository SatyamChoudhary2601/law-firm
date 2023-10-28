import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Typography,
} from "@mui/material";
import PageTitle from "../PageTitle";
import styles from "./index.module.css";
import { Plus } from "../../assets";
import CustomAccordion from "../Accordion";
import { ACCORDION_DATA } from "../../constant";

const Faq = () => {
    return (
        <section className={styles.faq}>
            <PageTitle title={"FAQ"} />
            <div className={styles.wrapper}>
                <div className={styles.faqLeft}>
                    <p className={styles.faqLeft_title}>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                        sint.{" "}
                    </p>
                </div>
                <div className={styles.faqRight}>
                    <h4 className={styles.faqRight_title}>Do I need a personal injury report?</h4>
                    <p className={styles.faqRight_para}>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                        sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
                        mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                        officia consequatduis enim velit mollit Exer.
                    </p>
                    {ACCORDION_DATA.map((item) => (
                        <CustomAccordion key={item.id} data={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
