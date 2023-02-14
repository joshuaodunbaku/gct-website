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
                    {/* <Dropdown.Item><Link className="px-3 text-decoration-none text-dark w-100" to="/courses/javascript">Javascript</Link></Dropdown.Item>
                    <Dropdown.Item><Link className="px-3 text-decoration-none text-dark w-100" to="/courses/bootstrap">BOOTSTRAP(Framework)</Link></Dropdown.Item>
                    <Dropdown.Item><Link className="px-3 text-decoration-none text-dark w-100" to="/courses/reactjs">ReactJS(Framework)</Link></Dropdown.Item> */}
                    <Dropdown.Item><Link className="px-3 text-decoration-none text-dark w-100" to="courses">All Courses</Link></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>

              <Nav.Link>
                <Dropdown className="d-lg-flex align-items-center justify-content-center">
                  <Dropdown.Toggle as="span" id="myMenuItems">
                    Industrial Training
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/industrial-traiing/bca-students">BCA Students</Dropdown.Item>
                    <Dropdown.Item href="/industrial-traiing/mca-students">MCA Students</Dropdown.Item>
                    <Dropdown.Item href="/industrial-traiing/it-students">BSC(IT) Students</Dropdown.Item>
                    <Dropdown.Item href="/industrial-traiing/cs-students">B.Tech (CS) Students</Dropdown.Item>
                    <Dropdown.Item href="/industrial-traiing/electrical-student">B.Tech Electrical Students</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>

              <Nav.Link><Link to="/reviews"><span id="myMenuItems">Reviews</span></Link></Nav.Link>

              {/* <NavDropdown bg="transparent" title="Dropdown" className="fs-5" id="basic-nav-dropdown myMenuItems">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
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
      {/* 
        <Navbar
          className="border shadow-sm border-bottom-2 ps-3 pe-3"
          collapseOnSelect
          expand="lg"
          variant="light"
        >
          <Navbar.Brand href="/" style={{ fontFamily: "AmetheystBoldItalic" }}>
            <img
              alt=""
              src={logo}
              height="30"
              className="d-inline-block align-top outline-light"
              style={{
                boxShadow: `0 2px 5px 0  
                        rgba(255, 255, 255, 0.5), 0  
                        2px 10px 0 rgba(255, 255, 255, 1)`,
              }}
            />{" "}
            InvenTree
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ms-auto">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>

              <NavDropdown title="Views" className="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <NavLink className="dropdown-item" to="/items">
                    Items
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink className="dropdown-item" to="/store/production">
                    Production
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>

              {authUser && (
                <NavLink className="nav-link" to="/customers">
                  Customers
                </NavLink>
              )}

              {authUser && (
                <NavDropdown title="Store" className="collasible-nav-dropdown">
                  <NavDropdown.Item>
                    <NavLink className="dropdown-item" to="/store/sales">
                      Sales
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink className="dropdown-item" to="/store/production">
                      Production
                    </NavLink>
                  </NavDropdown.Item>
                </NavDropdown>
              )}

              {authUser && (
                <NavDropdown
                  title="Transactions"
                  className="collasible-nav-dropdown"
                >
                  <NavDropdown.Item>
                    <NavLink className="dropdown-item" to="/transactions/sales">
                      Sales
                    </NavLink>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavLink
                      className="dropdown-item"
                      to="/transactions/services"
                    >
                      Services
                    </NavLink>
                  </NavDropdown.Item>
                </NavDropdown>
              )}

              {authUser && (
                <NavLink className="nav-link" to="/production">
                  Production
                </NavLink>
              )}

              {authUser && (
                <NavLink className="nav-link" to="/dashboard">
                  Dashboard
                </NavLink>
              )}

              <NavLink className="nav-link" to="/home">
                FAQ
              </NavLink>
            </Nav>
            <Form inline>
              {authUser && (
                <FormLabel
                  className="me-5"
                  style={{ fontFamily: "AmetheystBoldItalic" }}
                >
                  {authUser.userName}
                </FormLabel>
              )}

              {!authUser && (
                <Button
                  className="btn btn-outline-dark btn-lg"
                  variant="outline-primary"
                  onClick={() => login("/login")}
                >
                  Sign In
                </Button>
              )}

              {authUser && (
                <Button
                  role="button"
                  className="btn btn-outline-dark btn-lg"
                  variant="outline-primary"
                  onClick={() => LogOut()}
                >
                  Sign Out
                </Button>
              )}
            </Form>
          </Navbar.Collapse>
        </Navbar> */}

      <Outlet />
    </>
  );
};

export default NavBar;