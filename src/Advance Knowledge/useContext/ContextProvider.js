import React, { useState } from 'react';

const themes = {
    light: {
        forground: "#000000",
        background: "#eeeeee",
    },
    dark: {
        forground: "#ffffff",
        background: "#222222",
    }
}

// here, we have created context...
export const ThemeContext = React.createContext()

// here, we have created provider...
export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState(themes.light);
    const [activeTheme, setActiveTheme] = useState('light');

    const toggleTheme = () => {
        const nextTheme = activeTheme === 'light' ? 'dark' : 'light'; 
        setTheme(themes[nextTheme])
        setActiveTheme(nextTheme)
    }

    return (
        <ThemeContext.Provider value={[theme, toggleTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}


// now, we have read this context inside every single component.