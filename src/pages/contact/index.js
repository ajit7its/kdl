import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";
import Contact from "@/components/contact";

function ContactUs() {
  return (
    <>
      <LayoutOne topbar={true} sectionSpace="pt-90">
        
<div class="pt-40 pb-20 section-title-area ltn__section-title-2--- text-center"><h6 class="section-subtitle section-subtitle-2 ltn__secondary-color">Questions ?</h6><h1 class="section-title">Contact Us</h1></div>

        <Contact />

        <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom">
          <Container>
            <Row>
              <Col xs={12} className="pt-120">
                <CallToAction />
              </Col>
            </Row>
          </Container>
        </div>
      </LayoutOne>
    </>
  );
}

export default ContactUs;
