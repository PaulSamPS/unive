import React from 'react'
import {UpcomingSessionCardProps} from './UpcomingSessionCard.props'
import cn from 'classnames'

import styles from './UpcomingSessionCard.module.scss'

export const UpcomingSessionCard = ({session, className, ...props}: UpcomingSessionCardProps): JSX.Element => {
    return (
        <div key={session.id} className={cn(styles.sessions, className)} {...props}>
            <div className={styles.dateSession}>
                <span className={styles.dateStart}>{session.day}</span>
                <span className={styles.number}>{session.date}</span>
                <span className={styles.text}>{session.month}</span>
            </div>
            <div className={styles.classBlock}>
                <span className={styles.classTitle}>{session.title}</span>
                <p className={styles.classSubTitle}>{session.subTitle}</p>
            </div>
            <div className={styles.timeBlock}>
                {session.timeStart}-{session.timeEnd}
            </div>
        </div>
    )
}