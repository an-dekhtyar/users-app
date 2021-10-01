import React from 'react';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../bll/store';
import {AddressType, CompanyType} from '../../bll/user-reducer';
import style from './ModalWindow.module.css'


type ModalPropsType = {
    closeModalWindow: () => void;
}

export const ModalWindow = (props: ModalPropsType) => {


    const userName = useSelector<AppStateType, string>(state => state.users.currentUser)
    const userCompany = useSelector<AppStateType, CompanyType>(state => state.users.userCompany)
    const userAddress = useSelector<AppStateType, AddressType>(state => state.users.userAddress)

    const closeWindowHandler = () => {
        props.closeModalWindow()
    }

    return (
        <div className={style.general}>
            <div className={style.window}>
                <h4>Information about {userName}</h4>
                <div className={style.information}>
                    <div>Name: <span className={style.informationText}>{userCompany.name}</span></div>
                    <div>CatchPhrase: <span className={style.informationText}>{userCompany.catchPhrase}</span></div>
                    <div>City: <span className={style.informationText}>{userAddress.city}</span></div>
                    <div>Street: <span className={style.informationText}>{userAddress.street}</span></div>
                    <div>Suite: <span className={style.informationText}>{userAddress.suite}</span></div>
                    <div>Zipcode: <span className={style.informationText}>{userAddress.zipcode}</span></div>
                    <div>Geo/Lat: <span className={style.informationText}>{userAddress.geo.lat}</span></div>
                    <div>Geo/Lng: <span className={style.informationText}>{userAddress.geo.lng}</span></div>
                </div>
                <div className={style.buttonContainer}>
                    <button onClick={closeWindowHandler}>Cancel</button>
                </div>
            </div>
            <div onClick={closeWindowHandler} className={style.background}/>
        </div>

    )
}