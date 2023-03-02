import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import "../Components/Styles/navbar.css";

const NavBar = () => {
  const [navbarBg, setNavbarBg] = useState(false);
  const location = useLocation();


  useEffect(() => {
    const changeNavbarBg = () => {
      if (window.scrollY >= 100) {
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };

    window.addEventListener("scroll", changeNavbarBg);
  }, [navbarBg]);

  return (
    <>
      <Navbar collapseOnSelect className={`navbar-dark ${location.pathname !== "/" ? "sticky-top" : "fixed-top"}`} expand="lg" id={`${(location.pathname !== "/" && "navbarBgScroll") || (navbarBg ? "navbarBgScroll" : "navbarBg")}`}>
        <Container>
          <Navbar.Brand className="py-3 d-flex justify-content-center align-items-center">
            <Link to={"/"}>
              <img
                alt="gct"
                src={require("../Assets/Images/logo-with-text.png")}
                width="70"
                height="30"
                className="shadow-lg align-top"
              />{' '}
            </Link>
            {/* <p>Genius</p> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto lead">
              <Nav.Link><Link to="/"><span id="myMenuItems">Home</span></Link></Nav.Link>
              <Nav.Link><Link to="/about"><span id="myMenuItems">About</span></Link></Nav.Link>
              <Nav.Link>
                <Dropdown className="d-lg-flex align-items-center justify-content-center">
                  <Dropdown.Toggle as="span" id="myMenuItems" className="cursor-pointer">
                    Courses
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item><Link className="px-3 text-decoration-none text-dark w-100" to="/courses/web-design">Web Design</Link></Dropdown.Item>
                    <Dropdown.Item><Link className="px-3 text-decoration-none text-dark w-100" to="/courses/web-development">Web Development</Link></Dropdown.Item>
                    <Dropdown.Item><Link className="px-3 text-decoration-none text-dark w-100" to="/courses/software-development">Software Development</Link></Dropdown.Item>
                    {/*<Dropdown.Item><Link className="px-3 text-decoration-none text-dark w-100" to="/courses/reactjs">ReactJS(Framework)</Link></Dropdown.Item> */}
                    <Dropdown.Item><Link className="px-3 text-decoration-none text-dark w-100" to="/courses">All Courses</Link></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mx-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar> */}
    </>
  );
};

export default NavBar;