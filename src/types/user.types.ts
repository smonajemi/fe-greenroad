export interface BackendUser {
    key?: string
    data?: any
    email?: string
    id?: string
    userName: string
    firstName: string
    lastName: string
    password?: string
}

export interface User {
    user?: BackendUser
}
export interface LoginUser {
    user?: User
    responseMessage: string
}
