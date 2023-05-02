import LoginNavbar from '@/components/loginNavbar'
import React, { useState } from 'react'
// import { BsHouse } from "react-icons/bs"
// import { AiOutlineDashboard } from "react-icons/ai"
// import { IoDocumentsOutline, IoNewspaperOutline } from "react-icons/io5"
// import { FiBook } from "react-icons/fi"
// import { IoMdBook } from "react-icons/io"
// import { HiOutlineMagnifyingGlass } from "react-icons/hi2"


const Login = () => {
  const [SmallNavbar, setSmallNavbar] = useState(false)
  
  return (
    <div className='d-flex flex-direction-row justify-content-start'>
      <LoginNavbar />
      
      

      
      <h1></h1>
    </div>
  )
}

export default Login