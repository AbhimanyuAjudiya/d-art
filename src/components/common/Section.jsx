/**
 * Section - Reusable wrapper component for consistent spacing and layout
 */
const Section = ({
  children,
  className = '',
  dark = false,
  id = '',
  fullHeight = false,
}) => {
  const baseClasses = `
    ${fullHeight ? 'min-h-screen' : ''} 
    ${dark ? 'bg-charcoal text-cream' : 'bg-cream text-charcoal'}
    transition-colors duration-500
  `;

  return (
    <section id={id} className={`${baseClasses} ${className}`}>
      {children}
    </section>
  );
};

export default Section;
