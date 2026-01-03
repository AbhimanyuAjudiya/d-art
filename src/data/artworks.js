const imageModules = import.meta.glob('../assets/images/*.{jpg,JPG,jpeg,png}', {
  eager: true,
  import: 'default',
});

const artworkImages = Object.entries(imageModules)
  .map(([path, src]) => ({
    src,
    fileName: path.split('/').pop() || 'artwork',
  }))
  .sort((a, b) => a.fileName.localeCompare(b.fileName));

const getSlice = (start, count) => artworkImages.slice(start, start + count);

export { artworkImages, getSlice };
