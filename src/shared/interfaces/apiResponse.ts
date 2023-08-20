export type ApiResponse<T> = {
  status: number;
  message: string;
  body: T;
};

export type GetAllRequestBody<T> = {
  quantity: number;
  data: T[];
};
