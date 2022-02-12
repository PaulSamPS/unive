import React from 'react'
import {WhiteBlock} from '../WhiteBlock/WhiteBlock'
import {EventProps} from './Event.props'
import ArrowIcon from './arrow.svg'
import TimeIcon from './time.svg'
import cn from 'classnames'

import styles from './Event.module.scss'

const Event = ({className, ...props}: EventProps): JSX.Element => {
    return (
        <>
            <WhiteBlock className={cn(styles.wrapper, className)} {...props}>
                <div className={styles.desktop}>
                    <div className={styles.event}>
                        <div className={styles.image}>
                            <img src='/event.jpg' alt='event'/>
                            <div className={styles.checked}>
                                <ArrowIcon />
                                <span>Checked In</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottomBlock}>
                        <h3 className={styles.title}>UX Research - Week 3</h3>
                        <p className={styles.subTitle}>CERTIFICATE UX/UI design</p>
                        <div className={styles.date}>
                            <span className={styles.number}>08</span>
                            <span className={styles.text}>April</span>
                        </div>
                        <TimeIcon className={styles.time}/>
                        <span className={styles.timeText}>In Progress</span>
                        <span className={styles.timeJoin}>Join Now</span>
                    </div>
                </div>
            </WhiteBlock>
            <div className={styles.mobile}>
                <div className={styles.bottomBlockMobile}>
                    <div className={styles.imageMobile}>
                        <img src='/event.jpg' alt='event'/>
                        <div className={styles.background}/>
                        <div className={styles.checkedMobile}>
                            <ArrowIcon />
                            <span>Checked In</span>
                        </div>
                    </div>
                    <h3 className={styles.titleMobile}>UX Research - Week 3</h3>
                    <p className={styles.subTitleMobile}>CERTIFICATE UX/UI design</p>
                    <div className={styles.dateMobile}>
                        <span className={styles.numberMobile}>08</span>
                        <span className={styles.dateTextMobile}>April</span>
                    </div>
                    <TimeIcon className={styles.timeMobile}/>
                    <span className={styles.timeTextMobile}>In Progress</span>
                    <span className={styles.timeJoinMobile}>Join Now</span>
                </div>
            </div>
        </>
    )
}

export default Event