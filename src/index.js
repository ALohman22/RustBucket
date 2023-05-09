import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './state/AuthContext';
import { ProjectContextProvider } from './state/ProjectContext'
import { ComponentContextProvider } from './state/ComponentContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <ComponentContextProvider>
    <AuthContextProvider>
      <ProjectContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
      </ProjectContextProvider>
    </AuthContextProvider>
        </ComponentContextProvider>
  </React.StrictMode>

);

