import { Grid, Layout } from "../../1_Small/Base";
import { NavbarSommerfest } from "../../2_Big/Navigation/NavbarSommerfest";
import { ArtisterSommfest } from "./ArtisterSommfest";
import { FestivaldagerSommerfest } from "./FestivaldagerSommerfest";
import { HeroSommerfest } from "./HeroSommerfest";
import { InfoSommerfest } from "./InfoSommerfest";

export const SommerfestIHvaler = ({ content }) => {
  console.log(content);
  return (
    <div className="relative">
      <div className="relative">
        <div className="w-240 h-480 md:w-400 md:h-800  inline-block half-circle mt-240 md:mt-160 lg:mt-80 sommerfest-gradient absolute z-1 right-0"></div>
        <HeroSommerfest
          hero_seo_heading={content.seoHeading}
          hero_heading={content.hovedtittel}
          hero_body_text={content.brdtekstTittel}
          hero_image_src={content.tittelbilde.url}
          hero_image_alt={content.tittelbilde.description}
          hero_image_width={content.tittelbilde.width}
          hero_image_height={content.tittelbilde.height}
        />
        <div className="w-240 h-480 md:w-400 md:h-800 lg:w-640 lg:h-1280 inline-block half-circle-left mt-560 md:mt-360 lg:mt-240 sommerfest-gradient absolute z-0 left-0"></div>
        <InfoSommerfest
          info_heading={content.tittelKonsertpakke}
          info_content={content.konsertpakkeInnhold.json}
          info_image_src={content.bildeKonsertpakke.url}
          info_image_alt={content.bildeKonsertpakke.description}
          info_image_width={content.bildeKonsertpakke.width}
          info_image_height={content.bildeKonsertpakke.height}
        />
      </div>
      <ArtisterSommfest
        artist_info={content.artisterInnhold.json}
        artist_images={content.bilderUtvalgteArtisterCollection}
        artist_names={content.navnUtvalgteArtister}
      />
      <FestivaldagerSommerfest />
    </div>
  );
};
