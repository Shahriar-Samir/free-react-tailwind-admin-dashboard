import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './css/style.css';
import './css/satoshi.css';
import 'jsvectormap/dist/css/jsvectormap.css';
import 'flatpickr/dist/flatpickr.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from './Features/store';
import {NextUIProvider} from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
      <NextUIProvider>
      <App />
      </NextUIProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
);
