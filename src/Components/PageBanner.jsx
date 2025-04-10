import React from "react";
import PropTypes from "prop-types";

const PageBanner = ({ title, className = "", children }) => {
  return (
    <div
      className={`page-banner bg-dark d-flex justify-content-center align-items-center p-3 ${className}`}
    >
      <h1 className="text-center text-white font-roboto fw-bold">{title}</h1>
      {children && <div className="mt-2">{children}</div>}
    </div>
  );
};

PageBanner.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default PageBanner;
