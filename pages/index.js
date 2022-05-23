import Layout from "../components/MyLayout";
import Image from "react-bootstrap/Image";
import Head from "next/head";

// this is the 'landing page' for this app.

// css in JSX format.
const landingDiv = {
  marginTop: 40,
};
const photo = {
  width: 200,
  marginTop: 20,
};

export default () => (
  <Layout>
  <Head>
  <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-229683137-3"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-229683137-3', { page_path: window.location.pathname });
            `,
          }}
        />
  </Head>
    <div style={landingDiv}>
      <div>
        <h2>TJ Jacobs</h2>
        <h4>Web developer / Fishing guide</h4>
      </div>
      <div>
        {/* here I use a static image */}
        <Image style={photo} src="../static/images/myPhoto.jpeg" />
      </div>
    </div>
  </Layout>
);
