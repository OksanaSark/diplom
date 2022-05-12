import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'

import ProductStore from './store/ProductStore'
import UserStore from './store/UserStore'

import App from './App'

export const Context = createContext<any | null>(null)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
)

root.render(
    <React.StrictMode>
        <Context.Provider value={{
            user: new UserStore(),
            product: new ProductStore(),
        }}>
            <App />
        </Context.Provider>
    </React.StrictMode>,
)
