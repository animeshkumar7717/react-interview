import React from 'react'


const keyValue = [
    {id: 1, name: 'Animesh'},
    {id: 2, name: 'Kumar'},
    {id: 3, name: 'Sharma'},
];

const KeyIndexMap = () => {
  return (
    <div>
        <p>This is to know the key and index in the map, How to show the element in the UI using map</p>
      {keyValue.map((key, index)=> (
        <div key={index}>{key.name}</div>
      ))}
    </div>
  )
}

export default KeyIndexMap
