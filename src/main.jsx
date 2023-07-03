import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout'
import Login from './pages/Login'
import FormPage from './pages/FormPage'
import Confirmacion from './pages/confirmacion'
import Identificacion from './pages/Identificacion'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Identificacion/>

      },
      {
        path: "/formulario",
        element: <FormPage/>,
      },
      {
        path: "/formulario/identificacion",
        element: <Identificacion/>
      },
      {
        path: "/formulario/confirmacion",
        element: <Confirmacion/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider 
      router={router}
    ></RouterProvider>
  // </React.StrictMode>
)
