import { Route, createBrowserRouter, createRoutesFromElements,Outlet, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Signup } from './pages/Signup';
import { Signin } from './pages/Signin';
import { Header } from './components/Header';
import { PrivateRoute } from './components/PrivateRoute';
import { useDispatch } from 'react-redux';
import { loadUser } from './redux/ducks/auth';
import { AddSong } from './pages/AddSong';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Root = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadUser())
  }, [])

  return (
      <div className='main'>
          <Header/>
          <main>
              <Outlet />
          </main>
          <ToastContainer autoClose={1500} closeOnClick/>
      </div>

  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route element = {<PrivateRoute routeType={"private"}/>}>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/addsong' element={<AddSong/>}/>

        </Route> 
        <Route element = {<PrivateRoute routeType={"public"}/>}>
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
        </Route>
      </Route>

    </>
  )
)

  
function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}
export default App
