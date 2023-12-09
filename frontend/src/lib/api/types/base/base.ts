export interface IDataResponse<Attributes, IsArray extends boolean = true> {
  data: IsArray extends true ? IData<Attributes>[] : IData<Attributes>;
  meta: {
    pagination: IPagination;
  };
}

export interface IData<Attributes> {
  id: number;
  attributes: IGeneralAttributes & Attributes;
}

export interface IGeneralAttributes {
  createdAt: string;
  updatedAt: string;
}

export interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
