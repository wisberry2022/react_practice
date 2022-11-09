import { listData } from "../interfacez/Interface";

// union type(여러 타입 중 하나 일 수 있음)
export const getOut = (param: string | number): string | number => {
  return param;
}

export const Console = (param: string | number | Array<any>): void => {
  console.log(param);
}

export const checkListData = (param: Array<listData>): boolean => {
  return typeof param === 'object' ? true : false;
}

// export const UnionSet = (param: string | number) => {

// }

export const totalSum: (arr: Array<number>) => number =
  (numArr: Array<number>): number => {
    let sum: number = 0;
    for (let i of numArr) {
      sum += i;
    }
    return sum;
  }