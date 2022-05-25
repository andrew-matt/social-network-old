import {ActionTypes} from "./Redux-Store";

export type AuthType = {
    userId: number | null
    email: string | null
    login: string | null
}

const SET_USER_DATA = 'SET_USER_DATA'

const initialState: AuthType = {
    userId: null,
    email: null,
    login: null
}

const authReducer = (state = initialState, action: ActionTypes): AuthType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}

export const setUserData = (userId: number, email: string, login: string) => ({type: SET_USER_DATA, data: {userId: userId, email: email, login: login}} as const)

export default authReducer;