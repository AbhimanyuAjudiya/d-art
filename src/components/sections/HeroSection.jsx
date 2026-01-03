import { useState, useEffect } from 'react';
import { Section, Container, Button } from '../common';

/**
 * HeroSection - Full viewport hero with elegant branding
 */
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Section dark fullHeight className="relative flex items-center justify-center">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal/90" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-sage/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-forest/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10 text-center">
        <div
          className={`
            transition-all duration-1000 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          {/* Studio name */}
          <h1
            className="
              font-serif text-5xl md:text-7xl lg:text-8xl
              font-normal tracking-tight
              text-cream mb-6
            "
          >
            D Art Studio
          </h1>

          {/* Tagline */}
          <p
            className={`
              font-serif text-xl md:text-2xl lg:text-3xl
              font-light italic
              text-cream/80 mb-4
              transition-all duration-1000 delay-200 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            Transforming spaces through artistic excellence
          </p>

          {/* Location */}
          <p
            className={`
              font-sans text-sm tracking-[0.25em] uppercase
              text-sage mb-12
              transition-all duration-1000 delay-300 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
          </p>

          {/* CTA Button */}
          <div
            className={`
              transition-all duration-1000 delay-500 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            <Button variant="outline" href="#gallery">
              View Work
            </Button>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div
        className={`
          absolute bottom-12 left-1/2 -translate-x-1/2
          transition-all duration-1000 delay-700 ease-out
          ${isVisible ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-sage/50 to-transparent" />
      </div>
    </Section>
  );
};

export default HeroSection;
