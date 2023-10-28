import styles from './index.module.css'

const TeamCard = ({ data, selectedItem, selectedItemHandler }) => {
    return (
        <div className={`${styles.teamCard} ${selectedItem === data.id && styles.active}`} onClick={() => selectedItemHandler(data.id)}>
            <div className={styles.imgContainer}>
                <img src={data.profile} alt={data.name} className={styles.img} />
            </div>
            <div className={styles.teamDetail}>
                <h4 className={styles.teamName}>{data.name}</h4>
                <p className={styles.cases}>{data.cases}</p>
            </div>
        </div>
    )
}

export default TeamCard
