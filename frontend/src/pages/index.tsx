import { GetStaticProps, NextPage } from "next";
import { About, IAboutProps } from "~/components/about/about";
import { Container } from "~/components/container/container";
import { Layout } from "~/components/layout/layout";
import { Section } from "~/components/section/section";
import { Slider, ISliderProps } from "~/components/slider/slider";
import { Title } from "~/components/title/title";
import { getAbout } from "~/lib/api/get/about";
import { getAllWorks } from "~/lib/api/get/works";
import { mapDataToSliderProps } from "~/lib/helpers/data-mappers/slider";

export interface IHomePageProps {
  slides: ISliderProps["items"];
  about: IAboutProps;
}

const HomePage: NextPage<IHomePageProps> = props => {
  const { slides, about } = props;

  const aboutAnimationSide = slides.length > 0 ? "right" : "left";

  return (
    <Layout>
      {slides.length > 0 && (
        <Section isDiv>
          <Container size="lg">
            <Slider items={slides} />
          </Container>
        </Section>
      )}

      <Container>
        <Section className="mb-0">
          <Title animationSide={aboutAnimationSide}>Обо мне</Title>
          <About
            animationSide={aboutAnimationSide}
            image={about.image}
            alt={about.alt}
            description={about.description}
            width={about.width}
            height={about.height}
          />
        </Section>
      </Container>
    </Layout>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps<IHomePageProps> = async () => {
  const about = await getAbout("?populate=*");
  const works = await getAllWorks("?populate=Main_Image&pagination[limit]=8&sort=createdAt:desc");

  if (!about) {
    return {
      notFound: true,
      revalidate: 120
    };
  }

  return {
    props: {
      slides: works ? mapDataToSliderProps(works, "/blog/") : [],
      about: {
        description: about.data.attributes.Description,
        image: about.data.attributes.Image.data.attributes.url,
        width: about.data.attributes.Image.data.attributes.width,
        height: about.data.attributes.Image.data.attributes.height,
        alt: about.data.attributes.Image.data.attributes.alternativeText
      }
    },
    revalidate: 3600
  };
};
