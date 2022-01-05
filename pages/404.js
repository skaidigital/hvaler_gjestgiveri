import { FourFourSix, Grid, Layout } from "../components/1_Small/Base";
import { Navbar } from "../components/2_Big/Navigation/Navbar";
import { Footer } from "../components/2_Big/Navigation/Footer";
import { PrimaryButtonHref } from "../components/1_Small/Buttons";

export const Feil = () => {
  return (
    <div>
      <div className="min-h-100 border flex flex-col justify-between">
        <Navbar />
        <Layout>
          <Grid>
            <FourFourSix c="md:col-start-3 lg:col-start-4 my-56 md:my-96 lg:my-160">
              <h1 className="mb-16 text-neutral_900">Woops!</h1>
              <p className="text-neutral_700 mb-32">
                Denne linken ser ikke ut til å funke!
                <br /> Vennligst gå til en annen kategori eller tilbake til
                forsiden
              </p>
              <PrimaryButtonHref href="/" text="Tilbake til forsiden" />
            </FourFourSix>
          </Grid>
        </Layout>
        <Footer />
      </div>
    </div>
  );
};

export default Feil;
