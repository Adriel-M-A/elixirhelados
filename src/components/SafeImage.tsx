// src/components/SafeImage.tsx
import { useState } from "react";
import { getImageUrl } from "../lib/imageUtils";

/**
 * Componente de imagen con fallback automático
 * Maneja la carga de imágenes con estados de loading y error
 */
interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackIcon?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = "",
  fallbackIcon = "🍦",
}) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const imageUrl = getImageUrl(src);

  const handleImageLoad = () => {
    setIsLoading(false);
    setImageError(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setImageError(true);
  };

  // Si no hay src o hay error, muestra el fallback
  if (!src || imageError) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-50 ${className}`}
      >
        <div className="text-4xl">{fallbackIcon}</div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div
          className={`absolute inset-0 flex items-center justify-center bg-gray-100 ${className}`}
        >
          <div className="animate-pulse">
            <div className="text-2xl">🍦</div>
          </div>
        </div>
      )}
      <img
        src={imageUrl}
        alt={alt}
        className={`${className} ${
          isLoading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
    </div>
  );
};
