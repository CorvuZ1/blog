import { GetServerSideProps, NextPage } from "next";
import { Container } from "~/components/container/container";
import { Layout } from "~/components/layout/layout";
import { Section } from "~/components/section/section";
import { Title } from "~/components/title/title";
import { IWorksFiltersProps } from "~/components/works-filters/works-filters";
import { IWorksListProps } from "~/components/works-list/works-list";
import { Works } from "~/components/works/works";
import { getAllTags } from "~/lib/api/get/tags";
import { IGetAllWorksByFiltersValues, getAllWorksByFilters } from "~/lib/api/get/works";
import { mapDataToWorksListProps } from "~/lib/helpers/data-mappers/works-list";

export interface IAboutPageProps {
  works: IWorksListProps["items"];
  types: IWorksFiltersProps["types"];
  resultsCount: IWorksFiltersProps["resultsCount"];
}

const AboutPage: NextPage<IAboutPageProps> = props => {
  const { types, works, resultsCount } = props;

  return (
    <Layout title="Блог">
      <Container>
        <Section>
          <Title>Блог</Title>
          <Works resultsCount={resultsCount} types={types} items={works} />
        </Section>
      </Container>
    </Layout>
  );
};

export default AboutPage;

export const getServerSideProps: GetServerSideProps<IAboutPageProps> = async ({ query }) => {
  const { search, date, type, page }: IGetAllWorksByFiltersValues = query;

  const works = await getAllWorksByFilters({
    populate: "*",
    date,
    page,
    search,
    type
  });

  const types = await getAllTags();

  if (!works || !types) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      works: mapDataToWorksListProps(works, "/blog/"),
      types: types.data.map(item => item.attributes.Name),
      resultsCount: works.meta.pagination.total
    }
  };
};
