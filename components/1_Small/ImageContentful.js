import Image from "next/image";

export const ImageContentful = ({ src, alt, layout, className, priority, height, width }) => {
  const image_loader = ({ src, width }) => {
    return `https://images.ctfassets.net/snep566vvl34/${src.slice(42)}?w=${width}`;
  };

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      layout={layout}
      className={className}
      loader={image_loader}
      priority={priority}
    />
  );
};
