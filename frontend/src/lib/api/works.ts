export const getAllWorks = async (params?: string): Promise<IGetAllWorksResponse | false> => {
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

export interface IGetAllWorksResponse {
  data: IData[];
  meta: IMeta;
}

export interface IData {
  id: number;
  attributes: IAttributes;
}

export interface IAttributes {
  Description: string;
  createdAt: string;
  updatedAt: string;
  Name: string;
  Preview_Image: IPreviewImage;
  Model: IModel;
}

export interface IPreviewImage {
  data: IPreviewImageData;
}

export interface IPreviewImageData {
  id: number;
  attributes: IPreviewImageAttributes;
}

export interface IPreviewImageAttributes {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: IFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
}

export interface IFormats {
  thumbnail: IThumbnail;
}

export interface IThumbnail {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
}

export interface IModel {
  data: any;
}

export interface IMeta {
  pagination: IPagination;
}

export interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
