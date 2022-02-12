import React from 'react'
import {Header} from '../Layout/Header/Header'
import {MobileMenu} from '../components/MobileMenu/MobileMenu'

import styles from '../styles/Page.module.scss'

const Courses = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <h3>Courses</h3>
            <MobileMenu />
        </div>
    )
}

export default Courses