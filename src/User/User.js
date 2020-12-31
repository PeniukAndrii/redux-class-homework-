import {useDispatch,useSelector} from "react-redux";
import React from 'react'
import UserBtn from "../Button/User/UserBtn";
import '../App.css'

export default function User(){
    const state = useSelector((state)=>state)
    const dispatch = useDispatch()
    const handleForm = (e) =>{
        e.preventDefault();
        (e.target[1].value ==='' || e.target[0].value==='') ?  alert('Input Name and Age!!!') : dispatch({type:'SET_USER', payload:{name:e.target[0].value, age:e.target[1].value}})
    }
    return(
        <div>
            <form onSubmit={handleForm} className={'User-Form'}>
                <span>Name</span><input type="text"/>
                <span>Age</span><input type="number"/>
                <button>Set</button>
            </form>
            {
                state.map((value,index)=><div className={'User'}>
                    <div className={'Solo'}><span>Name:</span><div>{value.name}</div></div>
                    <div className={'Solo'}><span>Age:</span><div>{value.age}</div></div>
                    <div><UserBtn value={value} index={index} key={index}/></div>
                </div>)
            }
        </div>
    );
}