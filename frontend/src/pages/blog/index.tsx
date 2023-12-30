import { GetServerSideProps, NextPage } from "next";
import { Container } from "~/components/container/container";
import { Layout } from "~/components/layout/layout";
import { Section } from "~/components/section/section";
import { Title } from "~/components/title/title";
import { IWorksListProps } from "~/components/works-list/works-list";
import { Works } from "~/components/works/works";
import { getAllWorks } from "~/lib/api/get/works";
import { mapDataToWorksListProps } from "~/lib/helpers/data-mappers/works-list";

export interface IAboutPageProps {
  works: IWorksListProps["items"];
}

const AboutPage: NextPage<IAboutPageProps> = ({ works }) => {
  return (
    <Layout title="Блог">
      <Container>
        <Section>
          <Title>Блог</Title>
          <Works items={works} />
        </Section>
      </Container>
    </Layout>
  );
};

export default AboutPage;

export const getServerSideProps: GetServerSideProps<IAboutPageProps> = async ({ query }) => {
  const { search, date, type, page } = query;

  const searchParam = search ? `&filters[Name][$containsi][0]=${search}` : "";
  const dateParam = date ? `&sort=createdAt:${date}` : "";
  const typeParam = type ? `&filters[Tag][Name][$eqi][1]=${type}` : "";
  const pageParam = `&pagination[page]=${page || 1}&pagination[pageSize]=16`;

  const works = await getAllWorks("?populate=*" + searchParam + typeParam + dateParam + pageParam);

  if (!works) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      works: mapDataToWorksListProps(works, "/blog/")
    }
  };
};
