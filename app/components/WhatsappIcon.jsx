"use client";
import React from "react";

export default function WhatsAppIcon() {
  const handleWhatsAppClick = () => {
    // Predefined message for beauty parlour
    const message = "Hello! I'm interested in your beauty services. Can you please provide more details on the available packages?";
    
    // Open WhatsApp with the predefined message
    window.open(`https://wa.me/+918368273373?text=${encodeURIComponent(message)}`, "_blank"); // Replace with your number
  };

  return (
    <div
      onClick={handleWhatsAppClick}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
        zIndex: 1000, // Ensure it stays above other content
      }}
    >
      <img
        src="/Whatsapp.png" // Ensure image is in the public folder
        alt="WhatsApp"
        style={{ width: "35px", height: "35px" }}
      />
    </div>
  );
}
