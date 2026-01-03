/**
 * ArtImage - Image component optimized for art gallery display
 */
const ArtImage = ({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-square',
  hover = true,
}) => {
  return (
    <div
      className={`
        overflow-hidden rounded-2xl
        ${aspectRatio}
        ${className}
      `}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`
          w-full h-full object-cover
          transition-all duration-700 ease-out
          ${hover ? 'hover:scale-105 hover:opacity-90' : ''}
        `}
      />
    </div>
  );
};

export default ArtImage;
