import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';

import {
    AddressType,
    CompanyType,
    deleteUser,
    getUsers,
    setSearchValue,
    setUserInformation,
    UserType
} from '../../bll/user-reducer'
import {AppStateType} from '../../bll/store';
import {ModalWindow} from "../ModalWindow/ModalWindow";
import {User} from "./Users";

import style from './Users.module.css'


export const UsersTable = () => {

    const dispatch = useDispatch()
    const [activeModal, setActiveModal] = useState(false)
    const users = useSelector<AppStateType, UserType[]>(state => state.users.users)
    const searchValue = useSelector<AppStateType, string>(state => state.users.searchValue)

    const activeModalWindow = (company: CompanyType, name: string, address:AddressType) => {
        setActiveModal(true)
        dispatch(setUserInformation(company, name, address))
    }


    const closeModalWindow = () => {
        const nullCompany = {
            name: '',
            catchPhrase: '',
            bs: ''
        }
        const nullAddress = {
                street:'',
                suite:'',
                city:'',
                zipcode:'',
                geo: {
                    lat:'',
                    lng:''
                }
        }

        setActiveModal(false)
        dispatch(setUserInformation(nullCompany, '', nullAddress ))
    }

    const deleteUserHandler = (id: number) => {
        dispatch(deleteUser(id))
    }

    const resetUserHandler = () => {
        dispatch(getUsers())
        dispatch(setSearchValue(''))
    }

    const filteredUsers = users.filter(user =>
        user.name.includes(searchValue) ||
        user.username.includes(searchValue) ||
        user.email.includes(searchValue))


    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>NameUser</th>
                    <th>Email</th>
                    <th className={style.buttonTh}>
                        <button onClick={resetUserHandler} className={style.button}>
                            RESET
                        </button>
                    </th>
                </tr>
                </thead>
                <tbody>
                {filteredUsers.map(user => <User key={user.id}
                                                 id={user.id}
                                                 name={user.name}
                                                 userName={user.username}
                                                 deleteUser={deleteUserHandler}
                                                 activeModalWindow={activeModalWindow}
                                                 email={user.email}
                                                 searchValue={searchValue}
                                                 company={user.company}
                                                 address={user.address}
                    />
                )}
                </tbody>
            </table>
            {activeModal && <ModalWindow closeModalWindow={closeModalWindow}/>}
        </div>
    );
}

