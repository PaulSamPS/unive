import {Sidebar} from './Sidebar/Sidebar'
import {Header} from './Header/Header'
import Event from '../components/Event/Event'
import {CourseCard, WhiteBlock} from '../components'
import {ICourseCard} from '../interfaces/CourseCard.interface'
import {Chat} from '../components/Chat/Chat'
import UpcomingSessions from '../components/UpcomingSessions/UpcomingSessions'
import {MobileMenu} from '../components/MobileMenu/MobileMenu'

import styles from './Layout.module.scss'

const courses = [
    {id: 0, title: 'Master of Computer Science', desc: 'University of Upstateat at Brookstone', img:'/placeholder1.png', average: 'A-'},
    {id: 1, title: 'CERTIFICATE UX/UI design', desc: 'Academy of Art and Technology at Dursburg', img:'/placeholder.png', average: '--'}
]

export const Layout = () => {

    return (
        <div className={styles.wrapper}>
            <Sidebar className={styles.sidebar}/>
            <Header className={styles.header}/>
            <h1 className={styles.title}>Hello, Mia!</h1>
            <WhiteBlock className={styles.course}>
                <h3 className={styles.programs}>Active Programs</h3>
                {courses.map((course: ICourseCard) =>
                    <CourseCard className={styles.card} key={course.id} course={course}/>)
                }
            </WhiteBlock>
            <Chat className={styles.chat}/>
            <Event className={styles.event}/>
            <UpcomingSessions className={styles.upcomingSessions}/>
            <MobileMenu className={styles.mobileMenu}/>
        </div>
    )
}

