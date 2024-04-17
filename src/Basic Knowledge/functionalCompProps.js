import React from 'react'

const Button = ({text}) => {
  return (
    <button>{text}</button>
  )
}

const FunctionalCompProps = () => {
  return (
    <div>
        <p>hi tis the functional components!</p>
      <Button text='Hi there, function compponent!' />
    </div>
  )
}


export default FunctionalCompProps
