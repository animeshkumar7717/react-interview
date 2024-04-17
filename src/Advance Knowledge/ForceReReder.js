import React, { useReducer, useState } from 'react'


/**
 * 
 * @returns Class Approch
 */

// class ForceReReder extends React.Component {
//     render() {
//         console.log('render');
//         return (
//             <>
//                 <h3>Force Update</h3>
//                 <p>this.forceUpdate(), which is only present inside the class Component.</p>
//                 <button onClick={()=>this.forceUpdate()}>Force Upate</button>
//             </>
//         )
//     }
// }

/**
 * How can we do it with the functional component...
 * 
 */


const useForceUpdate = () => {
    const [value, setValue] = useState(false);
    return ()=>setValue(!value);
}

const ForceReReder = () => {
    const forceUpdate = useForceUpdate() 
    // const [ignore, forceUpdate] = useReducer((x)=>x+1, 0);
  return (
    <div>
      <button onClick={()=>forceUpdate()}>Force Update</button>
    </div>
  )
}

export default ForceReReder
