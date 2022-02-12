import React from 'react'
import {HeaderProps} from './Header.props'
import cn from 'classnames'
import Link from 'next/link'
import MessageIcon from './message.svg'
import BubbleIcon from './bubble.svg'
import LogoIcon from './mobileLogo.svg'

import styles from './Header.module.scss'

export const Header = ({className, ...props}: HeaderProps): JSX.Element => {

    return (
        <div className={cn(styles.wrapper, className)} {...props}>
            <Link href={'/'} passHref>
                <div className={styles.logoIcon}>
                    <LogoIcon />
                </div>
            </Link>
            <Link href='/messenger' passHref>
                <div className={styles.message}>
                        <MessageIcon />
                </div>
            </Link>
            <div className={styles.user}>
                <img
                    className={styles.image}
                    src='/avatar.png'
                    alt='user'
                />
                <div className={styles.info}>
                    <span className={styles.name}>Mia V</span>
                    <span className={styles.status}>Student</span>
                </div>
                <BubbleIcon className={styles.bubbleIcon}/>
            </div>
        </div>
    )
}

