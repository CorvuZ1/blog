import { IDataResponse } from "../types/base/base";
import { ISingleMedia } from "../types/models/file";

export const getAbout = async (params?: string): Promise<TGetAboutResponse | false> => {
  const getParams = params || "";

  try {
    const req = await fetch(`${process.env.API_URL}/about${getParams}`);
    const data = await req.json();

    if (!req.ok) {
      throw new Error("getAbout failed");
    }

    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export type TGetAboutResponse = IDataResponse<
  {
    Description: string;
    Image: ISingleMedia;
  },
  false
>;
