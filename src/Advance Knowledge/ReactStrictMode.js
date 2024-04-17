import React from 'react'

const ReactStrictMode = () => {
  return (
    <div>
      <h3>React Strict Mode</h3>
      <p>It is only for  the development purpose, not for the production.</p>
      <ul>The main idea of two re-rendering...
        <li>To find the potential issue and shown it to you, it compares the first time rendering and second time rendering...</li>
        <li>It will not visible in the DOM element.</li>
      </ul>
    </div>
  )
}

export default ReactStrictMode
