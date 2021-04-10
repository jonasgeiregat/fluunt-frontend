export interface Page<T> {
  readonly contents: Array<T>;
  readonly totalRecords: number;
  readonly totalPages: number;
  readonly page: number;
}
