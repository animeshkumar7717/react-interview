import React from 'react'

class Button extends React.Component {
    render() {
        return (
        <button>{this.props.text}</button>
      )
    }
}

class ClassCompProps extends React.Component {
    render(){
  return (
    <div>
        <p>hi tis the class components!</p>
      <Button text='Hi there, class compponent!' />
    </div>
  )
}
}


export default ClassCompProps
