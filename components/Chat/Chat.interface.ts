interface IChat {
    id: string
    message: string
}

export interface IUserMessenger {
    id: string
    firstName: string
    lastName: string
    avatar: string
    visit: string
    chat: IChat[]
}