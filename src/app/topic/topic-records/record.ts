export interface Record {
  readonly offset: number;
  readonly key?: string;
  readonly timestamp: number;
  readonly value: string;
  readonly size: number;
  readonly partition: number;
}
