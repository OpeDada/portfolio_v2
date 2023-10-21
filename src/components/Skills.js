import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
          <div className="skill-bx">
            <h2>
              Skills
            </h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quae eligendi qui natus, sapiente accusantium fuga architecto dolorem maiores quasi, vel quas officiis inventore! Omnis doloremque soluta impedit delectus corporis?</p>
          <Carousel responsive={responsive} infinite={true} className="skill-slider">
            <div className="item">
              <img src={""} alt="carousel" />
              <h5>Web Development</h5>
            </div>
            <div className="item">
              <img src={""} alt="carousel" />
              <h5>Web Development</h5>
            </div>
            <div className="item">
              <img src={""} alt="carousel" />
              <h5>Web Development</h5>
            </div>
            <div className="item">
              <img src={""} alt="carousel" />
              <h5>Web Development</h5>
            </div>
          </Carousel>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
};
