import React from "react";
import { assets } from "../assets/assets";
import PageBanner from "./PageBanner";

// Reusable ServiceCard Component
const ServiceCard = ({ label, src, content }) => (
  <li className="col col-md-4 font-roboto">
    <h4 className="text-center mb-3">{label}</h4>
    <img
      src={src}
      alt={`${label} image`}
      className="img-fluid rounded shadow"
      style={{ cursor: "pointer" }}
    />
    <p className="text-center mb-3 p-3">{content}</p>
  </li>
);

export default function Services() {
  return (
    <div>
      <PageBanner title="Services" />
      <div className="container mt-5 mb-5 text-center w-80 p-5 bg-light rounded shadow">
        <h1 className="text-center mb-4 font-roboto fw-bold">
          All Your Laptop Needs
        </h1>
        <hr className="w-50 mx-auto" />
        <ul className="row row-cols-1 row-cols-md-3 list-unstyled">
          {assets.map(({ id, label, src, content }) => (
            <ServiceCard key={id} label={label} src={src} content={content} />
          ))}
        </ul>
      </div>
    </div>
  );
}
