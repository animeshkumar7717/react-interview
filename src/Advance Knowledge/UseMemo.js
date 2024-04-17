import React, { useState, useMemo } from 'react'


/**
 * It inhance the performance of application...
 * 
 * lets consider, when we have 2 state: both changes their state in their setState function. which is perfectly fine.
 * Now, consider, there is one more function which is depended on one state among them...
 * that time, when you change state then the function will call, which has to be...
 * but when the that state will change which is not dependent on that function, at that time also the function will call...
 * which can cause the perfromance issues in the large application.
 * 
 * In this situation, we can use useMemo,  
 */


// ---------------------------------------------------------------------------------------------
// const UseMemo = () => {
//     const [count, setCount] = useState(0);
//     const [item, setItem] = useState(5);

//     const memoCountMulti = useMemo(()=>{
//         console.log('countMulti');
//         return count*5
//     }, [count])

//     return (
//         <div>
//             <h1>{count}</h1>
//             <h1>{item}</h1>
//             <h3>{memoCountMulti}</h3>
//             <button onClick={()=>setCount(count+1)}>click count</button>
//             <button onClick={()=>setItem(item*5)}>click item</button>
//         </div>
//     )
// }
// ---------------------------------------------------------------------------------------------


const users = [
    {
        id:1,
        name: 'Animesh'
    },
    {
        id:2,
        name: 'kumar'
    }
];

const UseMemo = () => {
    const [search, setSearch] = useState('');
    const [text, setText] = useState('');

    const filteredUsers = useMemo(() => {
        return users.filter((usr) => usr.name.toLowerCase().includes(search.toLowerCase()));
    }, [search]);

    return (
        <div>
            <h3>useMemo</h3>
            <input
                type='text'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={() => setSearch(text)}>Search</button>
            <ul>
                {filteredUsers.map((usr) => (
                    <li key={usr.id}>{usr.name}</li>
                ))}
            </ul> 

            <p>It is used to memorize a value. It returns a memoize value. </p>
        </div>
    );
};

export default UseMemo;
