import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
    <div style={{ background: 'lightGrey' }}>
      <Nav className="justify-content-center " activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <p className="text-center m-0 pb-1">Or right-aligned</p>
    </div>
  );
}

export default Footer;
