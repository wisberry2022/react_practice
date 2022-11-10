export interface listData {
  id: number;
  title?: string | number;
  content?: string | Array<string>;
}

export type anyListData = {
  id: number;
  [key: string]: string | number | Array<string> | Array<number> | boolean;
}

export type NorS = string | number;

// export type objArray = Array<anyListData>;


