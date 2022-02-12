import {Dispatch} from 'redux'
import {IMobileMenu} from '../../interfaces/MobileMenu.interface'
import {IUserMessenger} from '../../interfaces/ChatUser.interface'
import {API, SET_ACTIVE_MENU, SET_LOADING, SET_MENU, SET_MOBILE_MENU, SET_SESSIONS, SET_USERS} from '../constants'
import {ISession} from '../../interfaces/UpcomingSessions.interface'
import {IMenu} from '../../interfaces/Menu.interface'
import axios from 'axios'

export const getMenu = () => {
    return async (dispatch: Dispatch) => {
        await axios.get(`${API}/menu`).then(res => {
            dispatch(setMenu(res.data))
        })
    }
}

export const getMobileMenu = () => {
    return async (dispatch: Dispatch) => {
        await axios.get(`${API}/mobileMenu`).then(res => {
            dispatch(setMobileMenu(res.data))
        })
    }
}

export const getUsers = () => {
    return async (dispatch: Dispatch) => {
        dispatch(setLoading(true))
        await axios.get(`${API}/users`).then(res => {
            dispatch(setUsers(res.data))
            dispatch(setLoading(false))
        })
    }
}

export const getSessions = () => {
    return async (dispatch: Dispatch) => {
        dispatch(setLoading(true))
        await axios.get(`${API}/sessions`).then(res => {
            dispatch(setSessions(res.data))
            dispatch(setLoading(false))
        })
    }
}

export const setMenu = (menu: IMenu[]) => ({type: SET_MENU, payload: menu})
export const setMobileMenu = (menu: IMobileMenu[]) => ({type: SET_MOBILE_MENU, payload: menu})
export const setUsers = (users: IUserMessenger[]) => ({type: SET_USERS, payload: users})
export const setSessions = (sessions: ISession[]) => ({type: SET_SESSIONS, payload: sessions})
export const setActiveMenu = (index: number | null) => ({type: SET_ACTIVE_MENU, payload: index})
export const setLoading = (loading: boolean) => ({type: SET_LOADING, payload: loading})