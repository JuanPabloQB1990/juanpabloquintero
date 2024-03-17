import { Swiper, SwiperSlide } from 'swiper/react';
import { DiGithubBadge } from "react-icons/di";
import { FaLink } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';
const Proyectos = ({ proyectos }) => {

  console.log(proyectos);
  return (
    <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {proyectos.map((proyecto) => (
          <SwiperSlide>
            <div className="card" >
              <img src={proyecto.image} className="" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{proyecto.nombre}</h5>
                <p className='card-text'>{proyecto.descripcion}</p>
                <div className='card-body-links'>
                  <a href={proyecto.github} target='_blank' className="card-link"><DiGithubBadge size="3rem"/></a>
                  <a href={proyecto.link} target='_blank' className="card-link"><FaLink  size="2rem"/></a>
                </div>
              </div>
            </div>
          </SwiperSlide>

        ))}
      </Swiper>
  );
};

export default Proyectos;
