import { Layout } from "./Base";

export const CategoryPageQuote = ({ quote, author }) => {
  return (
    <section id="kundesitat" className="bg-neutral_300 text-neutral_700">
      <Layout c="flex md:justify-center">
        <div className="w-100 lg:max-w-620 flex flex-col py-32 md:py-56 lg:py-96">
          <p className=" mb-16">{quote}</p>
          <span className=" font-semibold">– {author}</span>
        </div>
      </Layout>
    </section>
  );
};
