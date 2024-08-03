import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from './poert1.png'
import img2 from './port2.png'
import img3 from './port3.png'
import './potfolio.css'
export default function Portfolio() {
  return (
    <div className="py-7">
      <h1 className="fw-bold fs-1 text-center">portfolio component</h1>
      <div className="style mt-3">
        <div className="dash bg-slate-900 w-36 mx-2"></div>
        <i className="fa-solid fa-star"></i>
        <div className="dash bg-slate-900 w-36 mx-2"></div>
      </div>
      <Container className="py-5 ">
        <Row className="gap-y-5">
          <Col md={6} lg={4} >
          <div className="portfolio">
            <img className="rounded-lg" src={img1} alt="img" />
            <div className="layer">
            <i className="fa-solid fa-plus  text-white"></i>
            </div>
          </div>
          </Col>
          <Col md={6} lg={4} >
          <div className="portfolio">
            <img className="rounded-lg" src={img2} alt="img" />
            <div className="layer">
            <i className="fa-solid fa-plus  text-white"></i>
            </div>
          </div>
          </Col>
          <Col md={6} lg={4} >
          <div className="portfolio">
            <img className="rounded-lg" src={img3} alt="img" />
            <div className="layer">
            <i className="fa-solid fa-plus  text-white"></i>
            </div>
          </div>
          </Col>
          <Col md={6} lg={4} >
          <div className="portfolio">
            <img className="rounded-lg" src={img1} alt="img" />
            <div className="layer">
            <i className="fa-solid fa-plus  text-white"></i>
            </div>
          </div>
          </Col>
          <Col md={6} lg={4} >
          <div className="portfolio">
            <img className="rounded-lg" src={img2} alt="img" />
            <div className="layer">
            <i className="fa-solid fa-plus  text-white"></i>
            </div>
          </div>
          </Col>
          <Col md={6} lg={4} >
          <div className="portfolio">
            <img className="rounded-lg" src={img3} alt="img" />
            <div className="layer">
            <i className="fa-solid fa-plus  text-white"></i>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
