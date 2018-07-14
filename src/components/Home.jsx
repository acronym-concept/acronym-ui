import React from 'react';
import Slider from 'react-slick';
import ItemMain from './ItemMain';
import items from './items.json';

console.log(items[0]);
const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
};

const Home = () => (
  <div className="home">
    <Slider {...settings}>
      <ItemMain item={items[0]} />
    </Slider>
  </div>
);

export default Home;