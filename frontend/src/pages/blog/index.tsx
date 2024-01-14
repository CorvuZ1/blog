import { GetServerSideProps, NextPage } from "next";
import { Container } from "~/components/container/container";
import { Layout } from "~/components/layout/layout";
import { Section } from "~/components/section/section";
import { Title } from "~/components/title/title";
import { IWorksProps, Works } from "~/components/works/works";
import { getAllTags } from "~/lib/api/get/tags";
import { mapDataToWorksListProps } from "~/lib/helpers/data-mappers/works-list";
import { IGetAllWorksByFiltersValues, getAllWorksByFilters } from "~/lib/utils/works-filter";

export interface IAboutPageProps extends IWorksProps {}

const AboutPage: NextPage<IAboutPageProps> = props => {
  const { types, items, resultsCount, currentPage, countPage } = props;

  return (
    <Layout title="Блог">
      <Container>
        <Section className="mb-0">
          <Title>Блог</Title>
          <Works
            resultsCount={resultsCount}
            types={types}
            items={items}
            currentPage={currentPage}
            countPage={countPage}
          />
        </Section>
      </Container>
    </Layout>
  );
};

export default AboutPage;

export const getServerSideProps: GetServerSideProps<IAboutPageProps> = async ({ query }) => {
  const { search, date, type, page }: IGetAllWorksByFiltersValues = query;

  const works = await getAllWorksByFilters({
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
      items: mapDataToWorksListProps(works, "/blog/"),
      types: types.data.map(item => item.attributes.Name),
      resultsCount: works.meta.pagination.total,
      countPage: works.meta.pagination.pageCount,
      currentPage: works.meta.pagination.page
    }
  };
};
