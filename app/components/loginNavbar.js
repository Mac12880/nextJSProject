import React, { useState } from 'react'
import { BsHouse } from "react-icons/bs"
import { AiOutlineDashboard } from "react-icons/ai"
import { IoDocumentsOutline, IoNewspaperOutline } from "react-icons/io5"
import { FiBook } from "react-icons/fi"
import { IoMdBook } from "react-icons/io"
import { HiOutlineMagnifyingGlass } from "react-icons/hi2"
import { Tooltip} from '@mui/material'
// import DeleteIcon from 'mui/icons-material/Delete'
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi"

const Navbar = () => {
    const [smallNavbar, setSmallNavbar] = useState(true)

    const handleSmallNavbar = () => {
    setSmallNavbar((currentState) => !currentState)
    console.log("clicked")
    }

    const SLoginNavbar = () => {
      return (
          <div className='sloginNavbar navbarShadow d-flex flex-column flex-shrink-0'>
              <Tooltip title="TAGPROS" placement="right" arrow>
                  <a href='/' className='d-flex justify-content-center py-3 px-0 link-body-emphasis text-decoration-none'
                  data-bs-toggle='tooltip' data-bs-placement='right' data-bs-original-title='TAGPROS'>
                      <img className="loginNavbarLogo" src="/tagproslogo.png" alt="TAGPROS" />
                  </a>
              </Tooltip>
              <hr className='m-0' />
              <ul className='nav nav-pills flex-column mb-auto'>
                  <li className='nav-item'>
                      <Tooltip title="Home" placement="right" arrow>
                      <a href='#' className='nav-link border-bottom py-2 px-0 rounded-0 d-flex justify-content-center'>
                          <BsHouse className='sloginNavbarIcon bi pe-none text-black' />
                      </a>
                      </Tooltip>
                  </li>
                  <li className='nav-item'>
                      <Tooltip title="Dashboard" placement="right" arrow>
                      <a href='#' className='nav-link border-bottom py-2 px-0 rounded-0 d-flex justify-content-center'>
                          <AiOutlineDashboard className='sloginNavbarIcon bi pe-none text-black' />
                      </a>
                      </Tooltip>
                  </li>
                  <li className='nav-item'>
                      <Tooltip title="Documents" placement="right" arrow>
                      <a href='#' className='nav-link border-bottom py-2 px-0 rounded-0 d-flex justify-content-center'>
                          <IoDocumentsOutline className='sloginNavbarIcon bi pe-none text-black' />
                      </a>
                      </Tooltip>
                  </li>
                  <li className='nav-item'>
                      <Tooltip title="Classes" placement="right" arrow>
                      <a href='#' className='nav-link border-bottom py-2 px-0 rounded-0 d-flex justify-content-center'>
                          <FiBook className='sloginNavbarIcon bi pe-none text-black' />
                      </a>
                      </Tooltip>
                  </li>
                  <li className='nav-item'>
                      <Tooltip title="My Classes" placement="right" arrow>
                      <a href='#' className='nav-link border-bottom py-2 px-0 rounded-0 d-flex justify-content-center'>
                          <IoMdBook className='sloginNavbarIcon bi pe-none text-black' />
                      </a>
                      </Tooltip>
                  </li>
                  <li className='nav-item'>
                      <Tooltip title="Jobs" placement="right" arrow>
                      <a href='#' className='nav-link border-bottom py-2 px-0 rounded-0 d-flex justify-content-center'>
                          <HiOutlineMagnifyingGlass className='sloginNavbarIcon bi pe-none text-black' />
                      </a>
                      </Tooltip>
                  </li>
                  <li className='nav-item'>
                      <Tooltip title="Job Applications" placement="right" arrow>
                      <a href='#' className='nav-link border-bottom py-2 px-0 rounded-0 d-flex justify-content-center'>
                          <IoNewspaperOutline className='sloginNavbarIcon bi pe-none text-black' />
                      </a>
                      </Tooltip>
                  </li>
              </ul>
              <hr className='m-0'/>
              <div className='d-flex justify-content-center m-3 mb-4'>
                  <BiArrowToRight className='headerDashboardIcon' onClick={handleSmallNavbar}/>
              </div>
              
          </div>
      )
      }


      const LoginNavbar = () => {
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
              <div className='d-flex justify-content-center'>
              <BiArrowToLeft className='headerDashboardIcon m-1 ' onClick={handleSmallNavbar}/>
              </div>
            </div>
        )
      }



    return (
        // {smallNavbar ? <SLoginNavbar /> : <LoginNavbar />}
        <>
            {smallNavbar ? <SLoginNavbar /> : <LoginNavbar />}
        </>
    )
}

export default Navbar