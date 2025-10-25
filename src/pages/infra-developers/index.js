import CallToAction from '@/components/callToAction'
import { LayoutOne } from '@/layouts'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CallToActionstyleTwo from "@/components/callToAction/callToActionstyleTwo";
import Banner from '@/components/banner/banner';
import {bg} from '../../../public/img/banner/banner-bg.jpg';
import ServiceItemThree from '@/components/service/serviceItemThree';
const categories = [
  { name: "Roads", icon: "bi-truck" },
  { name: "Bridges Culverts", icon: "bi-building" },
  { name: "Schools", icon: "bi-bank" },
  { name: "Colleges", icon: "bi-mortarboard" },
  { name: "Hospitals", icon: "bi-heart-pulse" },
  { name: "Railway Projects", icon: "bi-house-door" },
  { name: "Airport Projects", icon: "bi-gear" },
  { name: "Commercial Projects", icon: "bi-shop" },
  { name: "Airport Projects", icon: "bi-shop" },
];
function InfraDevelopers() {
  return (
    <div>
      <LayoutOne topbar={true} >
          <Banner
        title="Infra Developers"
        subtitle="Your Trusted Partner in Construction and Infrastructure Development"
        description="Partner with us for all your construction and infrastructure development needs—experience professionalism, dedication, and results like never before!"
        backgroundImage="/img/banner/banner-bg.jpg"
      />
        <Container className="pt-20 pb-40">
          
          <Row style={{alignItems: "center"}}>
            <Col xs={8}>
            <h4 className='pt-80'>Expertise You Can Rely On</h4>
            <p>Our team consists of experienced infrastructure developers who are committed to delivering exceptional projects that meet your needs. With a wealth of knowledge and a proven track record, we ensure that your vision is brought to life with precision.</p>
            <h4>Comprehensive Solutions for All Your Needs</h4>
            <p>From residential to commercial projects, we offer a wide range of construction services tailored to fit diverse requirements. Our extensive portfolio showcases our versatility and capability in handling various types of infrastructure development.</p>
            <h4>Quality That Speaks Volumes</h4>
            <p>We prioritize quality at every stage of the construction process. Our commitment to using top-grade materials and advanced techniques guarantees durability and excellence in every project, ensuring your investment stands the test of time.</p>
            </Col>
            <Col xs={4}>
              <img src={`/img/banner/banner-1.jpg`} />
            </Col>
          </Row >
             <Row className="pt-40" style={{alignItems: "center"}}>
              <Col xs={4}>
              <img src={`/img/banner/banner-1.jpg`} />
            </Col>
            <Col xs={8}>
            <h4>Your Vision, Our Mission</h4>
            <p>With our client-centric approach, we listen attentively to your goals and aspirations. We work collaboratively to transform your ideas into reality, creating functional spaces that enhance communities and elevate lifestyles.</p>
            <h4>Sustainable Practices for a Better Future</h4>
            <p>We understand the importance of sustainability in modern development. Our eco-friendly practices not only minimize environmental impact but also lead to cost savings for you. Together, we can build a healthier planet.</p>
            </Col>
            
          </Row>

          
         
        </Container>
        <Row>
            <Col xs={12}>
                <ServiceItemThree categories={categories} />
            </Col>
          </Row>
        <CallToActionstyleTwo />
        </LayoutOne>
    </div>
  )
}

export default InfraDevelopers
