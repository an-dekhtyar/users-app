import {useDispatch, useSelector} from "react-redux";
import {ChangeEvent} from "react";

import {AppStateType} from "../../bll/store";

import style from './Search.module.css'
import {setSearchValue} from "../../bll/user-reducer";



export function Search() {

    const dispatch = useDispatch()
    const searchValue = useSelector<AppStateType, string>(state => state.users.searchValue)

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchValue(e.currentTarget.value))
    }

    return (
        <div className={style.inputContainer}>
            <input value={searchValue} onChange={onChangeHandler} placeholder='Search'/>
        </div>
    );
}

