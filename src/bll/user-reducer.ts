import {Dispatch} from "redux";

import { ActionType } from "./store"
import { usersApi } from "../api/api"


const initialState = {
    users: [],
    userCompany: {
        name:'',
        catchPhrase:'',
        bs:''
    },
    userAddress: {
        street:'',
        suite:'',
        city:'',
        zipcode:'',
        geo: {
            lat:'',
            lng:''
        },
    },
    currentUser:'',
    searchValue:''
}

export const usersReducer = (state:InitialStateType = initialState, action:ActionType):InitialStateType => {
    switch(action.type) {
        case SET_USERS: {
            return {
                ...state,
                users:[...action.users]
            }
        }
        case DELETE_USER: {
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.id)
            }
        }
        case SET_USER_INFORMATION: {
            return {
                ...state,
                currentUser: action.currentUser,
                userCompany: {
                    ...state.userCompany,
                    ...action.company
                },
                userAddress: {
                    ...action.userAddress,
                    geo:{
                        ...action.userAddress.geo
                    }
                }

            }
        }
        case SET_SEARCH_VALUE: {
            return {
                ...state,
                searchValue:action.value
            }
        }
        default: return state
    }
}


//ActionType
const SET_USERS = "USERS/SET-USERS"
const DELETE_USER = "USERS/DELETE-USER"
const SET_USER_INFORMATION = "USERS/SET-USER-INFORMATION"
const SET_SEARCH_VALUE = "USERS/SET-SEARCH-VALUE"

//thunk
export const getUsers = () => async (dispatch:Dispatch) => {
    try {
        const response = await usersApi.getUsers()
        dispatch(setUser(response.data))
    }
    catch(error) {
        console.log("Some Error")
    }
}
//ActionsCreator
const setUser = (users: UserType[]) => ({type:SET_USERS, users} as const)
export const deleteUser = (id:number) => ({type:DELETE_USER, id} as const)
export const setUserInformation = (company:CompanyType, currentUser:string, userAddress:AddressType) =>
    ({type:SET_USER_INFORMATION, company, currentUser, userAddress} as const)
export const setSearchValue = (value:string) => ({type:SET_SEARCH_VALUE, value} as const)

//types
export type UserReducerType =  |
    ReturnType <typeof setUser> |
    ReturnType <typeof deleteUser> |
    ReturnType <typeof setUserInformation> |
    ReturnType <typeof setSearchValue>


type InitialStateType = {
    users: UserType[]
    userCompany: CompanyType
    currentUser:string
    searchValue:string
    userAddress:AddressType
}

export type UserType = {
    id: number
    name: string
    username: string
    email: string
    address: AddressType
    phone: string
    website: string
    company: CompanyType
}
export type CompanyType = {
    name:string
    catchPhrase:string
    bs:string
}

export type AddressType = {
    street:string
    suite:string
    city:string
    zipcode:string
    geo:GeoType
}
type GeoType = {
    lat:string
    lng:string
}
