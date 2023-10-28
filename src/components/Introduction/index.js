import styles from './index.module.css'

const Introduction = () => {
    return (
        <section className={styles.intro}>
            <div className={styles.left}>
                <h1 className={styles.leftHeading}>Let's Introduce Ourself</h1>
            </div>
            <div className={styles.divide} />
            <div className={styles.right}>
                <h4 className={styles.rightHeading}>Criminal Lawyer</h4>
                <p className={styles.rightCaption}>Amet minim mollit non deserunt ullamco est
                    sit aliqua dolor do amet sint. Velit officia consequatduis
                    enim velit mollit Exercitation.</p>
            </div>
        </section>
    )
}

export default Introduction
