import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { ExampleCarouselImage } from './ExampleCarouselImage';

export const CarouselHome = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <ExampleCarouselImage src="/images/lasaña.jpg" text="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage
          src="/images/hamburguesa.jpg"
          text="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src="/images/mazorcada.jpg" text="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};
