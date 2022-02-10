import {DetailedHTMLProps, HTMLAttributes} from 'react'
import {ISession} from './UpcomingSessions.interface'

export interface UpcomingSessionsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    sessions: ISession[]
}