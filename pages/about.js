//Import the Link API to support client-side navigation
import Link from "next/link";
import Layout from "../components/MyLayout";

// css in JSX format
const heading1 = {
  marginBottom: 30,
};

const heading3 = {
  fontSize: 20,
  fontWeight: 700,
};

const div = {
  paddingRight: 20,
};

export default () => (
  <Layout>
    <h1 style={heading1}>About me</h1>

    <div style={div}>
      <hr></hr>
      <h2>Education</h2>
      <hr></hr>
      <h3 style={heading3}>Web development</h3>
      <p>I am currently studying Full-stack Web development</p>

      <h3 style={heading3}>Highschool</h3>
      <p>I graduated highschool at Richards bay highschool - class of 2021</p>
      <hr></hr>
      <h2>Work history</h2>
      <hr></hr>
      <h3 style={heading3}>RE Racing</h3>
      <p>
        I was raised in my family's automotive workshop. There I have been
        fabricating parts, building performance racing cars, wiring engine
        managements, machining and managing the workshop since I can remember
      </p>

      <h3 style={heading3}>Fishngo Boat storage</h3>
      <p>
        I worked in our family-owned boat storage facility since it opened in
        2017. There I did maintenance on overall exterior and interior spots,
        overhauled and serviced engines, learnt to work on fibreglass, worked as
        a deckhand for clients and experienced tactical forklift driving daily
      </p>
      <hr></hr>
      <h2>Passions and Hobbies</h2>
      <hr></hr>
      <h3 style={heading3}>Fishing</h3>
      <p>
        Since I was little my family went fishing as much as possible. In being
        on the ocean constantly I have developed a passion for Fishing
      </p>

      <h3 style={heading3}>Racing</h3>
      <p>
        By building engines in the workshop I have developed a keen liking to
        the world of motor sports. It is here that I have gained most of my
        knowledge on petrol and diesel engines, both four and two-stroke.
      </p>
    </div>
  </Layout>
);
