import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    // TODO Paste the GA tracking in the string below and uncomment the code in the <Head>-tag"
    const GA_MEASUREMENT_ID = "298360434";
    return (
      <Html lang="nb">
        <Head>
          <meta
            name="google-site-verification"
            content="s8uFtMKhLMi4slj-AIukxLAc_9WlrpQ6WOKWUoJL2y4"
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          {/* dangerouslySetInnerHTML=
{{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `,
          }} */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
