import CallToAction from '@/components/callToAction'
import { LayoutOne } from '@/layouts'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CallToActionstyleTwo from "@/components/callToAction/callToActionstyleTwo";
import Banner from '@/components/banner/banner';
import {bg} from '../../../public/img/banner/banner-bg.jpg';
import ServiceItemThree from '@/components/service/serviceItemThree';
const categories = [
  { name: "Living Room Design", icon: "bi-truck" },
  { name: "Modular Kitchens", icon: "bi-building" },
  { name: "False Ceiling", icon: "bi-bank" },
  { name: "Home Renovation", icon: "bi-mortarboard" },
  { name: "Wardrobe Solutions", icon: "bi-heart-pulse" },
  { name: "Office Interior", icon: "bi-heart-pulse" },
  { name: "Restaurant Interior", icon: "bi-heart-pulse" },
  { name: "Boutique Interior", icon: "bi-heart-pulse" },
];
function EarthMovers() {
  return (
    <div>
      <LayoutOne topbar={true} >
          <Banner
        title="Creating Stunning Interiors That Inspire"
        subtitle="Transform Your Space with Expert Interior Design"
        description="Partner with us for all your construction and infrastructure development needs—experience professionalism, dedication, and results like never before!"
        backgroundImage="/img/banner/interior-designing.jpg"
      />
        <Container className="pt-20 pb-40">
          
          <Row style={{alignItems: "center"}}>
            <Col xs={8}>
            <h4 className='pt-80'>Overwhelmed by Design Choices?</h4>
            <p>In a world of endless options, finding the right design for your home or business can feel daunting. The pressure to make every choice perfect can lead to stress and confusion, leaving you feeling lost in a sea of styles and trends.</p>
            <h4>Agitation: Don't Settle for Mediocre Spaces</h4>
            <p>A poorly designed space can impact your mood, productivity, and even your social life. Imagine walking into a room that doesn’t reflect your personality or meet your functional needs—it can be disheartening. You deserve a space that elevates your everyday experience and leaves a lasting impression on guests.</p>
            <h4>Solution: Partner with Our Expert Interior Designers</h4>
            <p>At KDL Developers & Constructions, we specialize in creating beautiful, functional spaces tailored to your unique style and requirements. Our team of skilled interior designers is here to take the stress out of the process and bring your vision to life.</p>
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
