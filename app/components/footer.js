import React from 'react'

const Footer = () => {
  return (
    // <div className='d-flex p-5 footer justify-content-center align-items-center flex-direction-row'>
    //     <div className='footerGrid'>
    //         <b className='navbarLogoText'>TAGPROS</b>
    //         <a href="#">Back to top</a>
    //     </div>
    // </div>
    <div className='container'>
        <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top text-secondary'>
            <p className='col-md-4 mb-0 text-body-secondary'>© 2023 Company, Inc</p>
            <a href='/' className='col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none'>
                <img className="loginNavbarLogo bi me-2" src="/tagproslogo.png" alt="TAGPROS" />
            </a>
            <ul className='nav col-md-4 justify-content-end text-decoration-none'>
                <li>
                    <a href='#' className='nav-link px-2 text-secondary'>
                    Home
                    </a>
                </li>
            </ul>
        </footer>
    </div>
  )
}

export default Footer