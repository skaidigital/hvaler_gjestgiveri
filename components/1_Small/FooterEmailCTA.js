import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
export const FooterEmailCTA = () => {
  const [formSent, setFormSent] = useState(false);

  const onSubmit = (data) => {
    setFormSent(true);
    const form_data = JSON.stringify(data);

    fetch("https://formspree.io/f/mrgjbojl", {
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

  return formSent == false ? (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col mt-16 md:mt-0 mb-24 md:mb-56 lg:mb-0"
    >
      <h2 className="text-white">Hold kontakten!</h2>
      <p className="text-white text-body_medium mb-24">
        Vil du få et nyhetsbrev i ny og né med bilder og nyheter fra oss? Meld
        deg på nyhetsbrevet vårt!
      </p>
      <div className="flex">
        <div className="flex flex-col flex-1 bg-neutral_300 w-60">
          <label
            htmlFor="email"
            className={`${
              !errors.email
                ? "text-black focus-within:border-secondary_700 "
                : "text-danger_700 border-danger_700"
            } 
                          flex flex-col text-body_medium font-semibold text-neutral-700 border-1 border-neutral_100 pl-8 py-4 rounded-4`}
          >
            <div className="flex items-center mb-4">
              {/* <span className="mr-8">{cart}</span> */}
              Hva er din e-post?
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
              className=" resize-none text-body_regular font-medium bg-neutral_300  outline-none text-neutral_700 focus:text-neutral_900"
            />
          </label>
        </div>

        {/* <div className="h-18 mb-24">
                        {errors.review_message && (
                          <span className="flex px-8 rounded-4 text-body_small text-danger_700 font-semibold bg-danger_50">
                            {errors.review_message.message}
                          </span>
                        )}
                      </div> */}
        <button
          className="bg-primary_700 text-body_medium px-24 font-semibold"
          type="submit"
        >
          Meld meg på
        </button>
      </div>
      {errors.email && (
        <span className="mb-16 flex px-8 py-8 text-body_medium text-danger_700 font-semibold bg-danger_50">
          {errors.email.message}
        </span>
      )}
      <label htmlFor="consent" className="mt-8">
        <input
          name="consent"
          type="checkbox"
          value="true"
          {...register("consent", {
            required: "Du må samtykke før vi lar deg sende denne!",
          })}
        />
        <span className="text-body_medium text-neutral_50  ml-8">
          Ved å sende inn skjemaet samtykker du til at vi lagrer informasjonen
          din. Du kan når som helst trekke tilbake samtykket. Les mer om hvordan
          vi håndterer dine data i vår{" "}
          <Link
            href="/personvern"
            target="blank"
            className="text-body_medium underline text-neutral_50  "
          >
            personvernerklæring.
          </Link>
        </span>
      </label>
      <div className="h-18 mb-16">
        {errors.consent && (
          <span className="flex p-8 text-body_medium text-white font-semibold bg-primary_700">
            {errors.consent.message}
          </span>
        )}
      </div>
    </form>
  ) : (
    <div>
      <h2 className="text-h4 md:text-h3 text-white">
        Takk for at du registrerte deg!
      </h2>
      <div className="text-neutral_200">
        Du er nå oppmeldt til vårt nyhetsbrev!
      </div>
    </div>
  );
};
