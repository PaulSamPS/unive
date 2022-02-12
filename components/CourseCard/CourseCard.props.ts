import {DetailedHTMLProps, HTMLAttributes} from 'react'
import {ICourseCard} from '../../interfaces/CourseCard.interface'

export interface CourseCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    course: ICourseCard
}