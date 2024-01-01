import { IDataResponse } from "../types/base/base";

export const getAllTags = async (): Promise<TGetAllTagsResponse | false> => {
  try {
    const req = await fetch(`${process.env.API_URL}/tags`);
    const data = await req.json();

    if (!req.ok) {
      throw new Error("getTags failed");
    }

    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export type TGetAllTagsResponse = IDataResponse<{
  Name: string;
}>;
