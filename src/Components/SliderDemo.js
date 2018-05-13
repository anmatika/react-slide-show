import React from 'react';
import Slider from 'react-slick';

const SliderDemo = () => {
  const settings = {
    dots: true,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/300" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/400" />
        </div>
        <div>
          <img src="http://placekitten.com/g/400/500" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderDemo;
