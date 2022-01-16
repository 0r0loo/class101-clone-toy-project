import React from 'react';
import styled from 'styled-components';

import Inner from 'components/common/layout/Inner';
import TopBanner from 'components/TopBanner';

import useThemeContext from 'hooks/useThemeContext';

import Header from 'components/Header';

import useTimeDeal from 'hooks/useTimeDeal';
import TimeDeal from 'components/TimeDeal';
import MdDeal from 'components/MdDeal';
import EventDeal from 'components/EventDeal';
import SoonDeal from 'components/SoonDeal';

function App() {
  const themeContext = useThemeContext();
  useTimeDeal();
  return (
    <>
      <Inner background={themeContext.ui25}>
        <TopBanner />
      </Inner>
      <Inner>
        <Header />
      </Inner>
      {/* 네비 */}
      {/* 광고 캐러셀 */}
      {/* 타임딜 */}
      <TimeDeal />
      <Spacer />
      {/* MD 추천클래스 */}
      <MdDeal />
      <Spacer />
      {/* 진행중인 인기 이벤트 */}
      <EventDeal />
      <Spacer />
      {/* 오픈예정 */}
      <SoonDeal />
    </>
  );
}

export default App;

const Spacer = styled.div`
  height: 40px;
`;
