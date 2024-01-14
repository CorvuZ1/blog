import { TGetAllWorksResponse, getAllWorks } from "../api/get/works";

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
  page = 1
}: IGetAllWorksByFiltersValues): Promise<TGetAllWorksResponse | false> => {
  const searchParam = search ? `&filters[Name][$containsi][0]=${search}` : "";
  const dateParam = `&sort=createdAt:${date}`;
  const typeParam = type ? `&filters[Tag][Name][$eqi][1]=${type}` : "";
  const pageParam = `&pagination[page]=${page}&pagination[pageSize]=2&pagination[withCount]=true`;

  const data = await getAllWorks("?populate=*" + searchParam + typeParam + dateParam + pageParam);
  return data;
};
