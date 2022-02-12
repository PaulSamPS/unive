import React, {useState} from 'react'
import {MessageProps} from './Message.props'
import {useRouter} from 'next/router'
import cn from 'classnames'

import styles from './Message.module.scss'

export const Message = ({user, className, ...props}: MessageProps): JSX.Element => {
    const [messageRead, setMessageRead] = useState(false)
    const router = useRouter()
    const path = router.pathname

    const readMessage =
        messageRead ||
        Number(user.id) === 0 ||
        Number(user.id) === 2 ||
        Number(user.id) === 4 ||
        Number(user.id) === 6 ||
        Number(user.id) === 8

    return (
        <div key={user.id}
             className={cn(styles.message, className)}
             style={path === '/messenger' ? {gridTemplateColumns: '55px 1fr 60px'} : undefined}
             onClick={() => setMessageRead(true)}
             {...props}
        >
            <div className={styles.messageAvatar}>
                <img src={user.avatar} alt='user'/>
            </div>
            <div className={styles.chatBlock}>
                <div className={styles.chatName}>
                    <span>{user.firstName}</span>
                    &nbsp;
                    <span>{user.lastName}</span>
                </div>
                <div className={cn(styles.messageUnread, {
                    [styles.messageRead]: readMessage
                })}>{user.chat[user.chat.length -1].message}</div>
            </div>
            <div className={styles.unreadMessages}>
                <span className={styles.activity}>{user.visit}</span>
                <div className={cn(styles.unreadCount, {
                    [styles.unreadCountNone]: readMessage
                })}>{user.chat.length}</div>
            </div>
        </div>
    )
}