import React from 'react'
import {CourseCardProps} from './CourseCard.props'
import cn from 'classnames'
import Image from 'next/image'

import styles from './CourseCard.module.scss'

export const CourseCard = ({course, className, ...props}: CourseCardProps): JSX.Element => {
    return (
        <div className={cn(styles.wrapper, className)} {...props}>
            <div className={styles.coursesBlock}>
                <div className={styles.course}>
                    <div className={styles.icon}>
                        <Image src={course.img} alt={course.title} width={68} height={68}/>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.tagBlock}>
                            <span className={styles.tag}>{course.title}</span>
                        </div>
                        <span className={styles.text}>{course.desc}</span>
                    </div>
                    <div className={styles.evaluateBlock}>
                        <span className={styles.evaluate}>{course.average}</span>
                        <span className={styles.academicAverage}>Academic<br/>Average</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

