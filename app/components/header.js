import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useRouter } from 'next/router'
import { mainMenu as menuLinks, site} from '../config'
// import { useNavigate } from 'react-router-dom'

import  Link  from 'next/link'



const MenuItem = ({title, path, subMenu, id, button}) => {
  // const navigate = useNavigate()

  // const navigateToLogin = (path) => {
  //   navigate(path)
  // }

  const router = useRouter()
  if(subMenu){
    const activeChild = subMenu.find((item) => {
      if(router.pathname === item.path){
        return true
      }
      return false
    })
    return(
    <NavDropdown title={title} id={`nav-dropdown-${id}`} active={activeChild}>
      {subMenu.map((item, index) => {
        return(<DropdownItem {...item} key={index} />)
      })}
    </NavDropdown>
    )
  }

  if(button){
    if(title === "Login"){
        return (
          <Link href={path} passHref>
            <button className="btn btn-outline-success navButton float-right">{title}</button>
          </Link>
        )
    }
    return (
      <Link href={path} passHref>
        <button className="btn btn-outline-secondary navButton float-right" href={path}>{title}</button>
      </Link>
    )
  }
    return(
      <Nav.Link active={router.pathname === path} href={path}>{title}</Nav.Link>
    
    )
}

const DropdownItem = ({title, path, divider}) => {
  const router = useRouter()
  if(divider){
    return(
      <NavDropdown.Divider />
    )
  }

  return (
    <NavDropdown.Item active={router.pathname === path} href={path}>{title}</NavDropdown.Item>
  )
}

const Header = () => {
    return(
    <>
        <Navbar bg="light" expand="lg" className='navbar'>
            <Container fluid className='justify-content-center'>
            {/* <Navbar.Brand href="/">{site.title}</Navbar.Brand> */}
            <div className='navbarGrid'>
                <img className="navbarLogo" src="/tagproslogo.png" alt="T A G P R O S" />
                <b className='navbarLogoText'>TAGPROS</b>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="d-flex justify-content-end w-100">
                    {menuLinks.map((item, index) => {
                        return(<MenuItem {...item} key={index}></MenuItem>)
                    })}
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        <hr className='navbarHR' />
    </>
    )
}


export default Header