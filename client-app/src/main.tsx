import 'semantic-ui-css/semantic.min.css'
import { createRoot } from 'react-dom/client'
import App from './app/layouts/App.tsx'
import './app/layouts/styles.css'
import { store, StoreContext } from './app/stores/store.ts'

createRoot(document.getElementById('root')!).render(
  //<StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  //</StrictMode>,
)
