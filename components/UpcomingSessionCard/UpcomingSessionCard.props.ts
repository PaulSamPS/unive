import {DetailedHTMLProps, HTMLAttributes} from 'react'
import {ISession} from '../../interfaces/UpcomingSessions.interface'

export interface UpcomingSessionCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    session: ISession
}