import React from 'react'
import FunctionalCompProps from './Basic Knowledge/functionalCompProps'
import ClassCompProps from './Basic Knowledge/ClassCompProps'
import KeyIndexMap from './Basic Knowledge/KeyIndexMap'
import CondentionalRendering from './Basic Knowledge/CondentionalRendering'
import ParentChildCommunication from './Basic Knowledge/ParentChildCommunication'
import UseState from './Advance Knowledge/UseState'
import UseEffect from './Advance Knowledge/UseEffect'
import UseEffectAPI from './Advance Knowledge/UseEffectAPI'
import UseReducer from './Advance Knowledge/UseReducer'
import UseContext from './Advance Knowledge/useContext/UseContext'
import UseRef from './Advance Knowledge/UseRef'
import UseMemo from './Advance Knowledge/UseMemo'
import UseCallBack from './Advance Knowledge/UseCallBack'
import ReactMemo from './Advance Knowledge/ReactMemo'
import ReactStrictMode from './Advance Knowledge/ReactStrictMode'
import UseFetch from './Advance Knowledge/customHook/UseFetch'
import UseLocalStorage from './Advance Knowledge/customHook/UseLocalStorage'
import ReactPortal from './Advance Knowledge/ReactPortal'
import LazySuspense from './Advance Knowledge/lazyloading/LazySuspense'
import ForceReReder from './Advance Knowledge/ForceReReder'


const App = () => {
  return (
    <div className='app'>
      <div className='heading'>React Interview Preparation</div>
      <FunctionalCompProps />
      <p>---------------------------------------------</p>
      <ClassCompProps />
      <p>---------------------------------------------</p>
      <KeyIndexMap />
      <p>---------------------------------------------</p>
      <CondentionalRendering />
      <p>---------------------------------------------</p>
      <ParentChildCommunication />
      <p>---------------------------------------------</p>
      <p>---------------------------------------------</p>
      <UseState />
      <p>---------------------------------------------</p>
      <UseEffect />
      <p>---------------------------------------------</p>
      <UseEffectAPI />
      <p>---------------------------------------------</p>
      <UseReducer />
      <p>---------------------------------------------</p>
      <UseContext />
      <p>---------------------------------------------</p>
      <UseRef />
      <p>---------------------------------------------</p>
      <UseMemo />
      <p>---------------------------------------------</p>
      <UseCallBack />
      <p>---------------------------------------------</p>
      <ReactMemo />
      <p>---------------------------------------------</p>
      <ReactStrictMode />
      <p>---------------------------------------------</p>
      <UseFetch />
      <p>---------------------------------------------</p>
      <UseLocalStorage />
      <p>---------------------------------------------</p>
      <ReactPortal />
      <p>---------------------------------------------</p>
      <LazySuspense />
      <p>---------------------------------------------</p>
      <ForceReReder />
    </div>
  )
}

export default App
