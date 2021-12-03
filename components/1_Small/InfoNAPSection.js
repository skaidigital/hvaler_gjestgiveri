import { FourEightFive, FourEightSix } from "./Base";
import { CardContainer } from "./CardContainer";

export const InfoNAPSection = ({ email, phone_number, adress }) => {
  return (
    <>
      <FourEightFive>
        <h2 className="mb-16">Kom og besøk oss!</h2>
        <div className="flex flex-col mb-16">
          <span className="font-semibold">Epost</span>
          <a className="underline" href={`mailto:${email}`}>
            {email}
          </a>
        </div>

        <div className="flex flex-col mb-16">
          <span className="font-semibold">Telefonnummer</span>
          <a className="underline" href={`tel:${phone_number}`}>
            {phone_number}
          </a>
        </div>

        <div className="flex flex-col mb-16">
          <span className="font-semibold">Adresse</span>
          <span>{adress}</span>
        </div>
      </FourEightFive>
      <FourEightSix>
        <div className="bg-black"></div>
      </FourEightSix>
    </>
  );
};
