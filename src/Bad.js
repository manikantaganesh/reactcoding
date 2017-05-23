import React, {Component} from 'react';
import {
  Grid,
  Navbar,
  Nav,
  NavItem,
  Jumbotron,
  Button
} from 'react-bootstrap';



class Bad extends Component
{
	render()
	{
		return <div>
		<Navbar >
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Coding Sastra</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
              <NavItem href="/home">
              Home
              </NavItem>
              <NavItem href="/Aboutus">
              Aboutus
              </NavItem>
              <NavItem href="/services">
              Services
              </NavItem>
              <NavItem href="/Contact">
              Contact us
              </NavItem>
              <NavItem href="/Coursereg">
              Course Registration
              </NavItem>
                <NavItem href="/login">
                  Login
                </NavItem>
                <NavItem href="/Signup">
                  Signup
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Grid>
        </Navbar>
		</div>;
	}
}
	export default Bad;
