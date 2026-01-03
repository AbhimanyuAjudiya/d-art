import { Section, Container, SectionLabel, ArtImage } from '../common';
import { artworkImages } from '../../data/artworks';

/**
 * ArtistrySection - Split layout highlighting key qualities
 */
const ArtistrySection = () => {
  const highlights = [
    {
      word: 'Versatility',
      description: 'From traditional murals to contemporary abstracts, we adapt our craft to your vision.',
    },
    {
      word: 'Precision',
      description: 'Every detail matters. We approach each project with meticulous attention to quality.',
    },
    {
      word: 'Expression',
      description: 'Art should evoke emotion. We create pieces that speak to the soul of your space.',
    },
  ];

  const images = artworkImages.slice(0, 4);

  return (
    <Section className="py-24 md:py-32 lg:py-40" id="artistry">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <SectionLabel>Our Artistry</SectionLabel>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal mb-12 leading-tight">
              The art of transforming spaces
            </h2>
            
            <div className="space-y-10">
              {highlights.map((item, index) => (
                <div key={index} className="group">
                  <h3 className="font-serif text-2xl md:text-3xl text-forest mb-3 transition-colors duration-300 group-hover:text-sage">
                    {item.word}
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed pl-0 lg:pl-4 border-l-0 lg:border-l-2 border-sage/30">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Staggered Image Grid */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <ArtImage
                  src={images[0]?.src}
                  alt={images[0]?.fileName || 'Artwork sample'}
                  aspectRatio="aspect-[3/4]"
                />
                <ArtImage
                  src={images[1]?.src}
                  alt={images[1]?.fileName || 'Artwork sample'}
                  aspectRatio="aspect-[3/2]"
                />
              </div>
              <div className="space-y-4 pt-8">
                <ArtImage
                  src={images[2]?.src}
                  alt={images[2]?.fileName || 'Artwork sample'}
                  aspectRatio="aspect-square"
                />
                <ArtImage
                  src={images[3]?.src}
                  alt={images[3]?.fileName || 'Artwork sample'}
                  aspectRatio="aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ArtistrySection;
