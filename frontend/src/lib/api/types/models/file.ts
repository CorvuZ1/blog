export interface IMedia<IsArray extends boolean = true> {
  data: IsArray extends true ? IMediaData[] : IMediaData;
}

export interface IMediaData {
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
}
