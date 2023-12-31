/* ===================================================
    Date: 2023-08-02
    Desc: Providers Config
    Author: 🟣 Enoc Lima
=====================================================*/


'use client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import StyleProvider from './react/styleContext';
import AuthProvider from './react/authContext';

function Providers({ children }:{ children: React.ReactNode }) {
  return (
    <Provider store={store}>
        <StyleProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </StyleProvider>
    </Provider>
  )
}

export default Providers;