import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NewsProvider from './context/newsContext.jsx'
import News from './component/News.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<News category='general'/>
      },
      {
        path:'/search',
        element:<News/>
      },
      {
        path:'/business',
        element:<News category='business'/>
      },
      {
        path:'/sports',
        element:<News category='sports'/>
      },
      {
        path:'/science',
        element:<News category='science'/>
      },
      {
        path:'/entertainment',
        element:<News category='entertainment'/>
      },
      {
        path:'/health',
        element:<News category='health'/>
      },
      {
        path:'/technology',
        element:<News category='technology'/>
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NewsProvider>
      <RouterProvider router={router}/>
    </NewsProvider>
  </React.StrictMode>,
)
