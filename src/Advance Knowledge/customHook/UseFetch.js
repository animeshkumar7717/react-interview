import React, { useCallback, useEffect, useState } from 'react';

/**
 *  fetch the below URL:
 * 'https://jsonplaceholder.typicode.com/todos/'
 */

const useFetch = (url) => {
    const [response, setResponse] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const doFetch = useCallback(() => {
      setIsLoading(true);
    }, [])

    // API call is always a side effect, and we must do into the useEffect.

    useEffect(()=>{
      if(!isLoading) {
        return;
      }

      const fetchURL = async() => {
        try {
          const res = await fetch(url);
          const data = await res.json();
          setResponse(data.slice(0,20));
        } catch (err) {
          const data = err.response ? err.response.data : 'server error'
          setError(data);
        }
        setIsLoading(false);
      }
      fetchURL()
    },[isLoading, url])

    return [{ response, isLoading, error}, doFetch];
}

const UseFetch = () => {
    const [{ response, isLoading, error}, doFetch] = useFetch(
        'https://jsonplaceholder.typicode.com/todos/'
    );
    // console.log('useFetch...', response, isLoading, error, doFetch );

    useEffect(()=>{
      doFetch()
    }, [doFetch])

    if(isLoading) {
      return <div>Loading...</div>
    }
    
    if(error) {
      return <div>{error}</div>
    }
  return (
    <div>
      <h3>custom hooks useFetch</h3>
      {
        response && response.map((ele)=>(
          <div key={ele.id}>{ele.title}</div>
        ))
      } 
    </div>
  )
}

export default UseFetch
