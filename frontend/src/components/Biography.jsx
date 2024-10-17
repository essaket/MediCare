import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          MediCare is a comprehensive healthcare management platform designed to bridge
          the gap between patients and healthcare providers. Our goal is to streamline
          the process of booking appointments, managing medical records, and staying informed
          about your health. By offering an intuitive interface and real-time updates,
          we empower patients to take control of their healthcare journey while allowing doctors
          to manage their schedules and consultations efficiently.
          </p>
          <p>
          At MediCare, we believe in the power of technology to improve healthcare accessibility
          and communication. Our platform prioritizes security and ease of use, ensuring that
          both patients and doctors can connect with confidence. Whether you're scheduling
          an appointment or reviewing your medical history, MediCare is here to provide a smooth
          and reliable experience tailored to your needs.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;