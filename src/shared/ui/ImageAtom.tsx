const ImageAtom: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <img src={src} alt={alt} className="w-full object-cover" />
);
export default ImageAtom;
