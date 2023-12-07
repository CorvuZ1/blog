import { GetStaticProps, NextPage } from "next";
import { About, IAboutProps } from "~/components/about/about";
import { Container } from "~/components/container/container";
import { Layout } from "~/components/layout/layout";
import { Section } from "~/components/section/section";
import { Slider, ISliderProps } from "~/components/slider/slider";
import { Title } from "~/components/title/title";
import { getAllWorks } from "~/lib/api/works";
import { mapDataToSliderProps } from "~/lib/helpers/data-mappers/slider";

export interface IHomePageProps {
  slides: ISliderProps["items"];
  about: IAboutProps;
}

const HomePage: NextPage<IHomePageProps> = props => {
  const { slides, about } = props;

  return (
    <Layout>
      {slides.length > 0 && (
        <Section isDiv>
          <Container>
            <Slider items={slides} />
          </Container>
        </Section>
      )}

      <Container size="sm">
        <Section>
          <Title>Обо мне</Title>
          <About
            image="/imgs/base/logo.svg"
            alt="obo mne"
            description="weuwn funwef nwunf uwnne unf unwe fnwu"
          />
        </Section>
      </Container>
    </Layout>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps<IHomePageProps> = async () => {
  const data = await getAllWorks("?populate=Preview_Image&pagination[limit]=8&sort=createdAt:desc");

  if (!data) {
    return {
      props: {
        slides: []
      },
      revalidate: 120
    };
  }

  const slides = mapDataToSliderProps(data, "/blog/");

  return {
    props: {
      slides
    },
    revalidate: 3600
  };
};
