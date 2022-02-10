import React from 'react'
import {HeaderProps} from './Header.props'
import cn from 'classnames'
import MessageIcon from './message.svg'
import BubbleIcon from './bubble.svg'

import styles from './Header.module.scss'

export const Header = ({className, ...props}: HeaderProps): JSX.Element => {
    return (
        <div className={cn(styles.wrapper, className)} {...props}>
            <div className={styles.message}>
                <MessageIcon />
            </div>
            <div className={styles.user}>
                <img
                    className={styles.image}
                    src='https://sun3-12.userapi.com/s/v1/ig2/33dqFxzNZyRou90eMw17A0Tczx0kBSksT5nFokAMQjbgkT8XELFDaU9-GNnU4lJ6aQtzLvK9_T7TrDVf38DiZxZ-.jpg?size=200x200&quality=95&crop=343,412,280,280&ava=1'
                    alt='user'
                />
                <div className={styles.info}>
                    <span className={styles.name}>Катюша И</span>
                    <span className={styles.status}>Student</span>
                </div>
                <BubbleIcon />
            </div>
        </div>
    )
}

