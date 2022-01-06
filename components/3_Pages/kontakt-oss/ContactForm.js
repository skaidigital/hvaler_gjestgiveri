import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  FourEightEight,
  FourEightSix,
  FourFourFour,
  FourFourThree,
  FourSixEight,
  FourSixSix,
  Grid,
} from "../../1_Small/Base";

export const ContactForm = () => {
  const [formSent, setFormSent] = useState(false);

  const onSubmit = (data) => {
    setFormSent(true);
    const form_data = JSON.stringify(data);

    fetch("https://formspree.io/f/xdobkpyy", {
      method: "POST",
      body: form_data,
      headers: {
        Accept: "application/json",
      },
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onBlur",
  });

  const SubmittedFormConfirmation = () => {
    return (
      <Grid c="bg-primary_500 my-32 md:my-56 lg:my-96">
        <FourSixEight c="md:col-start-2 lg:col-start-3 py-32 md:py-56 lg:py-96 ">
          <div className="text-h4 md:text-h3 lg:text-h2 font-semibold flex px-16 md:px-0">
            {check} Vi har mottatt din henvendelse! <br />
            Vi svarer deg så snart vi har anledning!
          </div>
        </FourSixEight>
      </Grid>
    );
  };

  return formSent ? (
    <SubmittedFormConfirmation />
  ) : (
    <form
      onSubmit={handleSubmit(onSubmit)}
      id="kontaktskjema"
      className="my-56 md:my-96 lg:my-160"
    >
      <Grid>
        {/* //! name */}
        <FourFourFour c="lg:col-start-3">
          <div className="flex flex-col ">
            <div className="flex flex-col bg-white">
              <label
                htmlFor="name"
                className={`${
                  !errors.name
                    ? "text-secondary_700 focus-within:border-secondary_700 focus-within:border-2"
                    : "text-danger_700 border-danger_700"
                } flex flex-col text-body_small font-semibold text-secondary_700 border-1 border-neutral_100 p-8 rounded-4 border-2`}
              >
                <div className="flex items-center py-4">
                  {/* <span className="mr-8">{email}</span> */}
                  *Hva er ditt navn?
                </div>
                <input
                  name="name"
                  {...register("name", {
                    required: "Vi ønsker gjerne å vite hvem du er!",
                  })}
                  autoComplete="name"
                  className="text-body_regular font-medium  outline-none text-neutral_700 focus:text-neutral_700 mt-4"
                />
              </label>
            </div>
            <div className="h-18 mb-16">
              {errors.name && (
                <span className="flex px-8 text-body_medium text-danger_700 font-semibold bg-danger_50">
                  {errors.name.message}
                </span>
              )}
            </div>
          </div>
        </FourFourFour>

        {/* //! company */}
        <FourFourFour c="lg:col-start-7">
          <div className="flex flex-col ">
            <div className="flex flex-col bg-white">
              <label
                htmlFor="company"
                className={`${
                  !errors.company
                    ? "text-secondary_700 focus-within:border-secondary_700 focus-within:border-2"
                    : "text-danger_700 border-danger_700"
                } flex flex-col text-body_small font-semibold text-secondary_700 border-1 border-neutral_100 p-8 rounded-4 border-2 `}
              >
                <div className="flex items-center">
                  {/* <span className="mr-8">{email}</span> */}
                  Hva er din arbeidsplass?
                  <span className="py-4 px-8 text-body_small bg-neutral_300 rounded-rund ml-4 text-black">
                    Valgfritt
                  </span>
                </div>
                <input
                  name="company"
                  {...register("company", {})}
                  autoComplete="organization"
                  className="text-body_regular font-medium  outline-none text-neutral_700 focus:text-neutral_700 mt-4"
                />
              </label>
            </div>
          </div>
          <div className="h-18 mb-16" />
        </FourFourFour>

        {/* //! email */}
        <FourFourFour c="lg:col-start-3">
          <div className="flex flex-col ">
            <div className="flex flex-col bg-white">
              <label
                htmlFor="email"
                className={`${
                  !errors.email
                    ? "text-secondary_700 focus-within:border-secondary_700 focus-within:border-2"
                    : "text-danger_700 border-danger_700"
                } flex flex-col text-body_small font-semibold text-secondary_700 border-1 border-neutral_100 p-8 rounded-4 border-2 `}
              >
                <div className="flex items-center py-4">
                  {/* <span className="mr-8">{email}</span> */}
                  *Hva er din e-epostadresse?
                </div>
                <input
                  name="email"
                  {...register("email", {
                    required: "Skriv en e-post vi kan nå deg på!",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Ser ikke ut som dette er en e-post",
                    },
                  })}
                  autoComplete="email"
                  className="text-body_regular font-medium  outline-none text-neutral_700 focus:text-neutral_700 mt-4"
                />
              </label>
            </div>
            <div className="h-18 mb-16">
              {errors.email && (
                <span className="flex px-8 text-body_medium text-danger_700 font-semibold bg-danger_50">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>
        </FourFourFour>

        {/* //! phone number */}
        <FourFourFour c="lg:col-start-7">
          <div className="flex flex-col ">
            <div className="flex flex-col bg-white">
              <label
                htmlFor="phone"
                className={`${
                  !errors.phone
                    ? "text-secondary_700 focus-within:border-secondary_700 focus-within:border-2"
                    : "text-danger_700 border-danger_700"
                } flex flex-col text-body_small font-semibold text-secondary_700 border-1 border-neutral_100 p-8 rounded-4 border-2 `}
              >
                <div className="flex items-center">
                  {/* <span className="mr-8">{email}</span> */}
                  Hva er ditt telefonnummer?{" "}
                  <span className="py-4 px-8 text-body_small bg-neutral_300 rounded-rund ml-4 text-black">
                    Valgfritt
                  </span>
                </div>
                <input
                  name="phone"
                  {...register("phone", {})}
                  autoComplete="tel-national"
                  className="text-body_regular font-medium  outline-none text-neutral_700 focus:text-neutral_700 mt-4"
                />
              </label>
            </div>
          </div>
          <div className="h-18 mb-16" />
        </FourFourFour>
        <FourEightEight c="lg:col-start-3">
          <div className="flex flex-col flex-1 mb-32 bg-white">
            <label
              htmlFor="message"
              className={`flex flex-col text-body_small font-semibold text-secondary_700 border-1 border-neutral_100 p-8 rounded-4 focus-within:border-primary_700 `}
            >
              <div className="flex items-center">
                {/* <span className="mr-8">{person}</span> */}
                Skrive en melding?{" "}
                <span className="py-4 px-8 text-body_small bg-neutral_300 rounded-rund ml-4 text-black">
                  Valgfritt
                </span>
              </div>
              <input
                name="message"
                {...register("message")}
                className="text-body_regular font-medium  outline-none text-neutral_300 focus:text-neutral_700"
              />
            </label>
          </div>
        </FourEightEight>
        <FourEightEight c="lg:col-start-3">
          <label htmlFor="consent">
            <input
              name="consent"
              type="checkbox"
              value="true"
              {...register("consent", {
                required: "Du må samtykke før vi lar deg sende denne!",
              })}
            />
            <span className="text-body_medium ml-8">
              Ved å sende inn skjemaet samtykker du til at vi lagrer
              informasjonen din. Du kan når som helst trekke tilbake samtykket.
              Les mer om hvordan vi håndterer dine data i vår{" "}
              <Link href="/personvern">
                <a target="blank" className="text-body_medium underline">
                  personvernerklæring.
                </a>
              </Link>
            </span>
          </label>
          <div className="h-18 mb-16">
            {errors.consent && (
              <span className="flex px-8 text-body_medium text-danger_700 font-semibold bg-danger_50">
                {errors.consent.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="py-16 text-center text-white bg-primary_700 font-semibold w-100"
          >
            Send min forespørsel
          </button>
        </FourEightEight>
      </Grid>
    </form>
  );
};

const check = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-check mt-8 mr-16 rounded-circle bg-secondary_700 stroke-primary_500 p-4"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);
