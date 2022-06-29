import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './style/GlobalStyle';
import App from './App'
//import RevealMe from "./DidMount"
const root = ReactDOM.createRoot(document.getElementById('root'));
  
root.render(
    <>
       <App/>
        <GlobalStyle/>
    </>
);


