import React, { useCallback, useState } from 'react'

/**
 * Is it also used as to optimize the performance a application.
 * it returns memoize function.
 */


/**
 * *Remember: Whenever the parent component re-render, it's child component will also re-render!
 */

// const ChildComponent = React.memo(({Learning}) => {       // by using React.memo it will not re-render the component!
//     console.log('childComponent!!');
//     /** some operations */
// })

// const UseCallBack = () => {
//     const [count, setCount]  = useState(0);
//     const [add, setAdd]  = useState(0);
    
//     const Learning = useCallback(() => {
//         /** Some Operations will perform */
//     }, [count])           // This time, it will re-render becuase React will re-create this function in every click, so we memoise the function usinig useCallback()

//   return (
//     <div>
//       <h3>useCallback</h3>
//       <h2>{count}</h2>
//       <button onClick={()=>setCount(count+1)}>Counting</button>
//       <h2>{add}</h2>
//       <button onClick={()=>setAdd(add+1)}>Addition</button>
//       <ChildComponent Learning={Learning} />
//       <p>It is used to memorize the function, it returns memoize function</p>
//     </div>
//   )
// }

// ------------------------------------------------------------------------------------------------------------------------------

const initialUsers = [
    {
        id:1,
        name: 'Animesh'
    },
    {
        id:2,
        name: 'kumar'
    }
];

const ChildComponent = React.memo(({user, onRemove}) => {
    // console.log('child component!');
    return (
        <div>
            {user.map((ele)=>(
                <li key={ele.id}>{ele.name} <span onClick={()=>onRemove(ele.id)}>X</span>
                </li>
            ))}
        </div>
    )
})

const UseCallBack = () => {
    const [users, setUsers] = useState(initialUsers);
    const [text, setText] = useState("");

    // jere, we are getting the child component in every re-rendering, so, we have to use useCallback in the below function!
    
    const removeUserHandler = useCallback((userId) => {
        const updateUser = users.filter((usr)=> usr.id!==userId)
        setUsers(updateUser);
    }, [users]);

    

    return (
        <div>
            <h3>useCallback</h3>
            <input
                type='text'
                value={text}
                onChange={(e)=>setText(e.target.value)}
            />
            <ChildComponent user={users} onRemove={removeUserHandler} />
        </div>
    )
}

// ------------------------------------------------------------------------------------------------------------------------------

export default UseCallBack
