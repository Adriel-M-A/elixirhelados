import { useState } from "react";
import { getImageUrl } from "../lib/imageUtils"; // Ruta corregida

/**
 * Componente de imagen con fallback automático mejorado
 * - Estados de loading y error mejorados
 * - Mejor accesibilidad
 * - Animaciones suaves
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

  // Si no hay src o hay error, muestra el fallback mejorado
  if (!src || imageError) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-[#fff8dc] to-[#faf0e6] ${className}`}
        role="img"
        aria-label={`Imagen placeholder para ${alt}`}
      >
        <div
          className="text-4xl animate-bounce"
          style={{ animationDuration: "2s" }}
        >
          {fallbackIcon}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      {/* Loading skeleton mejorado */}
      {isLoading && (
        <div
          className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 ${className}`}
        >
          <div className="animate-pulse flex flex-col items-center space-y-2">
            <div className="text-2xl animate-bounce">🍦</div>
            <div className="h-2 w-16 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      )}

      <img
        src={imageUrl}
        alt={alt}
        className={`${className} ${
          isLoading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-500 ease-in-out`}
        onLoad={handleImageLoad}
        onError={handleImageError}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};
