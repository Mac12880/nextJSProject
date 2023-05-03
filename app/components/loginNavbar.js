import React, { useState } from 'react'
import { BsHouse } from "react-icons/bs"
import { AiOutlineDashboard } from "react-icons/ai"
import { IoDocumentsOutline, IoNewspaperOutline } from "react-icons/io5"
import { FiBook } from "react-icons/fi"
import { IoMdBook } from "react-icons/io"
import { HiOutlineMagnifyingGlass } from "react-icons/hi2"



const LoginNavbar = () => {
  const [toggler, setToggler] = useState(false)

  const handleToggle = () => {
    setToggler((currentState) => !currentState)
    // console.log("clicked")
  }
  return (
      <div className='loginNavbar navbarShadow d-flex flex-column flex-shrink-0 p-3'>
        <a href='/' className='d-flex justify-content-center  link-body-emphasis text-decoration-none'>
          <img className="loginNavbarLogo" src="/tagproslogo.png" alt="TAGPROS" />
          {/* <span className='loginNavbarLogoText text-black'>TAGPROS</span> */}
        </a>
        <hr />
        <ul className='nav nav-pills flex-column mb-auto'>
          <li className='nav-item'>
            <a href='#' className='nav-link link-body-emphasis text-black'>
              <BsHouse className='loginNavbarIcon bi pe-none me-2 ' />
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link link-body-emphasis text-black'>
              <AiOutlineDashboard className='loginNavbarIcon bi pe-none me-2' />
              Dashboard
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link link-body-emphasis text-black'>
              <IoDocumentsOutline className='loginNavbarIcon bi pe-none me-2' />
              Documents
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link link-body-emphasis text-black'>
              <FiBook className='loginNavbarIcon bi pe-none me-2' />
              Classes
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link link-body-emphasis text-black'>
              <IoMdBook className='loginNavbarIcon bi pe-none me-2' />
              My Classes
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link link-body-emphasis text-black'>
              <HiOutlineMagnifyingGlass className='loginNavbarIcon bi pe-none me-2' />
              Jobs
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link link-body-emphasis text-black'>
              <IoNewspaperOutline className='loginNavbarIcon bi pe-none me-2' />
              Job Applications
            </a>
          </li>
        </ul>
        <hr />
        <div className='dropdown'>
          <button 
          className='d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle text-black border border-light bg-white'
          onClick={handleToggle}
          >
            <img src="/profile.jpg"
            className='rounded-circle me-2 loginProfilePic'>
            </img>
            <strong>Marc</strong>
          </button>
          <ul className='dropdown-menu text-small shadow show navbarProfileDD'
          style={{
            display: toggler === false && 'none'
          }}
          data-popper-placement='top-start'>
            <li>
              <a className='dropdown-item' href='#'>Profile</a>
            </li>
            <li>
              <hr className='dropdown-divider' />
            </li>
            <li>
              <a className='dropdown-item' href='#'>Sign Out</a>
            </li>
          </ul>
        </div>
        <div className='b-example-divider b-example-vr'></div>
      </div>
  )
}

export default LoginNavbar