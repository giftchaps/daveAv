// Returns a URL-encoded SVG placeholder for use in Next.js Image src
export function svgPlaceholder(
  width: number,
  height: number,
  label: string,
  bg = '#0d2a6e',
  fg = '#ffffff'
): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="${width}" height="${height}" fill="${bg}"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="14" fill="${fg}" opacity="0.6">${label}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
