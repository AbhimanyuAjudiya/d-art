import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../common';

/**
 * Navbar - Minimal, elegant navigation
 */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500 ease-out
        ${isScrolled 
          ? 'bg-charcoal/95 backdrop-blur-md py-4 shadow-lg' 
          : 'bg-transparent py-6'
        }
      `}
    >
      <Container>
        <div className="flex items-center justify-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="font-serif text-xl md:text-2xl text-cream hover:text-sage transition-colors duration-300"
          >
            D Art Studio
          </Link>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
