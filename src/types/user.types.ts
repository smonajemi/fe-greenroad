export interface BackendUser {
    data?: any
    id?: string
    userName: string
    firstName: string
    lastName: string
    password?: string
    isDeleted: boolean
}

export interface User {
    user?: BackendUser
}
export interface LoginUser {
    user?: User
    responseMessage: string
}
