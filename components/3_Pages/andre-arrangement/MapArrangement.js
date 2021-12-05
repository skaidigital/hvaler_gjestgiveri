import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { FourEightSix } from "../../1_Small/Base";
import { options } from "../../1_Small/ContentfulOptions";
import { EnkeltArrangement } from "./EnkeltArrangement";

export const MapArrangement = ({ arrangement }) => {
  console.log("I MapArrangement");
  console.log(arrangement);
  return arrangement.items.map((a, id) => {
    return (
      <FourEightSix key={id} c="grid justify-items-stretch">
        <EnkeltArrangement
          imageSource={a.bilde.url}
          imageAlt={a.bilde.description}
          imageWidth={a.bilde.width}
          imageHeight={a.bilde.height}
          heading={a.tittel}
        >
          {documentToReactComponents(a.innhold.json, options)}
        </EnkeltArrangement>
      </FourEightSix>
    );
  });
};
