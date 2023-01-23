/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';
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

export const padLeft: (first: string, second: string | number, third: any) => any =
  // padding: string | number => union type으로, padding 인자에는 string 변수나 number 변수 둘 중 하나가 올 수 있음을 명시한다.
  (value: string, padding: string | number, element: any): any => {
    if (typeof padding === 'number') {
      const CustomElem = styled(element)`
        padding-left: ${padding}rem;
      `;
      return <CustomElem>{value}</CustomElem>;
    }
    if (typeof padding === 'string') {
      return <div>NONE</div>
    }
  }

