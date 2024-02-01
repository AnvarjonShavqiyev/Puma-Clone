import ReactDOM from 'react-dom/client'
import { Suspense, lazy } from 'react'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
const App = lazy(() => import('./App'));
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </BrowserRouter>
)
