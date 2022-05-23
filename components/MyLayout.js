import Head from "next/head";
import Header from "./Header";
import Script from "next/script"

// css in JSX format
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
};

// this will be the overall layout of our page styled with above css.
const Layout = (props) => (
  <div>
    <Head>
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
    </Head>

    <div style={layoutStyle}>
      <Header />
      <hr></hr>
      {props.children}
    </div>
  </div>
);

export default Layout;
