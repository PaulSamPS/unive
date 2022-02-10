import React from 'react'
import {Sidebar} from './Sidebar/Sidebar'
import {Header} from './Header/Header'
import {Body} from './Body/Body'

import styles from './Layout.module.scss'

export const Layout = () => {
    return (
        <div className={styles.wrapper}>
            <Sidebar className={styles.sidebar}/>
            <Header className={styles.header}/>
            <Body className={styles.body}/>
        </div>
    )
}

