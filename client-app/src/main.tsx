import 'semantic-ui-css/semantic.min.css'
import { createRoot } from 'react-dom/client'
import 'react-calendar/dist/Calendar.css'
import './app/layouts/styles.css'
import { store, StoreContext } from './app/stores/store.ts'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router/Routes.tsx'

createRoot(document.getElementById('root')!).render(
  //<StrictMode>
    <StoreContext.Provider value={store}>
      <RouterProvider router={router}/>
    </StoreContext.Provider>
  //</StrictMode>,
)
