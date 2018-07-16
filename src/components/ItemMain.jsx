import React from 'react';
import PropTypes from 'prop-types';
import '../styles/itemmain.css';

const ItemMain = (props) => {
  const {
    item: {
      background,
      name,
      description,
      price,
      image,
    },
  } = props;

  return (
    <div className="profile__container">
      <img src={background} alt="" id="item__background" />
      <div className="item__profile">
        <div className="item__details">
          <p id="item__header">
            {name}
          </p>
          <p id="item__description">
            {description}
          </p>
          <div className="price">
            <p>
              Price_
            </p>
            <p>
              $
              {price}
            </p>
          </div>
          <button type="submit" id="buy__button">
            {'>buy it_'}
          </button>
        </div>

        <div className="item__image">
          <img src={image} alt="wtf" />
        </div>
      </div>
    </div>
  );
};

ItemMain.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ItemMain;
