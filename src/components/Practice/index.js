import { Grid } from '@mui/material'
import ImageView from '../ImageView'
import PageTitle from '../PageTitle'
import styles from './index.module.css'
import { img1, img2, img3, img4, img5, img6 } from "../../assets"
const Practice = () => {
    return (
        <section className={styles.practice}>
            <div className={styles.wrapper}>
                <PageTitle title="Area of Practices" isCenter={true} />
                <Grid container spacing={2} marginTop={8}>
                    <Grid item xs={8}>
                        <ImageView src={img1} text="BUSINESS LAW" />
                    </Grid>
                    <Grid item xs={4}>
                        <ImageView src={img2} text="Partnership LAW" />
                    </Grid>
                    <Grid item xs={4}>
                        <ImageView src={img3} text="REAL ESTATE LAW" />
                    </Grid>
                    <Grid item xs={8}>
                        <ImageView src={img4} text="BUSINESS LAW" />
                    </Grid>
                    <Grid item xs={8}>
                        <ImageView src={img5} text="LANDLORD DISPUTES" />
                    </Grid>
                    <Grid item xs={4}>
                        <ImageView src={img6} text="ELDER ABUSE" />
                    </Grid>
                </Grid>
            </div>
        </section>
    )
}

export default Practice
