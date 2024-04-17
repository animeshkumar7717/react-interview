import React, { useContext } from 'react';
import { ThemeContext } from './ContextProvider';



const UseContext = () => {
  const [theme, toggleTheme] = useContext(ThemeContext);
  // here, theme and toggleTheme are comes from the the contextProvider and themeContext us comming from Context...
  // so now, theme is the local state where toggleTheme is a function to change the state.
  return (
    <div>
      <h3>UseContext</h3>
      <p> create something global, to access everywhere in every component.</p>
      <p> This is very important to prevent the props drilling, which is to give the props to the compoent which don't need it.</p>
      <h1 style={{background: theme.background, color: theme.forground}}>Use Context</h1>
      <button onClick={()=>toggleTheme()}>Toggle Theme</button>
      <p>We need two files, first for defining context and provider.... and second is use for that context by using useContext and the last thing is to wrap app in the contextProvider</p>
      <p>In the first file, in the provider has a value which has state and a function... function will use to change the state and state is use for storing the local state</p>
      <p></p>
    </div>
  )
}

export default UseContext
