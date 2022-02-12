import React from 'react'
import {Header} from '../Layout/Header/Header'
import {MobileMenu} from '../components/MobileMenu/MobileMenu'

import styles from '../styles/Page.module.scss'

const Notifications = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <h3>Notifications</h3>
            <MobileMenu />
        </div>
    )
}

export default Notifications