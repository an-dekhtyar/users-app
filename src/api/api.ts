import axios from "axios"

import { UserType } from "../bll/user-reducer"



export const usersApi = {
    getUsers () {
        return axios.get<UserType[]>('https://jsonplaceholder.typicode.com/users')
    }
}






