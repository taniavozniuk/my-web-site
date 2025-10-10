import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Certificate.module.scss";
import { certi } from "./certi";

export const Certificate = () => {
  return (
    <section className={styles.Certificate} id="certificates">
      <h2 className={styles.title}>Certificates</h2>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        className="swiper"
        style={{ background: 'white', borderRadius: '16px'}}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true, el: "#pagination" }}
      >
        {certi.map((c) => (
          <SwiperSlide key={c.id}>
            <img src={c.img} alt={`Slide ${c.id}`} className="slider__image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
