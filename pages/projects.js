import Layout from "../components/MyLayout";
import Link from "next/link";

// this is my "projects" file. It holds numerous web projects that I have created in this bootcamp. They are all linked
// as to let the user view their code or deployed app.

// css in JSX format.
const head = {
  marginBottom: 50,
};
const head2 = {
  marginBottom: 20,
};

export default () => (
  <Layout>
    <h1 style={head}>Projects</h1>

    <h2 style={head2}>Here is a list of my web projects with links to them</h2>

    {/* creating an unordered list to keep my web projects in <li> tags */}
    <ul>
      <li>
        {/* we use the <Link> tag to 'link' whatever url we use in the 'href' */}
        <Link href="https://arcane-inlet-00578.herokuapp.com/">
          {/* within the anchor tag we use 'target='_blank' to open the links in new tabs instead of over our web site */}
          <a target="_blank">Card matching game</a>
        </Link>
      </li>

      <li>
        <Link href="https://github.com/tjjacobskzn/level2-capstone.git">
          <a target="_blank">Music searching app</a>
        </Link>
      </li>
      <li>
        <Link href="https://github.com/tjjacobskzn/Task-12-Level-2.git">
          <a target="_blank">Github repository: Card Matching game</a>
        </Link>
      </li>
      <li>
        <Link href="https://github.com/tjjacobskzn/TJ-Jacobs_CV.git">
          <a target="_blank">Github repository CV example</a>
        </Link>
      </li>
    </ul>
  </Layout>
);
