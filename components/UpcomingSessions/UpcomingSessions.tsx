import React from 'react'
import {WhiteBlock} from "../WhiteBlock/WhiteBlock";
import styles from './UpcomingSessions.module.scss'
import {UpcomingSessionsProps} from "./UpcomingSessions.props";
import cn from "classnames";

const UpcomingSessions = ({className, ...props}: UpcomingSessionsProps): JSX.Element => {
    return (
        <WhiteBlock className={cn(styles.wrapper, className)} {...props}>
            <h3 className={styles.title}>Upcoming Sessions</h3>
            <div className={styles.sessions}>
                <span className={styles.date}>Date</span>
                <span className={styles.class}>Class</span>
                <span className={styles.time}>Time</span>
                <div className={styles.dateSession}>
                    <span className={styles.dateStart}>Tomorrow</span>
                    <span className={styles.number}>09</span>
                    <span className={styles.text}>April</span>
                </div>
                <div className={styles.classBlock}>
                    <span className={styles.classTitle}>Database and Information Systems</span>
                    <p className={styles.classSubTitle}>Master of Computer Science</p>
                </div>
                <div className={styles.timeBlock}>
                    3:30pm-7:00pm
                </div>
            </div>
        </WhiteBlock>
    )
}

export default UpcomingSessions