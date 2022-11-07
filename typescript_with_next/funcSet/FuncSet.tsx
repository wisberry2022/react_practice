import { listData } from "../interfacez/Interface";

// union type(여러 타입 중 하나 일 수 있음)
export const getOut = (param: string | number) => {
  return param;
}

export const Console = (param: string | number | Array<any>): void => {
  console.log(param);
}

export const checkListData = (param: Array<listData>) => {
  return typeof param === 'object' ? true : false;
}