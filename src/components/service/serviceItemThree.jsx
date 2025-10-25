import React from "react";
import PropTypes from "prop-types";

const ServiceItemThree = ({ categories, title = "What We Do" }) => {
  return (
    <section className="categories-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">
            We specialize in diverse infrastructure and development projects.
          </p>
        </div>

        <div className="row g-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center"
            >
              <div className="category-card text-center p-4 shadow-sm">
                <h5 className="category-title">{category.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

ServiceItemThree.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string, // Bootstrap Icon class
    })
  ).isRequired,
  title: PropTypes.string,
};

export default ServiceItemThree;
