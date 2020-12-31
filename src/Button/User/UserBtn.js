import React,{useState}from "react";
import {useDispatch} from "react-redux";
import '../../App.css'

export default function UserBtn(prop){
    const dispatch = useDispatch()
    const [state,setState] = useState(false)

    const handleForm = (e) =>{
        e.preventDefault()
        if(e.target[0].value===''){
            e.target[0].value=prop.value.name
        }
        if(e.target[1].value===''){
            e.target[1].value=prop.value.age
        }
        dispatch({type:'EDIT_USER', payload:{id:prop.index, value:{name:e.target[0].value, age:e.target[1].value}}})
    }
    return(
        <div>
            <button onClick={()=>dispatch({type:'DELETE_USER', payload:prop.index})} className={'BTN'}>Delete</button>
            <button onClick={()=>setState(!state)} className={'BTN'}>Edit</button>
                <div className={'Hide-Chose'}>
                    <div className={`${state}`}>
                        <form onSubmit={handleForm} >
                            <span>NewName:</span><input type="text"/>
                            <span>NewAge:</span><input type="number"/>
                            <button>Save</button>
                        </form>
                    </div>
                </div>
        </div>
  );
}