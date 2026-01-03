/**
 * Button - Reusable button component with variants
 */
import { Link } from 'react-router-dom';

const Button = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
  href,
  to,
}) => {
  const baseClasses = `
    inline-block px-8 py-4 
    font-sans text-sm tracking-widest uppercase
    rounded-full
    transition-all duration-500 ease-out
    cursor-pointer
  `;

  const variants = {
    primary: `
      bg-sage text-charcoal
      hover:bg-forest hover:text-cream
      border border-transparent
    `,
    outline: `
      bg-transparent text-cream
      border border-cream/40
      hover:bg-cream/10 hover:border-cream
    `,
    dark: `
      bg-charcoal text-cream
      hover:bg-forest
      border border-transparent
    `,
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
