import Image from "next/image";

export const ImageContentful = ({ src, alt, layout, className, priority }) => {
  const image_loader = ({ src, width }) => {
    return `https://images.ctfassets.net/snep566vvl34/${src}?w=${width}`;
  };

  return <Image src={src} alt={alt} layout={layout} className={className} loader={image_loader} priority={priority} />;
};
