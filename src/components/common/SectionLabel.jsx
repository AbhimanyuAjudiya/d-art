/**
 * SectionLabel - Small accent label for section identification
 */
const SectionLabel = ({ children, light = false }) => {
  return (
    <span
      className={`
        inline-block
        text-xs tracking-[0.3em] uppercase
        font-sans font-medium
        ${light ? 'text-sage' : 'text-sage'}
        mb-6
      `}
    >
      {children}
    </span>
  );
};

export default SectionLabel;
