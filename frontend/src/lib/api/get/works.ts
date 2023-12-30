import { IDataResponse } from "../types/base/base";
import { I3DModel, IMultipleMedia, ISingleMedia } from "../types/models/file";

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

export type TGetAllWorksResponse = IDataResponse<{
  Name: string;
  Slug: string;
  Description: string;
  Preview_Description: string;
  Main_Image: ISingleMedia;
  Model: I3DModel;
  Gallery: IMultipleMedia;
}>;
