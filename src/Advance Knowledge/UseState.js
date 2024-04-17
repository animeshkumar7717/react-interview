import React, {useState} from 'react'

const UseState = () => {
    const [counter, setCounter] = useState(0);
    const onbuttonClick = (value) => {
        // console.log('button click', value);
        setCounter(prevCounter=>prevCounter+1);
        setCounter(prevCounter=>prevCounter+1);
        
        /** If we takes two setCounter(counter+1), it will increase only one becuase inside this 
         * render the counter is 1, and it will only change in the next render...
         * 
         *         // setCounter(counter+1);
         *         // setCounter(counter+1);
         */
    }
  return (
    <div>
      <p>The modern approch to have state in the functional component...</p>
      <p>You can not use useState in if condition.</p>
      App {counter} <pre />
      <button onClick={()=>onbuttonClick('hello')} > Hello</button>
    </div>
  )
}

export default UseState
