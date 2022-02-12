import {DetailedHTMLProps, HTMLAttributes} from 'react'
import {IUserMessenger} from '../../interfaces/ChatUser.interface'

export interface MessageProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    user: IUserMessenger
}