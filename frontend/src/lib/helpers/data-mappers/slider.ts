import { ISliderProps } from "~/components/slider/slider";
import { TGetWorksResponse } from "~/lib/api/get/works";
import { IMedia } from "~/lib/api/types/models/file";

export const mapDataToGeneralSliderProps = (
  { data }: TGetWorksResponse,
  baseHrefUrl: string
): ISliderProps["items"] =>
  data.map(item => ({
    image: item.attributes.Main_Image.data.attributes.url,
    label: item.attributes.Name,
    alt: item.attributes.Main_Image.data.attributes.alternativeText,
    id: item.id,
    ...(item.attributes.Slug && baseHrefUrl && { href: baseHrefUrl + item.attributes.Slug })
  }));

export const mapDataToDetailSliderProps = ({ data }: IMedia): ISliderProps["items"] =>
  data.map(item => ({
    image: item.attributes.url,
    alt: item.attributes.alternativeText,
    href: item.attributes.caption,
    id: item.id
  }));
