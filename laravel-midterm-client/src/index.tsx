import React from 'react';
import ReactDOM from 'react-dom/client';

import Products from "pages/Products";

import 'styles/__app.scss';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot
(
  document.getElementById('root') as HTMLElement
);

root.render
(
  <React.StrictMode>
      <Products/>
  </React.StrictMode>
);


reportWebVitals();
