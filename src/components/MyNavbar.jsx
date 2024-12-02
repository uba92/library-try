import { Navbar, Container, Nav, Button } from 'react-bootstrap'

const MyNavbar = () => {
  return (
    <Navbar expand='lg' data-bs-theme='dark' bg='dark' className='p-2'>
      <Container fluid>
        <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />

        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#'>Home</Nav.Link>
            <Nav.Link href='#'>About</Nav.Link>
            <Nav.Link href='#'>Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Button variant='dark' className='rounded-circle'>
        <i class='fas fa-user-alt'></i>
      </Button>
    </Navbar>
  )
}

export default MyNavbar
