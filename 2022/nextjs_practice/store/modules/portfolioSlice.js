import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, title: 'Civil Engineering', contents: '국가의 기반이 되는 기간시설, 자원개발 및 에너지 분야에 주력하며 해외 인프라 건설로 확장해 자연의 터전에 새로운 공간을 창조합니다.' },
  { id: 2, title: 'Construction', contents: '최첨단 기술이 집약된 초고층 건물분야에서부터 남다른 감각의 주거시설, 건축미가 돋보이는 호텔, 리조트, 공공시설 및 문화체육시설에 이르기까지 두산건설은 탁월한 기술력과 시공능력을 발휘하고 있습니다.' },
  { id: 3, title: 'Plant', contents: '에너지 인프라를 건설하는 다공종 고급 기술의 집약, 경제적 파급력이 큰 고부가가치의 사업으로 Global 수준의 기술력을 입증합니다.' },
];

const portfolioSlice = createSlice({
  name: 'portfolioSlice',
  initialState,
  reducers: {
    GET: (state, action) => {
      return state;
    }
  }
});

export default portfolioSlice.reducer;
export const { GET } = portfolioSlice.actions;