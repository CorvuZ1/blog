import { IGetAllWorksResponse } from "~/lib/api/works";
import { IHomePageProps } from "~/pages";

export const mapDataToHomePageProps = ({
  data
}: IGetAllWorksResponse): IHomePageProps["slides"] => {
  return data.map(item => ({
    img: item.attributes.Image?.data.attributes.url,
    label: item.attributes.Name,
    alt: item.attributes.Image?.data.attributes.alternativeText,
    id: item.id
  }));
};
