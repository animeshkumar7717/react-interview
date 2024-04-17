import React, { useEffect, useReducer } from 'react'

const initialState = {
    isLoading: false,
    error: null,
    data: []
}

// useReducer: This is a special function which transform our state to the new state.
// It means, we have initial state and some actions like event-driven, when user click in this state it will change their state.
const reducer = (state, action) => {
    // console.log('reducer', state);
    switch (action.type) {
        case 'getStartWithReducer': {
            return {
                ...state,
                isLoading: true
            };
        }
        case 'getStartWithSuccess': {
            return {
                ...state,
                isLoading: false,
                data: action.payload
            };
        }
        case 'getStartWithError': {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        }
        default: {
            return state;
        }
    }
};

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    // console.log('state', state);
    useEffect(() => {
        dispatch({ type: "getStartWithReducer" });
        fetchAPI();
    }, []);

    const fetchAPI = () => {
        const url = 'https://jsonplaceholder.typicode.com/todos/';
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(resData => {
                dispatch({ type: "getStartWithSuccess", payload: resData.splice(0,5) });
            })
            .catch(error => {
                dispatch({ type: "getStartWithError", payload: error.message });
            });
    };
    
  return (
    <div>
        <p>It is less mandetory to use than useState and useEffect...</p>
        <p>where useState and useEffect is highly mandetory to implement application, where useReducer is optional.</p>
        <p>It is basically to make redux to come into the picture</p>
        <p>If we have less complex application and have 3-4 properties, then we have to use useState, but if we have 30-40 properties then we really have to use useReducer</p>
        <p>-------------------------------------------------------------------------------------------</p>
        {state.isLoading && <div>Loading...</div>}
        <p>-------------------------------------------------------------------------------------------</p>
        {state.data.map((res)=>(
        <div key={res.id}>
            {res.title}
        </div>   
      ))}
        <p>useReducer is great way to minimize the business logics</p>
        <span style={{backgroundColor: "yellow"}}>Defn</span>
        <p>useReducer: This is a special function which transform our state to the new state.</p>
        <p>It means, we have initial state and some actions like event-driven, when user click in this state it will change their state.</p>
        <p style={{backgroundColor: "yellow"}}>----------------------------------------------------------  INSIDE DISPATCH  -----------------------------------------------------------------------</p>
        <p>Inside dispatch, there is a object which is a mandetoiry field that is "type", to know what actions is making...</p>
    </div>
  )
}

export default UseReducer;

