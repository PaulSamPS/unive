import React, {useState} from 'react'
import {WhiteBlock} from '../WhiteBlock/WhiteBlock'
import {UpcomingSessionsProps} from './UpcomingSessions.props'
import {ISession} from './UpcomingSessions.interface'
import UpcomingSessionCard from '../UpcomingSessionCard/UpcomingSessionCard'
import cn from 'classnames'

import styles from './UpcomingSessions.module.scss'

const UpcomingSessions = ({sessions, className, ...props}: UpcomingSessionsProps): JSX.Element => {
    const [sessionLength, setSessionLength] = useState<number>(3)
    const [seeAllSessions, setSeeAllSessions] = useState<boolean>(false)

    const seeAll = () => {
        setSessionLength(sessions.length)
        setSeeAllSessions(!seeAllSessions)
    }

    return (
        <WhiteBlock className={cn(styles.wrapper, className)} {...props}>
            <h3 className={styles.title}>Upcoming Sessions</h3>
                <div className={styles.titleSessions}>
                    <span className={styles.date}>Date</span>
                    <span className={styles.class}>Class</span>
                    <span className={styles.time}>Time</span>
                </div>
            <div className={styles.sessions}>
                {sessions.slice(0, sessionLength).map((session: ISession) => <UpcomingSessionCard key={session.id} session={session}/>)}
            </div>
            <span className={styles.seeAll} onClick={seeAll}>{!seeAllSessions ? 'See All Sessions' : 'Hide All Sessions'}</span>
        </WhiteBlock>
    )
}

export default UpcomingSessions