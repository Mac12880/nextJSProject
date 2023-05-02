import LoginNavbar from '@/components/loginNavbar'
import SLoginNavbar from '@/components/sLoginNavbar'
import React, { useState } from 'react'

import { RxHamburgerMenu } from "react-icons/rx"
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi"

const Login = () => {
  const [smallNavbar, setSmallNavbar] = useState(true)

  const handleSmallNavbar = () => {
    setSmallNavbar((currentState) => !currentState)
    console.log("clicked")
  }

  return (
    <div className='d-flex flex-direction-row justify-content-start'>
      {/* <Navbar /> */}
      {smallNavbar ? (<SLoginNavbar />) : (<LoginNavbar />)}
      <div className='w-100 dashboard'>
        <div className='d-flex w-100 headerDashboard text-white'>
          <RxHamburgerMenu className='sloginNavbarIcon'/>
          <BiArrowToLeft className='sloginNavbarIcon'/>
        </div>
        <h1 className='m-2 p-3'>Content</h1>
      </div>
      
    </div>
  )
}

export default Login