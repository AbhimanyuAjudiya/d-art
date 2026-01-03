import { Section, Container, SectionLabel } from '../common';
import { artworkImages } from '../../data/artworks';

/**
 * ProjectCard - Individual project showcase card
 */
const ProjectCard = ({ title, category, image }) => {
  return (
    <div className="group cursor-pointer">
      {/* Image */}
      <div className="overflow-hidden rounded-2xl mb-4">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="
            w-full aspect-[4/3] object-cover
            transition-all duration-700 ease-out
            group-hover:scale-105
          "
        />
      </div>
      
      {/* Content */}
      <div className="px-1">
        <span className="text-xs tracking-[0.2em] uppercase text-sage font-medium">
          {category}
        </span>
        <h3 className="font-serif text-xl mt-2 text-charcoal group-hover:text-forest transition-colors duration-300">
          {title}
        </h3>
      </div>
    </div>
  );
};

/**
 * RecentProjectsSection - Grid of recent project showcases
 */
const RecentProjectsSection = () => {
  const lookupImage = (index, fallbackIndex = 0) =>
    artworkImages[index]?.src || artworkImages[fallbackIndex]?.src || '';

  const projects = [
    {
      title: 'Serene Living Room Accent',
      category: 'Accent Walls',
      image: lookupImage(30, 5),
    },
    {
      title: 'Nature-Inspired Mural',
      category: 'Wall Paintings',
      image: lookupImage(31, 6),
    },
    {
      title: 'Abstract Collection',
      category: 'Canvas Artworks',
      image: lookupImage(32, 7),
    },
    {
      title: 'Ocean Dreams',
      category: 'Resin Art',
      image: lookupImage(33, 8),
    },
    {
      title: 'Textured Elegance',
      category: 'Accent Walls',
      image: lookupImage(34, 9),
    },
    {
      title: 'Contemporary Portrait',
      category: 'Canvas Artworks',
      image: lookupImage(35, 10),
    },
  ];

  return (
    <Section className="py-24 md:py-32" id="projects">
      <Container>
        <div className="text-center mb-16">
          <SectionLabel>Recent Projects</SectionLabel>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal">
            Stories told through art
          </h2>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default RecentProjectsSection;
