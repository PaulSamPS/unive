import React, {useEffect, useState} from 'react'
import PlusIcon from '../../Layout/Body/plus.svg'
import {WhiteBlock} from '../WhiteBlock/WhiteBlock'
import cn from 'classnames'
import {IUserMessenger} from './Chat.interface'

import styles from './Chat.module.scss'
import {ChatProps} from "./Chat.props";

export const Chat = ({user, className, ...props}: ChatProps): JSX.Element => {
    const [messageRead, setMessageRead] = useState(false)

    return (
        <div className={cn(styles.wrapper, className)} {...props}>
            <div className={styles.header}>
                <div className={styles.avatar} >
                    <img src='/avatar.png' width={30} height={30} alt='avatar'/>
                    <div className={styles.online}/>
                </div>
                <span className={styles.titleAvatar}>Messages</span>
            </div>
            <WhiteBlock className={styles.chat}>
                <div className={styles.userRow}>
                    <div className={styles.user}>
                        <div className={styles.plusIcon}>
                            <PlusIcon/>
                        </div>
                        <span className={styles.name}>Add</span>
                    </div>
                    {user.map((user: IUserMessenger) =>
                        <div key={user.id} className={styles.user}>
                            <div className={styles.userAvatar}>
                                <img src={user.avatar} alt='user'/>
                            </div>
                            <span className={styles.name}>{user.firstName}</span>
                        </div>
                    )}
                </div>
                {user.map((user: IUserMessenger) =>
                    <div key={user.id} className={styles.message}>
                        <div className={styles.messageAvatar}>
                            <img src={user.avatar} alt='user'/>
                        </div>
                        <div className={styles.chatBlock}>
                            <div className={styles.chatName}>
                                <span>{user.firstName}</span>
                                &nbsp;
                                <span>{user.lastName}</span>
                            </div>
                            <div onClick={() => setMessageRead(!messageRead)} className={cn(styles.messageUnread, {
                                [styles.messageRead]: messageRead
                            })}>{user.chat[0].message}</div>
                        </div>
                        <div className={styles.unreadMessages}>
                            <span className={styles.activity}>{user.visit}</span>
                            <div className={styles.unreadCount}>{user.chat.length}</div>
                        </div>
                    </div>
                )}
            </WhiteBlock>
        </div>
    )
}
