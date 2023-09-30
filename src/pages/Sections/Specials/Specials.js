import React from "react";
import "./Specials.css";
import Button from "../../../components/Button/Button";
import FoodCard from "../../../components/FoodCard/FoodCard";
import { useNavigate } from "react-router-dom";
import pages from "../../../utils/pages";

const specials = [
  {
    id: 1,
    title: "Ceviche",
    description: "Experience the zesty flavors of Peru with our Ceviche, a refreshing dish featuring marinated raw fish, tangy lime juice, onions, and cilantro, garnished with slices of vibrant Peruvian peppers. Dive into a culinary adventure that captures the essence of coastal Peru.",
    image: "https://www.elespectador.com/resizer/3jkB9hzje-a2xlytcvpnCmM86nk=/525x350/filters:quality(60):format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/2AVD5Z6Y2ZFWHETPQGCPLMNK4A.jpg",
    price: "$14.99"
  },
  {
    id: 2,
    title: "Lomo Saltado",
    description: "Indulge in the bold tastes of Lomo Saltado, a tantalizing stir-fry combining tender strips of beef, sautéed with onions, tomatoes, and Peruvian spices, served over a bed of steaming rice and crispy French fries. This fusion of flavors offers a delightful harmony of savory and spicy notes.",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Lomo-saltado-perudelights.jpg",
    price: "$18.99"
  },
  {
    id: 3,
    title: "Rocoto Relleno",
    description: "Embark on a spicy adventure with Rocoto Relleno, a traditional Peruvian dish featuring stuffed rocoto peppers, filled with a flavorful mixture of minced meat, onions, spices, and Andean herbs, baked to perfection. Served with a side of creamy potato gratin, this dish embodies the rich culinary heritage of Peru’s highlands.",
    image: "https://acomer.pe/wp-content/uploads/2016/09/rocotorellenojpg.jpg",
    price: "$16.99"
  }
];


const Specials = () => {
  const navigate = useNavigate();

  const onClickMenu = () => {
    navigate(pages.get("orders").path);
  };
  return (
    <div className="specials">
      <div className="header-container">
        <h1 className="specials-title">Specials</h1>
        <Button title={"Online Menu"} onClick={onClickMenu} />
      </div>

      <div className="header-list">
        {specials.map((special) => (
          <FoodCard
            key={special.id}
            title={special.title}
            description={special.description}
            image={special.image}
            price={special.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Specials;
