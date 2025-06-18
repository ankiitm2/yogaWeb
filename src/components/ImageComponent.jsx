import { useState } from "react";

const ImageComponent = ({
  src,
  alt,
  className,
  fallbackSrc = "/images/placeholder.jpg",
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
};

export default ImageComponent;
