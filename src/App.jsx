
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layoute from './Layout'
import Home from './home/Home'
import About from './about/About'
import Portfolio from './portfolio/Portfolio'
import Contact from './contact/Contact'
import Notfound from './notfound/Notfound'

export default function App() {

  let routes = createBrowserRouter([
    {path:'/' , element:<Layoute></Layoute> , children:[
      {index:true , element:<Home></Home>},
      {path:'/about' , element:<About></About>},
      {path:'/portfolio' , element:<Portfolio></Portfolio>},
      {path:'/contact' , element:<Contact></Contact>},
      {path:'*' , element:<Notfound></Notfound>},
    ]}
  ])

  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}
