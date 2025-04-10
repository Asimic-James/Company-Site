import React from "react";
import PageBanner from "./PageBanner";

// Reusable Section Component
const Section = ({ title, content }) => (
  <section className="w-80 p-4 bg-light rounded mt-5 shadow">
    <h1 className="text-center mb-3 font-roboto fw-bold">{title}</h1>
    <div className="text-center mb-3 p-3 font-roboto">{content}</div>
  </section>
);

// Reusable Objective Component
const Objective = ({ label, content }) => (
  <li>
    <span className="fw-bold">{label}:</span> {content}
  </li>
);

export default function About() {
  return (
    <div>
      <PageBanner title="About Us" />

      <div className="container mt-5 mb-5 text-center fs-4">
        <Section
          title="Who We Are"
          content="At ASIMIC, we are dedicated to delivering cutting-edge IT solutions that empower businesses to thrive in the digital age. Specializing in Advanced Software Innovation, Managed IT & Consulting, we provide trusted IT services that are cherished by businesses across industries. Our team of experts combines technical excellence with a deep understanding of our clients' needs, ensuring that we deliver tailored solutions that drive growth, enhance security, and streamline operations. Whether it's optimizing existing systems or implementing new technologies, ASIMIC is committed to being your reliable partner in technology."
        />
        <Section
          title="Mission"
          content="Our mission is to deliver innovative and reliable IT solutions that help businesses achieve their goals efficiently and securely. We aim to build lasting relationships with our clients by consistently providing exceptional service and value, leveraging our expertise in Advanced Software Innovation and Managed IT & Consulting."
        />
        <Section
          title="Vision"
          content="Our vision is to be the leading provider of IT services globally, recognized for our innovation, reliability, and the deep trust we build with our clients. We aspire to be the go-to partner for businesses seeking to navigate the complexities of the digital landscape with confidence."
        />
        <Section
          title="Purpose"
          content="Our purpose is to harness the power of technology to transform businesses, enabling them to operate more effectively and securely. We strive to be the driving force behind our clients' success by providing them with the tools and support they need to excel in a rapidly evolving digital world."
        />
        <Section
          title="Objectives"
          content={
            <ul className="text-center mb-2 p-2 font-roboto list-unstyled">
              <Objective
                label="Client Satisfaction"
                content="To consistently exceed client expectations by delivering high-quality, reliable IT solutions that meet their unique needs."
              />
              <Objective
                label="Innovation"
                content="To stay at the forefront of technological advancements and continuously innovate our services in Advanced Software and IT Consulting."
              />
              <Objective
                label="Growth"
                content="To expand our market presence and client base, establishing ASIMIC as a global leader in IT services."
              />
            </ul>
          }
        />
      </div>
    </div>
  );
}
