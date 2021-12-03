import { camelCase } from "../helpers/toCamelCase";
import { CardContainer } from "./CardContainer";

export const HorizontalCardCTA = ({ SEOHeading, heading, children }) => {
  return (
    <CardContainer>
      <h2 className="text-body_small uppercase font-medium tracking-widest">{SEOHeading}</h2>
      <h3 className="text-h3 lg:text-h2">{camelCase(heading)}</h3>
      {children}
    </CardContainer>
  );
};
