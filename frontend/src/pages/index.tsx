import { GetStaticProps, NextPage } from "next";
import { HelloWorld, IHelloWorldProps } from "@/components/HelloWorld";

type THomePageProps = Pick<IHelloWorldProps, "message"> & { hasError: boolean };

const HomePage: NextPage<THomePageProps> = props => {
  const { message, hasError } = props;

  return <HelloWorld message={message} status={hasError ? "error" : "success"} />;
};

export default HomePage;

export const getStaticProps: GetStaticProps<THomePageProps> = async () => {
  try {
    const req = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + "/hello");
    const data = await req.json();

    if (!req.ok) throw new Error();

    return {
      props: {
        message: data.message,
        hasError: false
      },
      revalidate: 120
    };
  } catch (error) {
    console.log(error);

    return {
      props: {
        message: "Что-то пошло не так",
        hasError: true
      },
      revalidate: 120
    };
  }
};
