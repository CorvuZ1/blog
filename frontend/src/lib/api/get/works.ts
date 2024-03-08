import { IDataResponse } from "../types/base/base";
import { IMedia } from "../types/models/file";
import { ITag } from "../types/models/tag";

export const getAllWorks = async (params?: string): Promise<TGetWorksResponse | false> => {
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

export const getWork = async (slug: string): Promise<TGetWorksResponse | false> => {
  try {
    const req = await fetch(`${process.env.API_URL}/works?populate=*&filters[Slug][$eq]=${slug}`);
    const data = await req.json();

    if (!req.ok) {
      throw new Error(`getWork by slug: ${slug} failed`);
    }

    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export type TGetWorksResponse = IDataResponse<{
  Name: string;
  Slug: string;
  Description: string;
  Preview_Description: string;
  Main_Image: IMedia<false>;
  Model: string;
  Gallery: IMedia;
  Tag: ITag;
}>;
