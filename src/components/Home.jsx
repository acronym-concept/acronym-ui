import React from 'react';
import Slider from 'react-slick';
import ItemMain from './ItemMain';
import items from './items.json';

console.log(items[0]);
const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      touchMove: true,
};

const Home = () => (
  <div className="home">
    <Slider {...settings}>
      {
        items.map(item => (
          <ItemMain item={item} key={item.name} />
        ))
      }
    </Slider>
  </div>
);

export default Home;