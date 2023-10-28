import { useState } from 'react'
import { TEAM_LIST } from '../../constant'
import PageTitle from '../PageTitle'
import TeamCard from '../TeamCard'
import styles from './index.module.css'

const Team = () => {
    const [selectedItem, setSelectedItem] = useState(2);
    const selectedItemHandler = (val) => {
        setSelectedItem(val)
    }
    return (
        <section className={styles.team}>
            <PageTitle title={"Our Team"} isCenter={true} />
            <div className={styles.teamCard}>
                {TEAM_LIST.map(team => <TeamCard key={team.id} data={team} selectedItem={selectedItem} selectedItemHandler={selectedItemHandler} />)}
            </div>
        </section>
    )
}

export default Team
