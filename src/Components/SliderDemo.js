import React from 'react';
import Slider from 'react-slick';
import { getSlides } from '../Config/slides';

const SliderDemo = () => {
  const settings = {
    dots: true,
  };
  return (
    <div>
      <Slider {...settings}>
        {getSlides().map(c => (
          <div>
            <h2> {c.header} </h2>
            <img alt={c.id} src={c.imgurl} className="mb-4 mt-4" />
            <p>{c.text} </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderDemo;
