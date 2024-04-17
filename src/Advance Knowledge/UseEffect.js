import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);
    // console.log('rendering!');
    const onButtonClick = (value) => {
        // console.log('onbuttonClick in 1', value);
        setCounter(counter+1);
    }
    const onButtonClick2 = (value) => {
        // console.log('onbuttonClick in 2', value);
        setCounter2(counter2+1);
    }
    useEffect(()=>{
        // console.log('use-effect triggered!');
        document.title=`You Clicked ${counter} times`
    }, [counter])      // It behaves like componentDidMount in class component but it is not acts like that, 
    // it appear only once just because in their dependecies doesn't have anything...
  return (
    <div>
      <p>This is the second most popular hooks in the functional component</p>
      <p>UseEffect is always render after the component is re-rendered! not in th beginning but after!</p>
      <span>Why do we need useEffect... As a name suggest, it is use for the side effect. </span>
      <ul>Example of Side Effect...
        <li>Api call</li>
        <li>Working with local Storage</li>
        <li>Working with DOM</li>
      </ul>
      <code> useEffect [] In the dependency array, whatever you write then useEffect will only render when the value will change... not else.</code>
      <br />
      <br />
      <code> [] when there is nothing in it. It behaves like componentDidMount in class component but it is not acts like that, it appear only once just because in their dependecies doesn't have anything...</code>

      <br /><br />
      App {counter} {counter2} <pre />
      <button onClick={()=>onButtonClick('hello')}>counter</button>
      <button onClick={()=>onButtonClick2('hello')}>counter2</button>
    </div>
  )
}

export default UseEffect
