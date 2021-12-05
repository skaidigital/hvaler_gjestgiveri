import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { FourEightEight } from "../../1_Small/Base";
import { options, options_sommerfest } from "../../1_Small/ContentfulOptions";
import { Hero } from "../../1_Small/Hero";

export const HeroContactPage = ({ content }) => {
  return (
    <Hero
      c="lg:col-start-3"
      imageSource={content.bildeKontaktside.url}
      imageAlt={content.bildeKontaktside.description}
      heading="Ta kontakt med oss!"
    >
      {documentToReactComponents(content.kontaktsideInnhold.json, options_sommerfest)}
    </Hero>
  );
};
