import React, {useEffect, useState} from 'react'
import {BodyProps} from './Header.props'
import cn from 'classnames'
import {CourseCard, WhiteBlock} from '../../components'
import {ICourseCard} from '../../components/CourseCard/CourseCard.interface'
import PlusIcon from './plus.svg'

import styles from './Body.module.scss'
import {Chat} from "../../components/Chat/Chat";
import axios from "axios";

const course = [
    {id: 0, title: 'Master of Computer Science', desc: 'University of Upstateat at Brookstone', img:'/placeholder1.png', average: 'A-'},
    {id: 1, title: 'CERTIFICATE UX/UI design', desc: 'Academy of Art and Technology at Dursburg', img:'/placeholder.png', average: '--'}
]

export const Body = ({className, ...props}: BodyProps): JSX.Element => {
    const [user, setUser] = useState([])
    useEffect(() => {
        axios.get('https://6202b21c4d21c200170b99b8.mockapi.io/users').then(res => setUser(res.data))
    }, [])
    console.log(user)

    return (
        <div className={cn(styles.wrapper, className)} {...props}>
            <h1 className={styles.title}>Hello, Mia!</h1>
            <WhiteBlock className={styles.course}>
                <h3 className={styles.programs}>Active Programs</h3>
                {course.map((course: ICourseCard) => <CourseCard className={styles.card} key={course.id} course={course}/>)}
            </WhiteBlock>
            <Chat className={styles.chat} user={user}/>
        </div>
    )
}
