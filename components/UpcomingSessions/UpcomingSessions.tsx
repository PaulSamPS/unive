import React, {useEffect, useState} from 'react'
import {WhiteBlock} from '../WhiteBlock/WhiteBlock'
import {UpcomingSessionsProps} from './UpcomingSessions.props'
import {ISession} from '../../interfaces/UpcomingSessions.interface'
import {UpcomingSessionCard} from '../UpcomingSessionCard/UpcomingSessionCard'
import {useAppDispatch, useAppSelector} from '../../hooks/useRedux'
import {Spinner} from '../Spinner/Spinner'
import {getSessions} from '../../redux/actions/apiReducer'
import cn from 'classnames'
import DotsIcon from './dots.svg'

import styles from './UpcomingSessions.module.scss'

const UpcomingSessions = ({className, ...props}: UpcomingSessionsProps): JSX.Element => {
    const [sessionLength, setSessionLength] = useState<number>(3)
    const [seeAllSessions, setSeeAllSessions] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const loading = useAppSelector(state => state.api.loading)
    const sessions = useAppSelector(state => state.api.sessions)

    useEffect(() => {
        dispatch(getSessions())
    },[])

    const seeAll = () => {
        setSessionLength(sessions.length)
        setSeeAllSessions(!seeAllSessions)
    }

    return (
        <WhiteBlock className={cn(styles.wrapper, className)} {...props}>
            {loading ? <Spinner /> :
                <div className={styles.desktop}>
                    <div className={styles.topBlock}>
                        <h3 className={styles.title}>Upcoming Sessions</h3>
                        <div className={styles.dotsIcon}>
                            <DotsIcon />
                        </div>
                    </div>
                    <div className={styles.titleSessions}>
                        <span className={styles.date}>Date</span>
                        <span className={styles.class}>Class</span>
                        <span className={styles.time}>Time</span>
                    </div>
                    <div className={styles.sessions}>
                        {loading ? <Spinner /> :
                            sessions.slice(0, seeAllSessions ? sessionLength : 3).map((session: ISession) =>
                                <UpcomingSessionCard key={session.id} session={session}/>
                            )}
                    </div>
                    <span className={styles.seeAll} onClick={seeAll}>
                        {!seeAllSessions ? 'See All Sessions' : 'All Sessions'}
                    </span>
                </div>
            }
        </WhiteBlock>
    )
}

export default UpcomingSessions