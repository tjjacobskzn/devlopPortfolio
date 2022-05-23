import Layout from "../components/MyLayout";
import Script from "next/script"

// this is my contact file. it holds most of my contact details for recruiters to contact me.

// css in JSX format
const head = {
  marginBottom: 30,
};

export default () => (
  <Layout>
  <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-8DY0SPBTX0"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8DY0SPBTX0');
        `}
      </Script>
    <h2 style={head}>Contact details</h2>
    <h4>Cell: +27 79 124 0676</h4>
    <h4>Email : tjnjacobs1@gmail.com</h4>
  </Layout>
);
