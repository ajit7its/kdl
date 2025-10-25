import CallToAction from '@/components/callToAction'
import { LayoutOne } from '@/layouts'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CallToActionstyleTwo from "@/components/callToAction/callToActionstyleTwo";
import Banner from '@/components/banner/banner';
import {bg} from '../../../public/img/banner/banner-bg.jpg';
import ServiceItemThree from '@/components/service/serviceItemThree';
const categories = [
  { name: "Farm Lands", icon: "bi-truck" },
  { name: "Farm Houses", icon: "bi-building" },
  { name: "Public Gardens", icon: "bi-bank" },
  { name: "Play Grounds", icon: "bi-mortarboard" },
  { name: "Resorts", icon: "bi-heart-pulse" },
  { name: "Land Fencing", icon: "bi-house-door" },
  { name: "Basement Works", icon: "bi-gear" },
  { name: "Barrigation Works", icon: "bi-shop" },
  { name: "Venture Development", icon: "bi-shop" },
  { name: "Sanoitory Works", icon: "bi-shop" },
  { name: "Power Supply Works", icon: "bi-shop" },
  { name: "Land Leveling", icon: "bi-shop" },
];
function EarthMovers() {
  return (
    <div>
      <LayoutOne topbar={true} >
          <Banner
        title="Earth Movers Services"
        subtitle="Your Reliable Partner for Professional Excavation and Earth Moving Solutions"
        description="Partner with us for all your construction and infrastructure development needs—experience professionalism, dedication, and results like never before!"
        backgroundImage="/img/banner/earth-bg.jpg"
      />
        <Container className="pt-20 pb-40">
          
          <Row style={{alignItems: "center"}}>
            <Col xs={8}>
            <h4 className='pt-80'>Expertise You Can Trust</h4>
            <p>Our team of highly skilled operators utilizes state-of-the-art machinery to ensure precision and efficiency in every project. With years of experience in the industry, we guarantee quality service that meets your specific needs.</p>
            <h4>Comprehensive Services Tailored to Your Needs</h4>
            <p>We offer a wide range of earth-moving services, from excavation and grading to site preparation and land clearing. No matter the size or complexity of your project, our versatile solutions are designed to tackle any challenge.</p>
            <h4>Timely and Cost-Effective Solutions</h4>
            <p>We understand the importance of deadlines. Our commitment to delivering fast and affordable services means you can stay on schedule without breaking the bank. We work efficiently to maximize your investment while minimizing downtime.</p>
            </Col>
            <Col xs={4}>
              <img src={`/img/banner/banner-1.jpg`} />
            </Col>
          </Row >         
         
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

export default EarthMovers;
