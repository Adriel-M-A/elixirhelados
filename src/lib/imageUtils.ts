// src/utils/imageUtils.ts

/**
 * Utility function para obtener la URL correcta de las imágenes
 * Maneja tanto imágenes locales como URLs externas
 */
export const getImageUrl = (imageName: string): string => {
  // Si no hay imagen, retorna una imagen por defecto o vacío
  if (!imageName) {
    return "";
  }

  // Si es una URL completa (http/https), la retorna tal como está
  if (imageName.startsWith("http://") || imageName.startsWith("https://")) {
    return imageName;
  }

  // Para imágenes locales, construye la ruta correcta
  try {
    // Usa import.meta.url para obtener la ruta correcta en Vite
    return new URL(`../assets/${imageName}`, import.meta.url).href;
  } catch (error) {
    console.warn(`No se pudo cargar la imagen: ${imageName}`, error);
    return "";
  }
};

/**
 * Función para verificar si una imagen existe
 * Útil para mostrar un fallback si la imagen no se encuentra
 */
export const checkImageExists = (imageUrl: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = imageUrl;
  });
};
