import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StaticPage from './StaticPage.jsx'

// method 1 : 
// createRoot(document.getElementById('root')).render(<App/>)

// method 2: 
const ProjectPage = createRoot(document.getElementById('root'));

ProjectPage.render(

  // project 1 method 1 :
  // StaticPage

  // project 1 method 2 : 
  <StrictMode>
    <App />
  </StrictMode>,
)

