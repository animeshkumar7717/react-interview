import React from 'react'

const Child = ({onButtonChange, text}) => {
    return <button onClick={()=>onButtonChange('#1 Child calling...')}>{text}</button>
}
const ParentChildCommunication = () => {
    const onButtonChange = (value) => {
        console.log('child button', value);
    }
    return (
        <div>
            <Child text='child button' onButtonChange={onButtonChange}  />
            <p>React is one direction flow, so you can only know which child called by the parents</p>
            <p>Otherwise, there is only parent to child communication is available in React.</p>
        </div>
    )
}

export default ParentChildCommunication
