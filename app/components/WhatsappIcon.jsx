"use client";
import React, { useState } from "react";

export default function WhatsAppIcon() {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    const message = "Hello! I'm interested in your beauty services. Can you please provide more details on the available packages?";
    window.open(`https://wa.me/+918368273373?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+918368273373";
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
        zIndex: 1000, // Ensure it stays above other content
      }}
    >
      {/* WhatsApp Section */}
      <div
        onClick={handleWhatsAppClick}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          backgroundColor: "#25D366",
          borderRadius: "30px",
          padding: "10px 20px",
          cursor: "pointer",
          boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
          transition: "transform 0.2s ease",
        }}
        onMouseEnter={() => setIsHovered(false)}
      >
        <img
          src="/Whatsapp.png"
          alt="WhatsApp"
          style={{ width: "25px", height: "25px" }}
        />
        <span style={{ color: "#fff", fontWeight: "bold", fontSize: "16px" }}>
          WhatsApp
        </span>
      </div>

      {/* Phone Number Section */}
      <div
        onClick={handlePhoneClick}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: isHovered ? "#FFD700" : "#f5f5f5",
          color: "#000",
          fontWeight: "bold",
          fontSize: isHovered ? "20px" : "16px",
          borderRadius: "30px",
          padding: "10px 20px",
          boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
          cursor: "pointer",
          transition: "all 0.2s ease",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        +91 836 827 3373
      </div>
    </div>
  );
}
