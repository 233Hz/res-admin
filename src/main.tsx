import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './style/tailwind.css'
import './preflight.css'
import './style/index.scss'
import { BrowserRouter } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
