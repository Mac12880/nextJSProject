import React, { useState } from 'react'
import { BsHouse } from "react-icons/bs"
import { AiOutlineDashboard } from "react-icons/ai"
import { IoDocumentsOutline, IoNewspaperOutline } from "react-icons/io5"
import { FiBook } from "react-icons/fi"
import { IoMdBook } from "react-icons/io"
import { HiOutlineMagnifyingGlass } from "react-icons/hi2"
import { Tooltip} from '@mui/material'
// import DeleteIcon from 'mui/icons-material/Delete'

const SLoginNavbar = () => {
    const [toggler, setToggler] = useState(false)

    const handleToggle = () => {
    setToggler((currentState) => !currentState)
    // console.log("clicked")
    }
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
            <div className='dropdown'>
                <button 
                className='d-flex align-items-center justify-content-center p-2 link-body-emphasis text-decoration-none dropdown-toggle border border-light bg-white'
                onClick={handleToggle}
                >
                <img src="/profile.jpg"
                className='rounded-circle me-2 loginProfilePic'>
                </img>
                {/* <strong>Marc</strong> */}
                </button>
                <ul className='dropdown-menu text-small shadow show sNavbarProfileDD'
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

export default SLoginNavbar