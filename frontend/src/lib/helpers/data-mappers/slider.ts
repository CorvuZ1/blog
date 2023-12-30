import { ISliderProps } from "~/components/slider/slider";
import { TGetAllWorksResponse } from "~/lib/api/get/works";

export const mapDataToSliderProps = (
  { data }: TGetAllWorksResponse,
  baseHrefUrl?: string
): ISliderProps["items"] =>
  data.map(item => ({
    image: item.attributes.Main_Image.data.attributes.url,
    label: item.attributes.Name,
    alt: item.attributes.Main_Image.data.attributes.alternativeText,
    id: item.id,
    width: item.attributes.Main_Image.data.attributes.width,
    height: item.attributes.Main_Image.data.attributes.height,
    ...(item.attributes.Slug && baseHrefUrl && { href: baseHrefUrl + item.attributes.Slug })
  }));
