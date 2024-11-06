export interface IPost {
  id: number;
  title: string;
  body: string;
}

export interface IFetchState<T> {
  data: T[] | null;
  loading: boolean;
  error: string | null;
}
