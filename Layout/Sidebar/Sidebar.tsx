import {Logo, Menu} from '../../components'
import {SidebarProps} from './Sidebar.props'
import cn from 'classnames'

import styles from './Sidebar.module.scss'

export const Sidebar = ({className, ...props}: SidebarProps): JSX.Element => {
    return (
        <div className={cn(styles.wrapper, className)} {...props}>
            <Logo />
            <Menu />
        </div>
    )
}

