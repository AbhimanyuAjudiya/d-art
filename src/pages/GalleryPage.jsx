import { useState } from 'react';
import { Section, Container, SectionLabel, Button, Lightbox } from '../components/common';
import { artworkImages } from '../data/artworks';

const GalleryPage = () => {
  const [activeImage, setActiveImage] = useState(null);

  const handleImageClick = (image) => {
    setActiveImage((current) =>
      current?.src === image.src ? null : image,
    );
  };

  return (
    <div className="bg-cream">
      <Section className="pt-32 pb-12 md:pb-16" id="gallery-route">
        <Container className="text-center">
          <SectionLabel>Gallery</SectionLabel>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-6">
            Curated works from D Art Studio
          </h1>
          <p className="text-charcoal/70 text-lg md:text-xl max-w-3xl mx-auto">
            Explore the complete catalog of textured walls, bespoke murals, canvas narratives,
            and resin compositions carefully crafted for residences and boutique spaces across Gujarat.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Button to="/" variant="dark">
              Back to Home
            </Button>
            <Button href="#gallery-collection" variant="primary">
              Browse Collection
            </Button>
          </div>
        </Container>
      </Section>

      <Section className="pt-4 pb-24" id="gallery-collection">
        <Container>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6">
            {artworkImages.map((image, index) => (
              <div
                key={image.fileName || index}
                className="break-inside-avoid mb-4 md:mb-6 group cursor-zoom-in"
                onClick={() => handleImageClick(image)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    handleImageClick(image);
                  }
                }}
                role="button"
                tabIndex={0}
              >
                <div className="overflow-hidden rounded-2xl shadow-lg shadow-charcoal/5">
                  <img
                    src={image.src}
                    alt={image.fileName}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-90"
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Lightbox image={activeImage} onClose={() => setActiveImage(null)} />
    </div>
  );
};

export default GalleryPage;
