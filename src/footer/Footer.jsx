
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './footer.css'

export default function footer() {
  return (
    <footer className=' text-white bg-slate-800 text-center'>
       <Container className=' p-5'>
      <Row>
        <Col md={4}>
        <div className='py-3'>
          <h2 className='fs-3 fw-bold py-2'>LOCATION</h2>
          <h3 className='py-2'>2245aniel Drive</h3>
          <p className='py-2'>Clark, MO 65243</p>
        </div>
        </Col>
        <Col md={4}>
        <div className='py-3'>
          <h2 className='fs-3 fw-bold py-2'>AROUND THE WEB</h2>
          <div className="icons-footer">
          <i className="fa-brands fa-facebook mx-1"></i>
          <i className="fa-brands fa-twitter mx-1"></i>
          <i className="fa-brands fa-linkedin mx-1"></i>
          <i className="fa-solid fa-globe mx-1"></i>
          </div>
        </div>
        </Col>
        <Col md={4}>
        <div className='py-3'>
          <h2 className='fs-3 fw-bold py-2'>ABOUT FREELANCER</h2>
          <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
        </Col>
      </Row>
      </Container>
      <div className='p-8 bg-slate-700 text-white'>
        <p>Copyright © Your Website 2021</p>
      </div>
    </footer>
  )
}
