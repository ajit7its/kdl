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
function LandDevelopers() {
  return (
    <div>
      <LayoutOne topbar={true} >
          <Banner
        title="Land Developers"
        subtitle="Your Trusted Partner in Construction and Infrastructure Development"
        description="Partner with us for all your construction and infrastructure development needs—experience professionalism, dedication, and results like never before!"
        backgroundImage="/img/banner/land-development.jpg"
      />
        <Container className="pt-20 pb-40">
          
          <Row style={{alignItems: "center"}}>
            <Col xs={8}>
            <h4 className='pt-80'>The Problem: Navigating Complex Land Development</h4>
            <p>Are you feeling overwhelmed by the intricacies of land development? From zoning regulations to environmental assessments, the process can be daunting and fraught with challenges.</p>
            <h4>Agitate: The Cost of Inexperience</h4>
            <p>Without a trusted partner, navigating these complexities can lead to costly delays, frustrating setbacks, and missed opportunities. Your dream project could turn into a nightmare if you don’t have the right expertise by your side.</p>
            <h4>The Solution: LAND DEVELOPERS – Your Trusted Partner in Success</h4>
            <p></p>
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

export default LandDevelopers;
