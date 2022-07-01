import React from 'react';
import ReactDOM from 'react-dom/client';

import Products from "pages/Products";
import AddingForm from "components/AddingForm";

import 'styles/__app.scss';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot
(
  document.getElementById('root') as HTMLElement
);

root.render
(
  <React.StrictMode>
      <AddingForm/>
  </React.StrictMode>
);


reportWebVitals();
