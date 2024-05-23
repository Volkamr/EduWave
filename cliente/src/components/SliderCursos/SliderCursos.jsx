import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './SliderCursos.css';
import { lista_cursos } from '../../Data';

const SliderCursos = () => {
  return (
    <div className="slider-cursos-container">
      <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          default: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          270: {
            slidesPerView: 1,
            spaceBetween: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 3,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 7,
          }
        }}
        modules={[Pagination]}
        className="Slider_cursos"
      >
        {lista_cursos.map(({ nombre, inicio, final, color }, index) => {
          return (
            <SwiperSlide className="sliderCursos__item card card-one" key={index}>
              <div className="item" style={{ backgroundColor: color }}>
                <div className="texto">
                  <h3 className="nombre_curso">{nombre}</h3>
                  <p className="datos_curso">{"Fecha inicio: " + inicio}</p>
                  <p className="datos_curso">{"Fecha final: " + final}</p>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  );
};

export default SliderCursos;