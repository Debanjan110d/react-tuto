import React from 'react';
import { createRoot } from 'react-dom/client'

import App from './App.jsx'


const react_element = {
    type: "a",
    props: {
        href: "https://reactjs.org",
        target: "_blank",
    },
    children: "Learn React"
}

const Another_element = (
    <a href="https://reactjs.org" target="_blank">React is good LEarn It</a>
);

const a_react_element = React.createElement(// this is how react create element works
    // And in this you do not need to use  the 1st letter in upper case
    "a",
    {
        href:"https://reactjs.org",target:"_blank"
    },
    "Learn React through areact element"
    
)

createRoot(document.getElementById('root')).render(
    // Another_element it can work like that
   
    <App />
);
