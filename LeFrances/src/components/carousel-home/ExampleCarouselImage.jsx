import Image from 'next/image';

export const ExampleCarouselImage = ({ src, alt }) => (
  <div
    style={{
      position: 'relative',
      height: '570px',
      width: '100%',
      padding: '100px',
    }}
  >
    {/* objectFit="cover" */}
    <Image src={src} alt={alt} layout="fill" objectFit="contain" />
  </div>
);
