
export const getProxyUrl = (url: string | undefined): string => {
  if (!url) return '';
  
  // Pass through data URLs or local assets
  if (url.startsWith('data:') || url.startsWith('blob:')) return url;

  // Use wsrv.nl to proxy images. This bypasses Bilibili's hotlinking protection (403).
  // We also request WebP output for better performance.
  return `https://wsrv.nl/?url=${encodeURIComponent(url)}&output=webp`;
};
