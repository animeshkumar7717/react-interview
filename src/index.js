import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeContextProvider } from './Advance Knowledge/useContext/ContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  // </React.StrictMode>
);

reportWebVitals();
