import CallToAction from '@/components/callToAction'
import { LayoutOne } from '@/layouts'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CallToActionstyleTwo from "@/components/callToAction/callToActionstyleTwo";
import Banner from '@/components/banner/banner';
import {bg} from '../../../public/img/banner/banner-bg.jpg';
import ServiceItemThree from '@/components/service/serviceItemThree';
const categories = [
  { name: "Independent Houses", icon: "bi-truck" },
  { name: "Commercial Buildings", icon: "bi-building" },
  { name: "Residentials Apartments", icon: "bi-bank" },
  { name: "Duplex Villas", icon: "bi-mortarboard" },
  { name: "High Rise Apartments", icon: "bi-heart-pulse" },
  { name: "Hotel Projects", icon: "bi-house-door" },
  { name: "Corporate Offices", icon: "bi-gear" },
  { name: "Cold Storages", icon: "bi-shop" },
  { name: "Ware Houses", icon: "bi-shop" },
  { name: "Shopping Malls", icon: "bi-shop" },
  { name: "Godowns", icon: "bi-shop" },
  { name: "Public Buildings", icon: "bi-shop" },
];
function InfraDevelopers() {
  return (
    <div>
      <LayoutOne topbar={true} >
          <Banner
        title="Constructions"
        subtitle="Your Trusted Partner in Construction and Infrastructure Development"
        description="Partner with us for all your construction and infrastructure development needs—experience professionalism, dedication, and results like never before!"
        backgroundImage="/img/banner/constructions-bg.jpg"
      />
        <Container className="pt-20 pb-40">
          
          <Row style={{alignItems: "center"}}>
            <Col xs={8}>
            <h4 className='pt-80'>Your Dream Space Awaits—Let’s Get Started!</h4>
            <p>Don’t let indecision hold you back any longer. Contact us today for a consultation, and let’s transform your space into something truly extraordinary!</p>
            <p>KDL Developers stands out as a premier choice in the construction industry, where quality and innovation are paramount. With a robust portfolio showcasing a diverse range of projects, KDL Developers consistently demonstrates an unwavering commitment to excellence in construction. Their team of skilled professionals leverages cutting-edge techniques and sustainable practices to ensure that every project not only meets but exceeds client expectations.</p>
            <p>By choosing KDL Developers, you’re not just hiring a construction company; you’re partnering with experts who prioritize transparency and collaboration throughout the building process. From residential buildings to commercial spaces, their meticulous attention to detail guarantees that each structure is built to last. With KDL Developers, you can trust that your vision will be transformed into reality with precision and care. Embrace the future of construction—choose KDL Developers for your next project!</p>
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

export default InfraDevelopers
