import React from 'react'
// import ReadAndWrite from './ReadAndWrite'
const ReadAndWrite = React.lazy(()=> import("./ReadAndWrite"));

const LazySuspense = () => {
  return (
    <div>
      <h3>React Lazy and Suspense</h3>
      <p>It will increase the bundle size, which we have to keep small in size as much as possible...</p>
      <p>we want every routing should be lazy, and we want to get the chunck of the data only when we jump to the route.</p>
      <p>............................................................................................</p>
      <React.Suspense fallback={<div>Loading...</div>}>
        <ReadAndWrite />
      </React.Suspense>
    </div>
  )
}

export default LazySuspense
