import {DetailedHTMLProps, HTMLAttributes} from 'react'
import {ISession} from './UpcomingSessionCard.interface'

export interface UpcomingSessionCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    session: ISession
}