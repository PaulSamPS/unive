import React, {useEffect, useState} from 'react'
import {IMenu} from '../../interfaces/Menu.interface'
import {useAppDispatch, useAppSelector} from '../../hooks/useRedux'
import {getMenu} from '../../redux/actions/apiReducer'
import cn from 'classnames'
import DashboardIcon from './dashboard.svg'
import CoursesIcon from './courses.svg'

import styles from './Menu.module.scss'

export const Menu = () => {
    const [activeItem, setActiveItem] = useState<number>(0)
    const menu = useAppSelector(state => state.api.menu)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getMenu())
    }, [])

    return (
        <div className={styles.menuDesktop}>
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
