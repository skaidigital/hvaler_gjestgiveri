import { camelCase } from "../helpers/toCamelCase";

export const HeadingGroup = ({ SEOHeading, heading, c }) => {
  return (
    <div className={`flex flex-col ${c}`}>
      <h2 className="text-body_small uppercase font-medium tracking-widest">
        {SEOHeading && SEOHeading.toUpperCase()}
      </h2>
      <h3 className="text-h3 lg:text-h2">{heading && camelCase(heading)}</h3>
    </div>
  );
};
