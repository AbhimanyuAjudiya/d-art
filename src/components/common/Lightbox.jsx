import { useEffect } from 'react';

const Lightbox = ({ image, onClose }) => {
  useEffect(() => {
    if (!image) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [image, onClose]);

  if (!image) {
    return null;
  }

  return (
    <div
      className="
        fixed inset-0 z-[60]
        bg-charcoal/75 backdrop-blur
        flex items-center justify-center
        px-4 md:px-10
        pointer-events-auto
        lightbox-fade
      "
      onClick={onClose}
      role="button"
      tabIndex={-1}
      aria-label="Close gallery lightbox"
    >
      <div className="relative w-full max-w-6xl">
        <img
          src={image.src}
          alt={image.fileName}
          className="
            w-full max-h-[85vh]
            object-contain rounded-[32px]
            shadow-2xl border border-transparent
            lightbox-zoom
          "
        />
      </div>
    </div>
  );
};

export default Lightbox;
