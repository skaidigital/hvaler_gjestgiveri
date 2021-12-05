import { FourFourFour, FourFourThree, FourSixFour, Grid, Layout, SectionNav } from "../../1_Small/Base";
import { FooterEmailCTA } from "../../1_Small/FooterEmailCTA";
import { FooterHeading } from "../../1_Small/FooterHeading";
import { FooterLink } from "../../1_Small/FooterLink";

export const Footer = () => {
  return (
    <footer className="bg-secondary_700">
      <SectionNav id="footer-main-content" c="border-1 border-b border-neutral_200 bg-secondary_700">
        <Layout>
          <Grid c=" text-white">
            <FourSixFour>
              <FooterEmailCTA />
            </FourSixFour>
            <FourFourThree c="lg:col-start-6 mb-24 md:mb-56 lg:mb-0">
              <FooterHeading>Navigasjon</FooterHeading>
              <div className="flex flex-col">
                <FooterLink href="/">Hjem</FooterLink>
                <FooterLink href="mat-og-vin">Mat & Vin</FooterLink>
                <FooterLink href="arrangement">Arrangement</FooterLink>
                <FooterLink href="sommerfest-i-hvaler">Festival</FooterLink>
                <FooterLink href="kontakt-oss">Kontakt oss</FooterLink>
              </div>
            </FourFourThree>
            <FourFourFour c="mb-24 md:mb-56 lg:mb-0">
              <FooterHeading>Epost</FooterHeading>
              <a className="text-white underline" target="blank" href="mailto:post@hvalergjestegiveri.no">
                post@hvalergjestegiveri.no
              </a>
              <FooterHeading>Telefonnummer</FooterHeading>
              <a className="text-white underline" target="blank" href="tel:69378200">
                69 37 82 00
              </a>
              <FooterHeading>Adresse</FooterHeading>
              Vestre veien 132, 1680 Skjærhalden
            </FourFourFour>
          </Grid>
        </Layout>
      </SectionNav>
      <Layout>
        <div className="py-8 flex">
          <a href="https://skaidigital.no/" className="text-white underline border-r-1 border-white">
            Nettside utviklet av Skai Digital
            <span className="mx-8">|</span>
          </a>
          <a className="text-white underline">Personvern</a>
          <span className="mx-8">|</span>
          <a className="text-white underline">Sitemap</a>
        </div>
      </Layout>
    </footer>
  );
};
