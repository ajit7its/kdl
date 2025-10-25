import { Form } from "react-bootstrap";
import {
  FaDribbble,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaCheck,
  FaCalendarAlt,
  FaUserAlt,
  FaEnvelope,
  FaGlobe,
  FaPencilAlt,
  FaComments,
  FaPhoneAlt,
  FaArrowDown,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      {/* <!-- CONTACT ADDRESS AREA START --> */}
      <div className="ltn__contact-address-area mb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img src="/img/icons/10.png" alt="Icon Image" />
                </div>
                <h3>Email Address</h3>
                <p>
                 <a href="mailto:kdl.developersconstruction@gmail.com">kdl.developersconstruction@gmail.com</a>
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img src="/img/icons/11.png" alt="Icon Image" />
                </div>
                <h3>Phone Number</h3>
                <p>
                  <a href="tel:+91 73861 05564">+91 73861 05564</a>
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img src="/img/icons/12.png" alt="Icon Image" />
                </div>
                <h3>Office Address</h3>
                <p>
                  Najam Nagar, Bahadurpur, Kishan Bagh, Hyderabad - 500064
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- CONTACT ADDRESS AREA END --> */}

      {/* <!-- CONTACT MESSAGE AREA START --> */}
      <div className="ltn__contact-message-area mb-120 mb--100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__form-box contact-form-box box-shadow white-bg">
                <h4 className="title-2">We're Listening</h4>
                <form id="contact-form" action="#" method="post">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-item input-item-name ltn__custom-icon">
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                        />
                        <span className="inline-icon">
                          <FaUserAlt />
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-item input-item-email ltn__custom-icon">
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter email address"
                        />
                        <span className="inline-icon">
                          <FaEnvelope />
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-item input-item input-item-email ltn__custom-icon">
                        <Form.Select className="nice-select">
                          <option>Select Service Type</option>
                          <option>Constructions</option>
                          <option>Land Developers</option>
                          <option>Earth Movers</option>
                          <option>Infra Developers</option>
                        </Form.Select>
                        <span className="inline-icon">
                          <FaArrowDown />
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-item input-item-phone ltn__custom-icon">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Enter phone number"
                        />
                        <span className="inline-icon">
                          <FaPhoneAlt />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="input-item input-item-textarea ltn__custom-icon">
                    <textarea
                      name="message"
                      placeholder="Enter message"
                    ></textarea>
                    <span className="inline-icon">
                      <FaPencilAlt />
                    </span>
                  </div>                  
                  <div className="btn-wrapper mt-0">
                    <button
                      className="btn theme-btn-1 btn-effect-1 text-uppercase"
                      type="submit"
                    >
                      get a free service
                    </button>
                  </div>
                  <p className="form-messege mb-0 mt-20"></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- CONTACT MESSAGE AREA END --> */}

    </>
  );
};

export default Contact;
