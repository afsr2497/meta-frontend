import React from "react";
import "./Testimonial.css";
import starIcon from "../../assets/star.svg";

const Testimonial = ({ author, description, image, rating }) => {
  return (
    <div className="testimonial-card" data-testid="testimonial-card">
      <div className="testimonial-rating">
        {rating &&
          [...Array(rating)].map((_, index) => (
            <img key={index} src={starIcon} alt="star" height={15} width={15} />
          ))}
      </div>

      <div className="testimonial-card-container">
        <img className="testimonial-profile-picture" src={image} alt="author" height={50}></img>
        <p className="testimonial-card-author">{author}</p>
      </div>
      <p className="testimonial-description">{description}</p>
    </div>
  );
};

export default Testimonial;
