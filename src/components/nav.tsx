import { Nav } from "react-bootstrap";

export default function Navigation() {

  return (
    <nav>
      <Nav
        style={{
          display: "flex",
          flexDirection: "column",
          position: "sticky",
          top: "15%",
          padding: "24px 50px 24px 16px",
          alignItems: "flex-start",
          borderRadius: "4px",
        }}
      >
        <Nav.Item style={{paddingLeft: 16}}>
          <h4>В этой статье</h4>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="sidebar-li"
            href="#start"
          >
            Начало
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="sidebarr">
          <Nav.Link
            className="sidebar-li"
            href="#development"
          >
            Разработка
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="sidebar-li"
            href="#principle-of-operation"
          >
            Принцип работы
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="sidebar-li"
            href="#flaws"
          >
            Недостатки
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </nav>
  )
}