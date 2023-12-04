import { IGetAllWorksResponse } from "~/lib/api/works";
import { IHomePageProps } from "~/pages";

export const mapDataToHomePageProps = ({ data }: IGetAllWorksResponse): IHomePageProps => {
  return {
    slides: data.map(item => ({
      img: item.attributes.Preview_Image.data.attributes.url,
      label: item.attributes.Name,
      alt: item.attributes.Preview_Image.data.attributes.alternativeText,
      id: item.id,
      width: item.attributes.Preview_Image.data.attributes.width,
      height: item.attributes.Preview_Image.data.attributes.height
    }))
  };
};
