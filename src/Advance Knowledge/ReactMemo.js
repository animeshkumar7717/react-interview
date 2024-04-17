import React from 'react'

/**
 * Memo: works like a pure component
 * pure component: when we have so many states where one of them are updating their states then the child component is 
 * also re-rendering everytimes, because it is present in the parent component!
 * 
 * preventing  the un-nessaccery re-rending is the main working of the memo 
 * 
 */
const ReactMemo = () => {
  return (
    <div>
      <h3>React.memo</h3>
      <p>pure component: when we have so many states where one of them are updating their states then the child component is 
        also re-rendering everytimes, because it is present in the parent component!</p>
        <p>preventing  the un-nessaccery re-rending is the main working of the memo...</p>
    </div>
  )
}

export default ReactMemo
