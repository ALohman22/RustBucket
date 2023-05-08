import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './state/AuthContext';
import { ProjectContextProvider } from './state/ProjectContext'
import { ComponentContextProvider } from './state/ComponentContext';
// import { Provider } from 'react-redux'
// import store from './redux/store'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <ComponentContextProvider>
    <AuthContextProvider>
      <ProjectContextProvider>
          <BrowserRouter>
        {/* <Provider store={store}> */}
            <App />
        {/* </Provider>  */}
          </BrowserRouter>
      </ProjectContextProvider>
    </AuthContextProvider>
        </ComponentContextProvider>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

