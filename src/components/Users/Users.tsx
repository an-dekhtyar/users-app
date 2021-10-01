import {AddressType, CompanyType} from "../../bll/user-reducer"
import {SuperSpan} from "../SuperSpan/SuperSpan";

import style from '../Users/Users.module.css'



type UserPropsType = {
    id: number
    name: string
    userName: string
    email: string
    company: CompanyType
    deleteUser: (id: number) => void
    activeModalWindow: (company: CompanyType, name: string, address:AddressType) => void
    searchValue: string
    address:AddressType
}

export const User = (props: UserPropsType) => {

    const {id, name, userName, email, deleteUser, activeModalWindow,
        company, searchValue, address} = props

    const deleteUserHandler = () => { deleteUser(id) }
    const activeModalHandler = () => { activeModalWindow(company, name,address) }

    return (
        <tr>
            <td className={style.name} onClick={activeModalHandler}>
                <SuperSpan searchValue={searchValue} name={name}/>
            </td>
            <td>
                <SuperSpan searchValue={searchValue} name={userName}/>
            </td>
            <td>
                <SuperSpan searchValue={searchValue} name={email}/>
            </td>
            <td className={style.buttonTh}>
                <button className={style.button} onClick={deleteUserHandler}>
                    DELETE
                </button>
            </td>
        </tr>
    )
}
