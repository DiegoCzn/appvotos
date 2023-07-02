import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout'
import Login from './pages/Login'
import FormPage from './pages/FormPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Login/>

      },
      {
        path: "/formulario",
        element: <FormPage/>
      }
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
