import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './about.css'

export default function About() {
  return (
    <div className="py-48 about">
      <h1 className="fw-bold fs-1 text-center">about component </h1>
      <div className="style mt-3">
        <div className="dash bg-slate-900 w-32 mx-2"></div>
        <i className="fa-solid fa-star"></i>
        <div className="dash bg-slate-900 w-32 mx-2"></div>
      </div>
      <Container>
        <Row>
          <Col md={6}>
            <div className="py-5">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="py-5">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
