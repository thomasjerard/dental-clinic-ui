import { useState } from "react";

const ImageGallery = ({ images }) => {
  const [showAll, setShowAll] = useState(false);
  const initialCount = 3;

  const displayedImages = showAll ? images : images.slice(0, initialCount);
  const remainingCount = images.length - initialCount;

  return (
    <div className="image-gallery">
      <div className="image-grid">
        {displayedImages.map((src, index) => (
          <img key={index} src={src} alt={`img-${index}`} className="image-item" />
        ))}

        {!showAll && remainingCount > 0 && (
          <button className="show-more-button" onClick={() => setShowAll(true)}>
            +{remainingCount} more
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;