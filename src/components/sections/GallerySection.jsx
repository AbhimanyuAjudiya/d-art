import { useState } from 'react';
import { Section, Container, SectionLabel, Button, Lightbox } from '../common';
import { artworkImages } from '../../data/artworks';

/**
 * GallerySection - Masonry-style art gallery
 */
const GallerySection = () => {
  const [activeImage, setActiveImage] = useState(null);
  const galleryImages = artworkImages.slice(0, 12);

  const handleImageClick = (image) => {
    setActiveImage((current) =>
      current?.src === image.src ? null : image,
    );
  };

  return (
    <Section className="py-24 md:py-32" id="gallery">
      <Container>
        <div className="text-center mb-16">
          <SectionLabel>Gallery</SectionLabel>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal">
            A glimpse of our work
          </h2>
        </div>
        
        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="
                break-inside-avoid mb-4 md:mb-6
                group cursor-zoom-in
              "
              onClick={() => handleImageClick(image)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  handleImageClick(image);
                }
              }}
              role="button"
              tabIndex={0}
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={image.src}
                  alt={image.fileName}
                  loading="lazy"
                  className="
                    w-full h-auto object-cover
                    transition-all duration-700 ease-out
                    group-hover:scale-105 group-hover:opacity-90
                  "
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button to="/gallery" variant="dark">
            Explore Full Gallery
          </Button>
        </div>
      </Container>

      <Lightbox image={activeImage} onClose={() => setActiveImage(null)} />
    </Section>
  );
};

export default GallerySection;
