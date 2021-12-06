import { FourFourFour, FourFourThree, FourSixFour, Grid, Layout, SectionNav, TwoFourTwo } from "../../1_Small/Base";
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
            <TwoFourTwo c="lg:col-start-6 mb-24 md:mb-56 lg:mb-0">
              <FooterHeading>Navigasjon</FooterHeading>
              <div className="flex flex-col">
                <FooterLink href="/">Hjem</FooterLink>
                <FooterLink href="mat-og-vin">Mat & Vin</FooterLink>
                <FooterLink href="sommerfest-i-hvaler">Festival</FooterLink>
                <FooterLink href="overnatting">Overnatting</FooterLink>
                <FooterLink href="kontakt-oss">Kontakt oss</FooterLink>
              </div>
            </TwoFourTwo>
            <TwoFourTwo>
              <FooterHeading>Arrangement</FooterHeading>
              <div className="flex flex-col">
                <FooterLink href="/bryllup">Bryllup</FooterLink>
                <FooterLink href="/kurs-og-konferanser">Kurs & Konferanser</FooterLink>
                <FooterLink href="/selskap">Selskap</FooterLink>
                <FooterLink href="/andre-arrangement">Andre arrangement</FooterLink>
              </div>
            </TwoFourTwo>
            <FourFourThree c="mb-24 md:mb-56 lg:mb-0">
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
            </FourFourThree>
          </Grid>
        </Layout>
      </SectionNav>
      <Layout>
        <div className="py-8 flex">
          <a href="https://skaidigital.no/" className="text-white underline border-r-1 border-white" target="blank">
            Nettside utviklet av Skai Digital
            <span className="mx-8">|</span>
          </a>
          <FooterLink href="/personvern">Personvern</FooterLink>
          <span className="mx-8">|</span>
          <FooterLink href="/sitemap.xml">Sitemap</FooterLink>
        </div>
      </Layout>
    </footer>
  );
};
