import React from 'react'
import LogoIcon from './logo.svg'

import styles from './Logo.module.scss'

export const Logo = () => {
    return (
        <div className={styles.logo}>
            <LogoIcon />
            <h1 className={styles.logoText}>Univé</h1>
        </div>
    )
}