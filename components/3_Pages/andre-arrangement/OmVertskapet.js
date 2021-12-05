import { FourEightSix } from "../../1_Small/Base";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { options } from "../../1_Small/ContentfulOptions";
import { ImageContentful } from "../../1_Small/ImageContentful";

export const OmVertskapet = ({ content, image }) => {
  return (
    <>
      <FourEightSix c="flex justify-center flex-col">
        <h2>Om vertskapet</h2>
        {documentToReactComponents(content.json, options)}
      </FourEightSix>
      <FourEightSix c="relative h-240 md:h-400">
        <ImageContentful src={image.url} alt={image.alt} layout="fill" className="object-cover" />
      </FourEightSix>
    </>
  );
};
