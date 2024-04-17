import React, { useState } from 'react'


const CustomHook = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        if (typeof window === 'undefined') {
            return initialValue;
        }
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue; // Parse item, not key
        } catch (error) {
            console.log('error', error);
            return initialValue;
        }
    });

    const setValue = value => {
        try {
            setStoredValue(value);
            if (typeof window !== 'undefined') {
                localStorage.setItem(key, JSON.stringify(value)); // Use setItem, not getItem
            }
        } catch (error) {
            console.log('error', error);
        }
    };
    return [storedValue, setValue];
};


const UseLocalStorage = () => {
    const [name, setName] = CustomHook('name', 'Animesh');
  return (
    <div>
      <h3>Custom Hook UseLocalStorage</h3>
      <input 
        type='text' 
        value={name} 
        placeholder='Enter your name'
        onChange={(e)=>setName(e.target.value)}
      />
    </div>
  )
}

export default UseLocalStorage
