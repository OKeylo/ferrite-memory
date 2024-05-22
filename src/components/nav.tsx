import { Nav } from "react-bootstrap";

export default function Navigation() {
  function handleMovTo(selectedKey: string) {
    const element = document.getElementById(selectedKey) as HTMLElement;
    let elDistanceToTop = window.scrollY + element.getBoundingClientRect().top

    scrollTo({
      top: elDistanceToTop - 60,
      left: 0,
      behavior: "smooth"
    });
  }

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
        onSelect={(selectedKey) => handleMovTo(selectedKey as string)}
      >
        <Nav.Item style={{paddingLeft: 16}}>
          <h4>В этой статье</h4>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="sidebar-li"
            eventKey={"start"}
          >
            Введение
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="sidebarr">
          <Nav.Link
            className="sidebar-li"
            eventKey={"development"}
          >
            Разработка
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="sidebar-li"
            eventKey={"principle-of-operation"}
          >
            Принцип работы
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="sidebar-li"
            eventKey={"flaws"}
          >
            Недостатки
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className="sidebar-li"
            eventKey={"museum"}
          >
            Музей ПГНИУ
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </nav>
  )
}