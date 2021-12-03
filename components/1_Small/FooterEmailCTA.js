export const FooterEmailCTA = () => {
  return (
    <div className="flex flex-col mt-16 md:mt-0 mb-24 md:mb-56 lg:mb-0">
      <h2 className="text-white">Hold kontakten!</h2>
      <p className="text-white text-body_medium mb-24">
        Vil du få et nyhetsbrev i ny og né med bilder og nyheter fra oss? Meld deg på nyhetsbrevet vårt!
      </p>
      <div className="flex">
        <div className="flex flex-col flex-1 bg-neutral_300 w-60">
          <label
            htmlFor="product"
            className={`${
              ``
              // !errors.review_message
              //   ? "text-primary_700 focus-within:border-primary_700 focus-within:border-2"
              //   : "text-danger_700 border-danger_700"
            } 
                          flex flex-col text-body_medium font-semibold text-primary_700 border-1 border-neutral_100 pl-8 py-4 rounded-4`}
          >
            <div className="flex items-center mb-4">
              {/* <span className="mr-8">{cart}</span> */}
              Hva er din e-post?
            </div>
            <input
              name="review_message"
              // {...register("review_message", { required: "Skriv din omtale om produktet her" })}
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
        <button className="bg-primary_700 text-body_medium px-24 font-semibold" type="submit">
          Meld meg på
        </button>
      </div>
    </div>
  );
};
