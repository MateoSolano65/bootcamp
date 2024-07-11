import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import './styles.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    title: '1 Series',
    image: '/images/marinero.jpg',
  },
  {
    title: '2 Series',
    image: '/images/carnivoro.jpg',
  },
  {
    title: '3 Series',
    image: '/images/criollo.jpg',
  },
  {
    title: '4 Series',
    image: '/images/extra_queso.jpg',
  },
  {
    title: '5 Series',
    image: '/images/hawaiano.jpg',
  },
];

export const CarouselHome = () => {
  return (
    <section className="page carousel-1-page">
      <Swiper
        grabCursor
        centeredSlides
        slidesPerView={2}
        effect="coverflow"
        loop
        pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        modules={[Pagination, EffectCoverflow]}
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.title}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div>
              <div>
                <h2>{slide.title}</h2>
                <a>explore</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
