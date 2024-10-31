import { motion } from "framer-motion";
import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
interface ImageAtomProps {
  images: string[];
  alt: string;
}

const ImageAtom: React.FC<ImageAtomProps> = ({ images, alt }) => {
  const getRandomIndex = () => Math.floor(Math.random() * images.length);

  const [currentIndex, setCurrentIndex] = useState(getRandomIndex);

  const nextSlide = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full"
      >
        <img
          src={images[currentIndex]}
          alt={`${alt} ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2"
            aria-label="Previous image"
          >
            <ChevronLeftIcon style={{ width: "2rem", height: "2rem" }} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2"
            aria-label="Next image"
          >
            <ChevronRightIcon style={{ width: "2rem", height: "2rem" }} />
          </button>

          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  currentIndex === index ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageAtom;
