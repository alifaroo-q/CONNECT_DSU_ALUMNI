/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { Registration } from './components/Registration'
import { ForgotPassword } from './components/ForgotPassword'
import { UpdatePassword } from './components/UpdatePassword'
import { Login } from './components/Login'
//import {login} from './components/Login'
import { toAbsoluteUrl } from '../../../_metronic/helpers'
import logo from '../../pages/alumni/assets/logo.png'
import home from '../../pages/alumni/assets/home.png'
//import {Step1} from './components/Register/wizards/components/steps/Step1'
//import {Step1} from './components/Step1'
// import {Step1} from './components/Register/wizards/components/steps/Step1'
//import { Vertical } from '../wizards/components/Vertical'
import { Vertical } from './components/Register/wizards/components/Vertical'
import Home from '../../pages/Home/home'
const AuthLayout = () => {
  useEffect(() => {
    document.body.classList.add('bg-body')
    return () => {
      document.body.classList.remove('bg-body')
    }
  }, [])

  return (
    // <>
    //    <Outlet />
    
    // </>
    <div
      className='d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed'
      style={{
        backgroundImage: `url(${home})`,
      }}
    >
      {/* begin::Content */}
      <div className='d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20'>
        {/* begin::Logo */}
        <a href='#' className='mb-12'>
          <img alt='Logo' src={logo} className='h-100px' />
        </a>
        {/* end::Logo */}
        {/* begin::Wrapper */}
        <div className=' bg-body rounded shadow-sm p-10 p-lg-15 mx-auto '>
          <Outlet />
        </div>
        {/* end::Wrapper */}
      </div>
      {/* begin::Footer */}
   
      {/* end::Footer */}
    </div>
  )
}

const AuthPage = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      {/* <Route path='home' element={<Home />} /> */}
      <Route path='login' element={<Login />} />
      <Route path='registration' element={<Vertical />} />
      <Route path='forgot-password' element={<ForgotPassword />} />
      <Route path='forgot-password-create' element={<UpdatePassword />} />
      <Route index element={<Login />} />
    </Route>
  </Routes>
)

export { AuthPage }
