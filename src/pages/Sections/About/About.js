import React from "react";
import "./About.css";
import Image from "../../../assets/ceviche.jpg";
import ImageRestaurant from "../../../assets/restCeviche.jpg";

const About = () => {
  return (
    <div className="about">
      <div>
        <h1 className="about-title">Little Lemon</h1>
        <h2 className="about-subtitle">Chicago</h2>
        <p className="about-description">
        Nestled in Lima's heart, Little Lemon is a delightful culinary haven dedicated to the art of ceviche. This fictional eatery offers an intimate space where fresh, vibrant ceviche takes the spotlight. Prepared with locally sourced ingredients, Little Lemon's menu boasts classic and inventive ceviche creations, capturing the essence of the Peruvian coast in every bite. The cozy, marine-inspired ambiance invites diners to savor a burst of flavors that perfectly encapsulate Peru's coastal heritage.
        </p>
      </div>

      <img
        className="about-image-bruchetta"
        src={ImageRestaurant}
        alt="Restarurant food"
        height={200}
        width={200}
      />
      <img
        className="about-image-restaurant"
        src={Image}
        alt="Restarurant food"
        height={200}
        width={200}
      />
    </div>
  );
};

export default About;
