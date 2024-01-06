import { IDataResponse } from "../types/base/base";
import { I3DModel, IMultipleMedia, ISingleMedia } from "../types/models/file";
import { ITag } from "../types/models/tag";

export const getAllWorks = async (params?: string): Promise<TGetAllWorksResponse | false> => {
  const getParams = params || "";

  try {
    const req = await fetch(`${process.env.API_URL}/works${getParams}`);
    const data = await req.json();

    if (!req.ok) {
      throw new Error("getAllWorks failed");
    }

    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export interface IGetAllWorksByFiltersValues {
  search?: string;
  date?: string;
  type?: string;
  page?: number;
}

export const getAllWorksByFilters = async ({
  search,
  date = "desc",
  type,
  page
}: IGetAllWorksByFiltersValues): Promise<TGetAllWorksResponse | false> => {
  const searchParam = search ? `&filters[Name][$containsi][0]=${search}` : "";
  const dateParam = `&sort=createdAt:${date}`;
  const typeParam = type ? `&filters[Tag][Name][$eqi][1]=${type}` : "";
  const pageParam = `&pagination[page]=${
    page || 1
  }&pagination[pageSize]=16&pagination[withCount]=true`;

  const data = await getAllWorks("?populate=*" + searchParam + typeParam + dateParam + pageParam);
  return data;
};

export type TGetAllWorksResponse = IDataResponse<{
  Name: string;
  Slug: string;
  Description: string;
  Preview_Description: string;
  Main_Image: ISingleMedia;
  Model: I3DModel;
  Gallery: IMultipleMedia;
  Tag: ITag;
}>;
