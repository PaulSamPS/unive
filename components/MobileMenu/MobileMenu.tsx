import {useEffect} from 'react'
import {IMobileMenu} from '../../interfaces/MobileMenu.interface'
import {MobileMenuProps} from './MobileMenu.props'
import {useAppDispatch, useAppSelector} from '../../hooks/useRedux'
import {getMobileMenu, setActiveMenu} from '../../redux/actions/apiReducer'
import Link from 'next/link'
import cn from 'classnames'
import CoursesMobileIcon from './coursesMobile.svg'
import DashboardMobileIcon from './dashboardMobile.svg'
import NotificationsMobile from './notificationsMobile.svg'
import SettingsMobileIcon from './settingsMobile.svg'

import styles from './MobileMenu.module.scss'

export const MobileMenu = ({className,...props}: MobileMenuProps): JSX.Element => {
    const activeMenu = useAppSelector(state => state.api.activeMenu)
    const mobileMenu = useAppSelector(state => state.api.mobileMenu)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getMobileMenu())
    }, [])

    return (
        <div className={cn(styles.menuMobile, className)} {...props}>
            {mobileMenu.map((menu: IMobileMenu, index: number) =>
                <Link key={menu.id} href={menu.link} passHref>
                    <div onClick={() => dispatch(setActiveMenu(index))} className={cn(styles.menuBlock, {
                        [styles.active]: activeMenu === index
                    })}>
                            <div className={styles.icon}>
                                {
                                    menu.id == 0 ? <DashboardMobileIcon /> :
                                        menu.id == 1 ? <CoursesMobileIcon /> :
                                            menu.id == 2 ? <NotificationsMobile /> :
                                                menu.id == 3 ? <SettingsMobileIcon /> : ''
                                }
                            </div>
                            <span className={styles.text}>{menu.name}</span>
                    </div>
                </Link>
            )}
        </div>
    )
}
