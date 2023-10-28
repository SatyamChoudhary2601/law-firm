import { FEATURES } from "../../constant";
import Card from "../Card";
import PageTitle from "../PageTitle";
import styles from "./index.module.css";

const Feature = () => {
    return (
        <section className={styles.feature}>
            <PageTitle title="Why Choose us?" isCenter={true} />
            <div className={styles.cardContainer}>
                {FEATURES.map((feature) => (
                    <Card
                        key={feature.id}
                        title={feature.title}
                        desc={feature.desc}
                        btnText={feature.btnText}
                    />
                ))}
            </div>
        </section>
    );
};

export default Feature;
