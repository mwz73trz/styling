import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/teams">Teams</Nav.Link>
              <Nav.Link href="/players">Players</Nav.Link>
              <Nav.Link href="/dropdownlist">Dropdown List</Nav.Link>
              <Nav.Link href="/accordion">Accordion</Nav.Link>
              <Nav.Link href="/modal">Modal</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
