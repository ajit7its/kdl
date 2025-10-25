import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

const callToActionstyleTwo = () => {
  return (
    <>
      <div
        className="ltn__call-to-action-area ltn__call-to-action-4 bg-image pt-115 pb-120"
        style={{ backgroundImage: `url("../img/bg/6.jpg")` }}
      >
        <Container>
          <Row>
            <Col xs={12}>
              <div className="call-to-action-inner call-to-action-inner-4 text-center">
                <div className="section-title-area ltn__section-title-2">
                  <h1 className="section-subtitle ltn__secondary-color">Let’s Build Together!</h1>
                  <a style={{fontSize: "3.5rem",fontWeight: "900", color: "#fff" }} href="tel:+917386105564" >73861-05564</a>
                </div>
                <div className="btn-wrapper">
                  <Link
                    href="/contact"
                    className="btn btn-transparent btn-effect-3 white-color"
                  >
                    CONTACT US
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="ltn__call-to-4-img-2">
          <img src="/img/bg/11.png" alt="#" />
        </div>
      </div>
    </>
  );
};

export default callToActionstyleTwo;
