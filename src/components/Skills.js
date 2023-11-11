import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/images/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
              <h2>Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
                    alt="carousel"
                  />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgnL9jZgMNaHVvVbppBGJUNcgnVwAMTWKFVBygOCvV2GIWiSIl8gbrBK2hTatbA7WxoZQ&usqp=CAU"
                    alt="carousel"
                  />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img
                    src="https://thequantuminsider.com/wp-content/uploads/github.png"
                    alt="carousel"
                  />

                  <h5>Github</h5>
                </div>
                <div className="item">
                  <img
                    src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/Next.js%20Series%20-%20Event%20icon-01.png"
                    alt="carousel"
                  />
                  <h5>NextJS</h5>
                </div>
                <div className="item">
                  <img
                    src="https://static-00.iconduck.com/assets.00/sql-icon-2048x2028-ow2ma2t9.png"
                    alt="carousel"
                  />
                  <h5>SQL</h5>
                </div>

                <div className="item">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png"
                    alt="carousel"
                  />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_2dfsPeW1sL0lDikNWEnlRvo1-k-KtEVp39aUTc9hzzDlbgj-ZhxRVXkK2p1tGCevIkY&usqp=CAU"
                    alt="carousel"
                  />
                  <h5>CSS</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="bg-img" />
    </section>
  );
};
