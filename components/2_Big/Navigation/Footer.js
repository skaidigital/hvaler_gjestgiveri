import { FourFourFour, FourFourThree, Grid, Layout, SectionNav } from "../../1_Small/Base";
import { FooterEmailCTA } from "../../1_Small/FooterEmailCTA";
import { FooterHeading } from "../../1_Small/FooterHeading";
import { FooterLink } from "../../1_Small/FooterLink";

export const Footer = () => {
  return (
    <footer className="bg-secondary_700">
      <SectionNav id="footer-main-content" c="border-1 border-b border-neutral_200 bg-secondary_700">
        <Layout>
          <Grid c=" text-white">
            <FourFourFour>
              <FooterEmailCTA />
            </FourFourFour>
            <FourFourThree c="lg:col-start-6">
              <FooterHeading>Navigasjon</FooterHeading>
              <div className="flex flex-col">
                <FooterLink href="/">Hjem</FooterLink>
                <FooterLink href="mat-og-vin">Mat & Vin</FooterLink>
                <FooterLink href="arrangement">Arrangement</FooterLink>
                <FooterLink href="sommerfest-i-hvaler">Festival</FooterLink>
                <FooterLink href="kontakt-oss">Kontakt oss</FooterLink>
              </div>
            </FourFourThree>
            <FourFourFour>
              <FooterHeading>Epost</FooterHeading>
              <a className="text-white underline" target="blank" href="mailto:mail@gmail.com">
                mail@mailersen.com
              </a>
              <FooterHeading>Telefonnummer</FooterHeading>
              <a className="text-white underline" target="blank" href="tel:2193012">
                21389210
              </a>
              <FooterHeading>Adresse</FooterHeading>
              Adresse adressesen
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
        </div>
      </Layout>
    </footer>
  );
};
