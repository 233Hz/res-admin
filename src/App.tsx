import React from 'react'
import './App.scss'
import routes from './router'
import { useRoutes } from 'react-router-dom'

const App: React.FC = () => {
  const element = useRoutes(routes)
  return <div id="app">{element}</div>
}

export default App
