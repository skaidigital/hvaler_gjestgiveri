import Image from "next/image";
import { ImageContentful } from "../../1_Small/ImageContentful";

export const EnkeltArrangement = ({ imageSource, imageAlt, imageWidth, imageHeight, heading, children }) => {
  return (
    <div className="flex flex-col mt-32 md:mt-56 lg:mt-96 ">
      <div className="relative h-240 md:h-400">
        <ImageContentful
          src={imageSource}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          layout="fill"
          className="mb-16"
        />
      </div>
      <h3 className="mt-16 lg:mt-24 ">{heading}</h3>
      {children}
    </div>
  );
};
