import { NextPage } from "next";
import { Container } from "~/components/container/container";
import { Layout } from "~/components/layout/layout";
import { Section } from "~/components/section/section";
import { Title } from "~/components/title/title";
import { Works } from "~/components/works/works";

export interface IAboutPageProps {
  works: [];
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
