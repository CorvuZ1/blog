import { GetStaticProps, NextPage } from "next";
import { Layout } from "~/components/layout/layout";
import { Slider, ISliderProps } from "~/components/slider/slider";
import { getAllWorks } from "~/lib/api/works";
import { mapDataToSliderProps } from "~/lib/helpers/data-mappers/slider";

export interface IHomePageProps {
  slides: ISliderProps["items"];
}

const HomePage: NextPage<IHomePageProps> = ({ slides }) => {
  return <Layout>{slides.length > 0 && <Slider items={slides} />}</Layout>;
};

export default HomePage;

export const getStaticProps: GetStaticProps<IHomePageProps> = async () => {
  const data = await getAllWorks("?populate=Preview_Image&pagination[limit]=6&sort=createdAt:desc");

  if (!data) {
    return {
      props: {
        slides: []
      },
      revalidate: 120
    };
  }

  const slides = mapDataToSliderProps(data);

  return {
    props: {
      slides
    },
    revalidate: 3600
  };
};
