/**
 * Container - Consistent max-width container with padding
 */
const Container = ({ children, className = '', narrow = false }) => {
  return (
    <div
      className={`
        mx-auto px-6 md:px-12 lg:px-16
        ${narrow ? 'max-w-4xl' : 'max-w-7xl'}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Container;
