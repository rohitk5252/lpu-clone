import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Carousel = ({items, mob, tab, lap, infinite}) => {
  const responsive = {
    0: { items: mob },
    568: { items: tab },
    1024: { items: lap },
  };

  return (
    <AliceCarousel
      items={items}
      responsive={responsive}
      autoPlay = {true}
      autoPlayInterval={1000}
      dotsDisabled={false}
      buttonsDisabled={false}
      infinite={infinite}
    />
  );
};

export default Carousel;