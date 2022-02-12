import {DetailedHTMLProps, HTMLAttributes} from 'react'
import {IUserMessenger} from '../../interfaces/ChatUser.interface'

export interface ChatUsersProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    user: IUserMessenger
}