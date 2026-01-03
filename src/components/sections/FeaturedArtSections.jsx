import { Section, Container, SectionLabel, ArtImage } from '../common';
import { artworkImages } from '../../data/artworks';

/**
 * FeaturedArtCard - Individual featured art section
 */
const FeaturedArtCard = ({ title, description, image, reverse = false }) => {
  return (
    <Section dark className="py-24 md:py-32">
      <Container>
        <div className={`
          grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center
        `}>
          {/* Image */}
          <div className={`${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
            <ArtImage
              src={image}
              alt={title}
              aspectRatio="aspect-[4/3]"
              className="shadow-2xl"
            />
          </div>
          
          {/* Content */}
          <div className={`${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
            <SectionLabel light>Featured Work</SectionLabel>
            
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal mb-6 text-cream">
              {title}
            </h3>
            
            <p className="text-cream/70 text-lg md:text-xl leading-relaxed font-light">
              {description}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

/**
 * FeaturedArtSections - Collection of featured art showcases
 */
const FeaturedArtSections = () => {
  const featuredWorks = [
    {
      title: 'Textured Wall Art',
      description: 'Layers of texture create depth and dimension, transforming flat surfaces into tactile experiences. Our textured finishes bring walls to life with subtle plays of light and shadow, adding warmth and character to any interior space.',
      image: artworkImages[12]?.src || artworkImages[0]?.src,
      reverse: false,
    },
    {
      title: 'Canvas Paintings',
      description: 'Original canvas works that capture moments of beauty and contemplation. Each piece is a dialogue between color, form, and emotion — created to complement your space while standing as a statement of artistic expression.',
      image: artworkImages[18]?.src || artworkImages[1]?.src,
      reverse: true,
    },
    {
      title: 'Resin Art',
      description: 'Fluid, mesmerizing, and utterly unique — our resin pieces capture movement frozen in time. The crystalline finish and organic patterns create contemporary focal points that draw the eye and spark conversation.',
      image: artworkImages[24]?.src || artworkImages[2]?.src,
      reverse: false,
    },
  ];

  return (
    <div id="featured">
      {featuredWorks.map((work, index) => (
        <FeaturedArtCard key={index} {...work} />
      ))}
    </div>
  );
};

export default FeaturedArtSections;
