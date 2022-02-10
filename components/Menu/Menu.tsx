import React, {useState} from 'react'
import cn from 'classnames'
import DashboardIcon from './dashboard.svg'
import CoursesIcon from './courses.svg'
import {IMenu} from './Menu.interface'

import styles from './Menu.module.scss'

const menu = [
    {id: 0, name: 'Dashboard', img: './courses.svg'},
    {id: 1, name: 'Courses', img: './dashboard.svg'}
]

export const Menu = () => {
    const [activeItem, setActiveItem] = useState<number>(0)

    return (
        <div className={styles.menu}>
            {menu.map((m: IMenu, index: number) => <div key={m.id} onClick={() => setActiveItem(index)} className={cn(styles.item, {
                    [styles.active]: activeItem === index
                })}>
                    {index == 0
                        ?
                        <DashboardIcon className={styles.icon}/>
                        :
                        <CoursesIcon className={styles.icon}/>
                    }
                    <span className={styles.text}>{m.name}</span>
                    <div className={styles.border}/>
                </div>
            )}
        </div>
    )
}
