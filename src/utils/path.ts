import { useRouter } from 'next/router';

/**
 * Utility function to get the correct path for assets considering the basePath
 * @param path The relative path to the asset
 * @returns The correct path with basePath if needed
 */
export function getAssetPath(path: string): string {
  // In development, use the path as is
  if (process.env.NODE_ENV !== 'production') {
    return path;
  }
  
  // In production, prepend the basePath
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `/Resume/${cleanPath}`;
} 