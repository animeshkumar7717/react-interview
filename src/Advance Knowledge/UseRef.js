import React, { useRef, useState } from 'react'

const UseRef = () => {
    // console.log('render');  
    const [userName, setUserName] = useState('');
    // console.log('userName', userName);
    // it only comes once, because our component doesn't re-rendering...
    const textInput = useRef();
    const countRef = useRef(0);
    const onTextfocus = () => {
        // console.log('onTextfocus', textInput.current.value);  // this is the reading of DOM element's value
        textInput.current.focus();
        countRef.current+=1
        // console.log('useRef', countRef.current);
        textInput.current.value = 'foo'  // re-rendering is not there, this is just a plain DOM.
    }
  return (
    <div>
      <h3>useRef</h3>
      <p>It is use for two different cases</p>
      <li>Storing the mutable value between re-rending....</li>
        <p>It store the value in between the re-rendering without causing the re-rendering...</p>
      <li>Direct access to the DOM element...</li>
      <p>----------------------------------------------------------</p>
      <input type='text' ref={textInput} value={userName} onChange={(e)=>setUserName(e.target.value)} />
      {userName}
      <button onClick={onTextfocus}>Focus on the input </button>
      <p>----------------------------------------------------------</p>
      <p>It only comes once, because our component doesn't re-rendering...</p>
    </div>
  )
}

export default UseRef
