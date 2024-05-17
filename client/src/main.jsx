import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider,  createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Home from './PortfolioContainer/Home/Home.jsx';
import AboutMe from './PortfolioContainer/AboutMe/AboutMe.jsx';
import Skills from './PortfolioContainer/Skills/Skills.jsx';
import Contact from './PortfolioContainer/ContactMe/Contact.jsx';


const router = createBrowserRouter([
  {path: '/', element: <App/>, 
  children:[
    {path: '/Home', element: <Home />},
    {path: '/About', element: <AboutMe />},
    {path: '/Skills', element: <Skills />},
    {path: '/Contact', element: <Contact />},
    
  ]},
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)