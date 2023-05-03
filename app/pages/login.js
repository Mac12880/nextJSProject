import LoginNavbar from '@/components/loginNavbar'
import SLoginNavbar from '@/components/sLoginNavbar'
import React, { useState } from 'react'

import { RxHamburgerMenu, RxCross1 } from "react-icons/rx"
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi"

const Login = () => {
  const [smallNavbar, setSmallNavbar] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)

  const handleSmallNavbar = () => {
    setSmallNavbar((currentState) => !currentState)
    console.log("clicked")
  }

  const handleShowNavbar = () => {
    setShowNavbar((currentState) => !currentState)
  }


  const Navbar = () => {
    if(smallNavbar === true){
      return <SLoginNavbar />
    }
    else{
      return <LoginNavbar />
    }
  }

  return (
    <div className='d-flex flex-direction-row justify-content-start'>
      {/* {smallNavbar ? <SLoginNavbar /> : <LoginNavbar />} */}
      {showNavbar && <Navbar/>}
      <div className='w-100 dashboard'>
        <div className='d-flex justify-content-between w-100 headerDashboard text-white align-items-center '>
          {showNavbar ? <RxCross1 className='headerDashboardIcon' onClick={handleShowNavbar}/> : <RxHamburgerMenu className='headerDashboardIcon' onClick={handleShowNavbar}/>}
          <b className='loginNavbarLogoText'>TAGPROS</b>
          {smallNavbar ? <BiArrowToRight className='headerDashboardIcon' onClick={handleSmallNavbar}/> : <BiArrowToLeft className='headerDashboardIcon' onClick={handleSmallNavbar}/>}
          
        </div>
        <h1 className='m-2 p-3'>Content</h1>
      </div>
      
    </div>
  )
}

export default Login