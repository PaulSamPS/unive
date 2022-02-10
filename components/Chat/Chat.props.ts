import {DetailedHTMLProps, HTMLAttributes} from 'react'
import {IUserMessenger} from './Chat.interface'

export interface ChatProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    user: IUserMessenger[]
}