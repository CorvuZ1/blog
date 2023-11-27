import { NextPage } from "next";
import { Layout } from "~/components/layout/layout";
import { Slider } from "~/components/slider/slider";

const HomePage: NextPage = props => {
  return (
    <Layout>
      <Slider
        items={[
          { label: "first", img: "first" },
          { label: "second", img: "second" }
        ]}
      />
    </Layout>
  );
};

export default HomePage;
