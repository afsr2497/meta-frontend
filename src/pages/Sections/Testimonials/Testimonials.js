import React from "react";
import "./Testimonials.css";
import Testimonial from "../../../components/Testimonial/Testimonial";

const testimonials = [
  {
    id: 4,
    author: "Sophia Rodriguez",
    description: "Little Lemon's Lemon Dessert is a heavenly experience; every bite is a burst of citrusy delight, leaving you craving for more.",
    image: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    rating: 5
  },
  {
    id: 5,
    author: "Ethan Clark",
    description: "I couldn't resist Little Lemon's Ceviche; it's a perfect blend of freshness and tang, showcasing the true essence of Peruvian culinary expertise.",
    image: "https://images.pexels.com/photos/6784146/pexels-photo-6784146.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    rating: 5
  },
  {
    id: 6,
    author: "Ava Martinez",
    description: "Rocoto Relleno at Little Lemon is a spicy adventure for your taste buds; the rich flavors of the stuffed peppers combined with creamy potato gratin create a culinary masterpiece.",
    image: "https://www.eloccidental.com.mx/incoming/gvhext-richard-burlton-htpmedsyzag-unsplash.jpg/ALTERNATES/LANDSCAPE_768/richard-burlton-HTpmedSyZag-unsplash.jpg",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <div className="testimonial-background">
      <div className="testimonials">
        <div className="testimonials-container">
          <h1 className="testimonial-title">Testimonials</h1>
        </div>

        <div className="testimonials-list">
          {testimonials.map((testimonial) => (
            <Testimonial
            
              key={testimonial.id}
              author={testimonial.author}
              description={testimonial.description}
              image={testimonial.image}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
