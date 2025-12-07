import React from 'react';

const WhatsAppWidget = () => {
  const phoneNumber = "919797602332"; // Replace with your number
  const message = "Hello, I have a query about your services.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      className="whatsapp_float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
        alt="WhatsApp"
        style={{
          height: "65px",
          width: "65px",
        }}
      />
    </a>
  );
};

export default WhatsAppWidget;
