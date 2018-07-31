import React from 'react';
import {Nav, Navbar, NavDropdown, MenuItem, NavItem} from 'react-bootstrap';

const NavInstance = () => (
	<Navbar inverse collapseOnSelect>
		<Navbar.Header>
			<Navbar.Brand>
				<a href="/">Home</a>
			</Navbar.Brand>
			<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
			<Nav>
				<NavItem eventKey={2} href="/study-notes">
        Study Notes
				</NavItem>
				<NavItem eventKey={2} href="/video-tutorial">
        Study Videos
				</NavItem>
				<NavDropdown eventKey={3} title="Exam" id="basic-nav-dropdown">
					<MenuItem eventKey={3.1}>Banks</MenuItem>
					<MenuItem eventKey={3.2}>Railway</MenuItem>
					<MenuItem eventKey={3.3}>UPSC</MenuItem>
					<MenuItem eventKey={3.3}>Teaching</MenuItem>
				</NavDropdown>
				<NavItem eventKey={2} href="/news">
        News
				</NavItem>
				<NavItem eventKey={2} href="/interview">
        Interview
				</NavItem>
			</Nav>
			<Nav pullRight>
				<NavItem eventKey={1} href="/about-us">
        About Us
				</NavItem>
				<NavItem eventKey={2} href="contact-us">
        Contact Us
				</NavItem>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);

export default NavInstance;