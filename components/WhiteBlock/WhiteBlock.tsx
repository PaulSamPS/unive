import React from 'react'
import {WhiteBlockProps} from './WhiteBlock.props'
import cn from 'classnames'

import styles from './WhiteBlock.module.scss'

export const WhiteBlock = ({className, children, ...props}: WhiteBlockProps): JSX.Element => {
    return (
        <div className={cn(styles.wrapper, className)} {...props}>
            {children}
        </div>
    )
}

