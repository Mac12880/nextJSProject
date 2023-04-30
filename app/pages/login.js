import React from 'react'
import { CiHome } from "react-icons/ci"

const Login = () => {
  return (
    <div className='d-flex flex-direction-row justify-content-start'>
      <div className='loginNavbar d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary'>
        <a href='/' className='d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none'>
          <img className="loginNavbarLogo" src="/tagproslogo.png" alt="TAGPROS" />
          <span className='loginNavbarLogoText'>TAGPROS</span>
        </a>
        <hr />
        <ul className='nav nav-pills flex-column mb-auto'>
          <li className='nav-item'>
            <a href='#' className='nav-link link-body-emphasis'>
              <CiHome className='loginNavbarIcon bi pe-none me-2' />
              " Home "
            </a>
          </li>
        </ul>
      </div>
    
    </div>
  )
}

export default Login