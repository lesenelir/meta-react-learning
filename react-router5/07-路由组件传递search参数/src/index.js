import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*App外部包含Router标签*/}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
