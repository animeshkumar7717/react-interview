import React, { useEffect, useState } from 'react'

const UseEffectAPI = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetchAPI();
    }, [])

    const fetchAPI = () => {
        const url = 'https://jsonplaceholder.typicode.com/todos/';
        fetch(url).then(response=> response.json()).then((resData=>setData(resData.slice(0,10))));
    }
  return (
    <div>
      {data.map((res)=>(
        <div key={res.id}>
            {res.title}
        </div>   
      ))}
    </div>
  )
}

export default UseEffectAPI
