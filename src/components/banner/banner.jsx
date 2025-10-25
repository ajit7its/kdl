import React from "react";
import PropTypes from "prop-types";

const Banner = ({
  title,
  subtitle,
  description,
  backgroundImage,
  height = "70vh",
  overlay = true,
  align = "center",
}) => {
  // Determine if the image is a full URL or from public folder
  const bgUrl = backgroundImage?.startsWith("/")
    ? backgroundImage
    : backgroundImage
    ? `url(${backgroundImage})`
    : "none";

  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height,
    display: "flex",
    alignItems: "center",
    justifyContent:
      align === "left"
        ? "flex-start"
        : align === "right"
        ? "flex-end"
        : "center",
    position: "relative",
    color: "#fff",
    textAlign: align,
    padding: "0 2rem",
  };

  return (
    <section className="banner" style={bannerStyle}>
      {overlay && <div className="banner-overlay"></div>}
      <div className="banner-content">
        {title && <h1 className="banner-title">{title}</h1>}
        {subtitle && <h2 className="banner-subtitle">{subtitle}</h2>}
        {description && <p className="banner-description">{description}</p>}
      </div>
    </section>
  );
};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  backgroundImage: PropTypes.string.isRequired,
  height: PropTypes.string,
  overlay: PropTypes.bool,
  align: PropTypes.oneOf(["left", "center", "right"]),
};

export default Banner;
