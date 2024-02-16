
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/route.tsx'
import React from 'react'
import {Provider} from "react-redux"
import {store} from './redux/store.ts'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
   <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);

