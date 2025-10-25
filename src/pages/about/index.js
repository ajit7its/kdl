import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";
import { getProducts, productSlug } from "@/lib/product";
import TitleSection from "@/components/titleSection";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import TestimonialCarouselItem from "@/components/testimonialCarousel";
import testimonialData from "@/data/testimonial";
import BlogItem from "@/components/blog";
import blogData from "@/data/blog";
import CallToAction from "@/components/callToAction";
import AboutUsStyleOne from "@/components/aboutUs/aboutUsStyleOne";
import Feature from "@/components/features";
import featureData from "@/data/service"
import TeamItem from "@/components/team";
import TeamData from '@/data/team';
import Timeline from "../timeline/Timeline";

function AboutUs() {
  const agents = getProducts(TeamData, "buying", "featured", 3);
  const featureDataSorted = getProducts(featureData, "buying", "featured", 3);

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" +
        (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <FaArrowLeft />
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <FaArrowRight />
    </button>
  );

  const testiMonialsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  const blogSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  return (
    <>
      <LayoutOne topbar={true}>

        <Container className="pt-20">
          <Row>
            <Col xs={12}>
            <div class="pb-10 section-title-area ltn__section-title-2--- text-center"><h6 class="section-subtitle section-subtitle-2 ltn__secondary-color">Who We Are</h6><h1 class="section-title">About Us</h1></div>
            <h2 className="pb-150 secondary-title-color text-center">Building Dreams Through Expert Infrastructure Development</h2>
            </Col>
          </Row>
          <Row style={{alignItems: "center"}}>
            <Col xs={8}>
            <h4>Who We Are</h4>
            <p>At KDL Developers & Constructions, we specialize in construction and land development, focusing on transforming visions into reality. Our expertise spans across various sectors of infrastructure development and real estate investment, ensuring that every project meets the highest standards of quality and innovation.</p>
            <p>In the fast-paced world of construction and land development, navigating regulatory hurdles, budget constraints, and project timelines can be overwhelming. Developers often struggle to find reliable partners who understand their unique needs, leading to delays and increased costs.</p>
            <h4>Agitation: The Cost of Inaction</h4>
            <p>Every day you delay your project is a day lost in potential revenue. Poor planning or choosing the wrong partner can impact your investment returns significantly. Don't let uncertainty hold you back from achieving your goals.</p>
            <h4>The Solution: Your Trusted Development Partner</h4>
            <p>With KDL Developers & Constructions, you gain a dedicated partner who understands the complexities of construction and investment. Our team of experts is committed to delivering tailored solutions that streamline processes, reduce risks, and maximize your investment's potential.</p>
            </Col>
            <Col xs={4}>
              <img src={`/img/banner/banner-1.jpg`} />
            </Col>
          </Row>
        </Container>
       
        <Timeline />
        
      </LayoutOne>
    </>
  );
}

export default AboutUs;
