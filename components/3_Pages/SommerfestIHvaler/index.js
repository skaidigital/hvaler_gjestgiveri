import { Grid, Layout } from "../../1_Small/Base";
import { NavbarSommerfest } from "../../2_Big/Navigation/NavbarSommerfest";
import { ArtisterSommfest } from "./ArtisterSommfest";
import { FestivaldagerSommerfest } from "./FestivaldagerSommerfest";
import { HeroSommerfest } from "./HeroSommerfest";
import { InfoSommerfest } from "./InfoSommerfest";
import { NextSeo } from "next-seo";
import { ScrollToTopArrow } from "./ScrollToTopArrow";
import { SommerfestGalleri } from "./sommerfest-galleri";

export const SommerfestIHvaler = ({ content, dates }) => {
  const reversed_dates = [...dates].reverse();

  return (
    <>
      <NextSeo
        title={content.hovedtittel}
        // description={}
        openGraph={{
          title: content.hovedtittel,
          // description: "",
          images: [
            {
              url: content.tittelbilde.url,
              width: content.tittelbilde.width,
              height: content.tittelbilde.height,
              alt: content.tittelbilde.description,
            },
          ],
        }}
      />
      <div className="relative">
        <div className="relative">
          <ScrollToTopArrow />
          <div className="w-240 h-480 md:w-400 md:h-800  inline-block half-circle mt-96 md:mt-64 lg:mt-80 sommerfest-gradient absolute z-1 right-0"></div>
          <HeroSommerfest
            hero_seo_heading={content.seoHeading}
            hero_heading={content.hovedtittel}
            hero_body_text={content.brdtekstTittel}
            hero_image_src={content.tittelbilde.url}
            hero_image_alt={content.tittelbilde.description}
            hero_image_width={content.tittelbilde.width}
            hero_image_height={content.tittelbilde.height}
          />
          <div className="w-240 h-480 md:w-400 md:h-800 lg:w-640 lg:h-1280 inline-block half-circle-left mt-560 md:mt-800 lg:mt-240 sommerfest-gradient absolute z-0 left-0"></div>

          <InfoSommerfest
            info_heading={content.tittelKonsertpakke}
            info_content={content.konsertpakkeInnhold.json}
            info_image_src={content.bildeKonsertpakke.url}
            info_image_alt={content.bildeKonsertpakke.description}
            info_image_width={content.bildeKonsertpakke.width}
            info_image_height={content.bildeKonsertpakke.height}
          />
        </div>
        {content.bilderUtvalgteArtisterCollection.items.length != 0 && (
          <ArtisterSommfest
            artist_info={content.artisterInnhold.json}
            artist_images={content.bilderUtvalgteArtisterCollection}
            artist_names={content.navnUtvalgteArtister}
          />
        )}
        {dates.length != 0 && (
          <FestivaldagerSommerfest dates={reversed_dates} />
        )}
        <SommerfestGalleri
          gallery={content.bildegalleriSommerfestIHvalerCollection}
        />
      </div>
    </>
  );
};
