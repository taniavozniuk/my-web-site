import { items } from "./item";
import "./Swiper.css";

export const TechSwiper = () => {
  const loopItems = [...items, ...items];

  return (
    <div className="infinite-scroll-container">
      <div className="infinite-scroll-track">
        {loopItems.map((item, index) => (
          <div key={index} className="scroll-item">
            <img
              src={item.img}
              alt={item.name || `tech-${index}`}
              className="svg-icon"
            />
            <p className="scroll-name">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
