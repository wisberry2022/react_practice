import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: '회사소개', contents: ['기업정보', '기업연혁', 'CEO 인사말', '그룹사현황', '오시는 길', '고객센터'] },
  { id: 2, title: '사업영역', contents: ['주택', '건축', '토목', '리조트', '골프', '유통', '미디어', '금융', '제조'] },
  { id: 3, title: '지속가능경영', contents: ['윤리경영소개', '윤리경영활동', '사이버신문고', '동반성장', '안전보건경영'] },
  { id: 4, title: '사회공헌', contents: ['호반사랑나눔이', '호반장학재단', '호반문화재단', '호반골프단'] },
  { id: 5, title: '홍보센터', contents: ['NEWS', '홍보자료실', 'CI / BI', '수상실적', '신사옥 홍보관', '30주년 홍보관'] },
  { id: 6, title: '인재채용', contents: ['인사제도', '복리후생', '채용가이드', '채용공고'] },
];

const footerSlice = createSlice({
  name: 'footerSlice',
  initialState,
  reducers: {
    GET: (state, action) => {
      return state;
    }
  }
})

export default footerSlice.reducer;