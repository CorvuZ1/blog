import { IWorksListProps } from "~/components/works-list/works-list";
import { TGetAllWorksResponse } from "~/lib/api/get/works";
import { formatData } from "~/lib/helpers/format-data";

export const mapDataToWorksListProps = (
  { data }: TGetAllWorksResponse,
  baseHrefUrl?: string
): IWorksListProps["items"] =>
  data.map(item => ({
    id: item.id,
    alt: item.attributes.Main_Image.data.attributes.alternativeText,
    label: item.attributes.Name,
    image: item.attributes.Main_Image.data.attributes.url,
    description: item.attributes.Preview_Description || item.attributes.Description,
    date: formatData(item.attributes.createdAt),
    href: baseHrefUrl + item.attributes.Slug
  }));
