import {IMobileMenu} from '../../interfaces/MobileMenu.interface'
import {IUserMessenger} from '../../interfaces/ChatUser.interface'
import {ISession} from '../../interfaces/UpcomingSessions.interface'
import {IMenu} from '../../interfaces/Menu.interface'
import {SET_ACTIVE_MENU, SET_LOADING, SET_MENU, SET_MOBILE_MENU, SET_SESSIONS, SET_USERS} from '../constants'

interface IRedux {
    menu: IMenu[]
    mobileMenu: IMobileMenu[]
    users: IUserMessenger[]
    sessions: ISession[]
    activeMenu: number
    loading: boolean
}

const initialState: IRedux = {
    menu: [],
    mobileMenu: [],
    users: [],
    sessions: [],
    activeMenu: 0,
    loading: false
}

const apiReducer = (state = initialState,action: any) => {
    switch (action.type) {
        case SET_MENU:
            return {
                ...state,
                menu: action.payload
            }
        case SET_MOBILE_MENU:
            return {
                ...state,
                mobileMenu: action.payload
            }
        case SET_ACTIVE_MENU:
            return {
                ...state,
                activeMenu: action.payload
            }
        case SET_USERS:
            return {
                ...state,
                users: action.payload,
            }
        case SET_SESSIONS:
            return {
                ...state,
                sessions: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}

export default apiReducer