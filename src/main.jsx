import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MainRouter } from './router/MainRouter';
import { RouterProvider } from 'react-router-dom';
import { store } from './app/Store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import Loader from './components/Loader';

let persistor=persistStore(store);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
  <Provider store={store}>
    <PersistGate persistor={persistor}>
    <RouterProvider router={MainRouter} />
    </PersistGate>
  </Provider>
 
  </React.StrictMode>,
)
