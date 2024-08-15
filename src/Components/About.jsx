import React from 'react'
import PageBanner from './PageBanner'

export default function About() {
  const renderSection = (title, content) => (
    <div className="w-80 p-4 bg-light rounded mt-5 shadow">
      <h1 className="text-center mb-3 font-roboto fw-bold">{title}</h1>
      <li className="text-center mb-3 p-3 font-roboto list-unstyled">{content}</li>
    </div>
  );

  const renderObjectives = (label, content) => (
    <li>
      <span className="fw-bold">{label}:</span> {content}
    </li>
  );

  return (
    <div>
      <PageBanner title="About Us" />

      <div className="container mt-5 mb-5 text-center fs-4 ">
        {renderSection(
          "Who We Are",
          "At ASIMIC, we are dedicated to delivering cutting-edge IT solutions that empower businesses to thrive in the digital age. Specializing in Advanced Software Innovation, Managed IT & Consulting, we provide trusted IT services that are cherished by businesses across industries. Our team of experts combines technical excellence with a deep understanding of our clients' needs, ensuring that we deliver tailored solutions that drive growth, enhance security, and streamline operations. Whether it's optimizing existing systems or implementing new technologies, ASIMIC is committed to being your reliable partner in technology."
        )}
        {renderSection(
          "Mission",
          "Our mission is to deliver innovative and reliable IT solutions that help businesses achieve their goals efficiently and securely. We aim to build lasting relationships with our clients by consistently providing exceptional service and value, leveraging our expertise in Advanced Software Innovation and Managed IT & Consulting."
        )}
        {renderSection(
          "Vision",
          "Our vision is to be the leading provider of IT services globally, recognized for our innovation, reliability, and the deep trust we build with our clients. We aspire to be the go-to partner for businesses seeking to navigate the complexities of the digital landscape with confidence."
        )}
        {renderSection(
          "Purpose",
          "Our purpose is to harness the power of technology to transform businesses, enabling them to operate more effectively and securely. We strive to be the driving force behind our clients' success by providing them with the tools and support they need to excel in a rapidly evolving digital world."
        )}
        {renderSection(
          "Objectives",
          <ul className="text-center mb-3 p-3 font-roboto list-unstyled">
            {renderObjectives(
              "Client Satisfaction",
              "To consistently exceed client expectations by delivering high-quality, reliable IT solutions that meet their unique needs."
            )}
            {renderObjectives(
              "Innovation",
              "To stay at the forefront of technological advancements and continuously innovate our services in Advanced Software and IT Consulting."
            )}
            {renderObjectives(
              "Growth",
              "To expand our market presence and client base, establishing ASIMIC as a global leader in IT services."
            )}
          </ul>
        )}
        {/* {renderSection(
          "Contact Us",
          "For any inquiries, please contact our team at <a href='mailto:contact@asimic.com'>contact@asimic.com</a> or visit our <a href='https://www.asimic.com/contact-us'>contact page</a>."
        )} */}
      </div>
    </div>
  );
}
