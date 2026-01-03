import { Section, Container, SectionLabel } from '../common';

/**
 * AboutSection - Editorial-style introduction to the studio
 */
const AboutSection = () => {
  return (
    <Section className="py-24 md:py-32 lg:py-40" id="about">
      <Container narrow>
        <div className="text-center">
          <SectionLabel>About Us</SectionLabel>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal mb-8 leading-tight">
            Where art meets architecture
          </h2>
          
          <div className="space-y-6 text-charcoal/80 text-lg md:text-xl leading-relaxed">
            <p>
              At D Art Studio, we believe every wall tells a story. Based in the heart of 
              Gujarat, we collaborate with architects, interior designers, and homeowners 
              to create bespoke artistic experiences that transform ordinary spaces into 
              extraordinary environments.
            </p>
            
            <p>
              Our philosophy is rooted in the delicate balance between tradition and 
              contemporary expression. Each brushstroke, every texture, and all creative 
              decisions are made with intention — crafting spaces that resonate with 
              emotion and stand the test of time.
            </p>
            
            <p className="font-serif text-xl md:text-2xl italic text-charcoal/70 pt-4">
              "Art is not what you see, but what you make others see."
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutSection;
