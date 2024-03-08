import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Container } from "~/components/container/container";
import { Layout } from "~/components/layout/layout";
import { Section } from "~/components/section/section";
import { ISliderProps, Slider } from "~/components/slider/slider";
import { getWork } from "~/lib/api/get/works";
import { mapDataToDetailSliderProps } from "~/lib/helpers/data-mappers/slider";

export interface IDetailBlogPageProps {
  slides: ISliderProps["items"];
  image: string;
  title: string;
  description: string;
  model: string;
}

const DetailBlogPage: NextPage<IDetailBlogPageProps> = props => {
  const { description, image, model, slides, title } = props;

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
        <Section className="mb-0">content</Section>
      </Container>
    </Layout>
  );
};

export default DetailBlogPage;

export const getStaticPaths: GetStaticPaths = async a => {
  return {
    paths: [],
    fallback: "blocking"
  };
};

export const getStaticProps: GetStaticProps<IDetailBlogPageProps> = async ({ params }) => {
  const work = await getWork(params?.slug as string);

  if (!work) {
    return {
      notFound: true
    };
  }

  const [currentWork] = work.data;

  return {
    props: {
      slides: currentWork.attributes.Gallery.data
        ? mapDataToDetailSliderProps(currentWork.attributes.Gallery)
        : [],
      image: currentWork.attributes.Main_Image.data.attributes.url,
      imageAlt: currentWork.attributes.Main_Image.data.attributes.alternativeText,
      title: currentWork.attributes.Name,
      description: currentWork.attributes.Description,
      model: currentWork.attributes.Model
    },
    revalidate: 3600
  };
};
