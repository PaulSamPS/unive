import React from 'react'
import cn from 'classnames'
import {ChatUsersProps} from './ChatUsers.props'

import styles from '../Chat/Chat.module.scss'

export const ChatUser = ({user, className, ...props}: ChatUsersProps): JSX.Element => {
    return (
        <div key={user.id} className={cn(styles.user, className)} {...props}>
            <div className={styles.userAvatar}>
                <img src={user.avatar} alt='user'/>
            </div>
            <span className={styles.name}>{user.firstName}</span>
        </div>
    )
}