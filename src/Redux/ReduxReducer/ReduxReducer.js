const initialState=[]

export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case'SET_USER':
            state.push({name:action.payload.name, age:action.payload.age})
            return[...state]
        case'DELETE_USER':
            let filter=state.filter((value, index) => index!==action.payload)
            return[...filter]
        case'EDIT_USER':
            state.splice(action.payload.id,1,action.payload.value)
            return[...state]
        default:
            console.error('ERROR')
            return state
    }
}