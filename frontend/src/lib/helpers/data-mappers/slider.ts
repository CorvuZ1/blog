import { ISliderProps } from "~/components/slider/slider";
import { IGetAllWorksResponse } from "~/lib/api/works";

export const mapDataToSliderProps = (
  { data }: IGetAllWorksResponse,
  baseHrefUrl?: string
): ISliderProps["items"] =>
  data.map(item => ({
    image: item.attributes.Preview_Image.data.attributes.url,
    label: item.attributes.Name,
    alt: item.attributes.Preview_Image.data.attributes.alternativeText,
    id: item.id,
    width: item.attributes.Preview_Image.data.attributes.width,
    height: item.attributes.Preview_Image.data.attributes.height,
    ...(item.attributes.Slug && baseHrefUrl && { href: baseHrefUrl + item.attributes.Slug })
  }));
