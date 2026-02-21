import { Swiper, SwiperSlide } from "swiper/react";
import { DiGithubBadge } from "react-icons/di";
import { FaGithub, FaLink } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./styles.css";

// import required modules
import { EffectCards } from "swiper/modules";
import { GrLink } from "react-icons/gr";
const Proyectos = ({ proyectos }) => {
  return (
    <Swiper
      effect={window.innerWidth < 768 ? "slide" : "cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
      slidesPerView={1}
      centeredSlides={true}
      touchStartPreventDefault={false}
    >
      {proyectos.map((proyecto) => (
        <SwiperSlide key={proyecto.id}>
          <div className="card">
            <img src={proyecto.image} className="" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{proyecto.nombre}</h5>
              <p className="card-text">{proyecto.descripcion}</p>
              <div
                className="tech-stack"
                onTouchStart={(e) => e.stopPropagation()}
                onTouchMove={(e) => e.stopPropagation()}
              >
                {proyecto.herramientas.map((tech, index) => (
                  <span key={index} className="badge">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="card-body-links">
                <a href={proyecto.github} target="_blank" className="card-link">
                  <FaGithub size="2rem" />
                </a>
                <a href={proyecto.link} target="_blank" className="card-link">
                  <GrLink size="2rem" />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Proyectos;
