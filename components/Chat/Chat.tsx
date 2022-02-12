import {WhiteBlock} from '../WhiteBlock/WhiteBlock'
import {IUserMessenger} from '../../interfaces/ChatUser.interface'
import {ChatProps} from './Chat.props'
import {ChatUser} from '../ChatUser/ChatUser'
import {Message} from '../Messages/Message'
import {useAppDispatch, useAppSelector} from '../../hooks/useRedux'
import {useEffect} from 'react'
import {getUsers} from '../../redux/actions/apiReducer'
import {Spinner} from '../Spinner/Spinner'
import { useRouter } from 'next/router'
import Link from 'next/link'
import cn from 'classnames'
import PlusIcon from './plus.svg'
import ArrowIcon from './arrow.svg'

import styles from './Chat.module.scss'

export const Chat = ({ className, ...props}: ChatProps): JSX.Element => {
    const dispatch = useAppDispatch()
    const users = useAppSelector(state => state.api.users)
    const loading = useAppSelector(state => state.api.loading)
    const router = useRouter()
    const path = router.pathname

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    return (
        <div className={cn(styles.wrapper, className)} {...props} style={path === '/messenger' ? {width: '100%'} : undefined}>
            <div className={styles.header} style={path === '/messenger' ? {borderRadius: '0'} : undefined}>
                {path === '/messenger'
                    ?
                    <Link href={'/'} passHref>
                        <div className={styles.back}>
                            <ArrowIcon />
                        </div>
                    </Link>
                    :
                    <div className={styles.avatar}>
                        <img src='/avatar.png' width={30} height={30} alt='avatar'/>
                        <div className={styles.online}/>
                    </div>
                }
                <span className={styles.titleAvatar}>Messages</span>
            </div>
            {loading
                ?
                    <Spinner style={path === '/messenger' ? {position: 'fixed'} : undefined}/>
                :
                    <WhiteBlock className={styles.chat} style={path === '/messenger' ? {maxHeight: '100%', borderRadius: '0'} : undefined}>
                    <div className={styles.userRow}>
                        <div className={styles.user}>
                            <div className={styles.plusIcon}>
                                <PlusIcon/>
                            </div>
                            <span className={styles.name}>Add</span>
                        </div>
                        {users.map((user: IUserMessenger) => <ChatUser key={user.id} user={user}/>)}
                    </div>
                    {users.map((user: IUserMessenger) => <Message key={user.id} user={user}/>)}
                </WhiteBlock>
            }
        </div>
    )
}
