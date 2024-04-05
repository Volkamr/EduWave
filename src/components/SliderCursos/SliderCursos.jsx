import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './SliderCursos.css';
import { cursos } from '../../Data';

const SliderCursos = () => {
  return (
    <div className="slider-cursos-container">
      <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            540: {
                slidesPerView: 1,
                spaceBetween: 5, 
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 5, 
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 10, 
              }
        }}
        modules={[Pagination]}
        className="Slider_cursos"
      >
        {cursos.map(({ nombre, inicio, final, estado , img, modalidad}, index) => {
          return (
            <SwiperSlide className="sliderCursos__item card card-one" key={index}>
              <div className="item">
                <div >
                    <img src={img} className="imagen_item"></img>
                </div>
                <div className="texto"> 
                    <h3 className="nombre_curso">{nombre}</h3>
                    <p className="datos_curso">{"Fecha inicio: " + inicio}</p>
                    <p className="datos_curso">{"Fecha final: " + final}</p>
                    <p className="datos_curso">{"Estado: " + estado}</p>
                    <p className="datos_curso">{"Modalidad: " + modalidad}</p>
                </div>
                <div className="btns_item">
                    <div className="btn_item">
                        <p className="btn_item_txt">{"Continuar ->"}</p>
                    </div>
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
