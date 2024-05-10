import React, { useReducer, useState } from "react";

// const reducer = (state,action) => {
//     console.log(state,action);
//     if(action.type === 'incr' ){
//         return {count : state.count + 1}
//     }else if (action.type === 'decr'    ){
//         return {count : state.count - 1}
//     }else{
//         throw new Error('Unsupported Action');
//     }
// }

const initialState = {
    data : [],
    loading : false,
    error : null,
}


const reducer  = (state,action) => {
    console.log(state,action);
    switch(action.type){
        case 'FETCH_DATA_START' :
            return {...state,loading:true}
        case 'FETCH_DATA_SUCCESS' : 
            return {loading:false,error:null,data : action.payload}
        case 'FETCH_DATA_FAILURE' :
            return {...state,loading:false,error :action.payload}
        case 'DELETE_DATA' :
            return {...state,
                data: state.data.filter((item) => 
                item.id !== action.payload
            )}
        case 'ADD_DATA' : 
            return {...state,data:[...state.data,action.payload]}
    }
}
function Redu(){
    
    // const [count,setCount] = useState(0);
    // const [state,dispatch] = useReducer(reducer,intialstate);
    // const [state,dispatch] = useReducer(reducer,{count:0});
    // // reducer (coffee maker) function
    // // it is a pure function
    // // state (coffee powder) and action (water)
    // // new state (coffee)

    // // pure function ->  10+10 => 20 hee milega 
    // // is me side effect nhi hota

    // const handleClickInc = () =>{
    //     dispatch({type:"incr"})
    // }
    // const handleClickDec = () => {
    //     dispatch({type:"decr"});
    // }


    const [state,dispatch] = useReducer(reducer,initialState);
    
    const fetchData =  async() => {
        dispatch({type :'FETCH_DATA_START'});

        try{
            const response = await fetch('https://api.github.com/users')
            const data = await response.json();
            dispatch({type : "FETCH_DATA_SUCCESS" , payload : data})


        }catch(error){
            dispatch({type:"FETCH_DATA_FAILURE" , payload : Error.message});
        }
    }

    const deleteData = (id) =>{
        dispatch({type:'DELETE_DATA',payload:id});
    }
    const addData = (newdata) =>{
        console.log(newdata);
        dispatch({type:'ADD_DATA' , payload:newdata})
    }
  
    return(
        <div>

            <button onClick={fetchData}> fetch Data </button>
            {state.loading && <p>Loading....</p>}
            {state.error && <p>Error : {state.error}</p>}
            <ul>
            {state.data.map((item) => (
                <li key={item.id}>
                    {/* <img src={item.avatar_url} /> */}
                    <h6>{item.login}</h6> {''} 
                    <button onClick={()=> deleteData(item.id)}>Delete</button>
                    <hr/>
                </li>
            ))}
            </ul>
            <form onSubmit={(e) => {
                e.preventDefault();
                addData({
                    id : Date.now(),
                    login : e.target.title.value,
                })
            }}>
                <input type='text' name='title' placeholder="Add New Item"></input>
                <button type='submit'>Add</button>
            </form>
            {/* <h1> Ruducer Pd leta hun</h1>
            <button onClick={handleClickInc}>+</button>
            <button onClick={handleClickDec}>-</button>
            <h1> Counter : {state.count}</h1>     */}
        </div>
    )
}

export default Redu