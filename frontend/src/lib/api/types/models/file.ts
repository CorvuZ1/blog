export interface ISingleMedia {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string;
      caption: string;
      width: number;
      height: number;
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
    };
  };
}

export interface I3DModel {
  data: any;
}

export interface IMultipleMedia {
  data: any;
}
