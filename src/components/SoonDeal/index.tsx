import React, { useMemo } from 'react';
import styled from 'styled-components';

import Classes from 'components/common/layout/Classes';
import useThemeContext from 'hooks/useThemeContext';
import useSoonClass from 'hooks/useSoonClass';
import Slider from 'react-slick';
import {
  Button,
  ButtonColor,
  Caption1,
  Card,
  CoverRatio,
  HeartIcon,
} from '@class101/ui';
import Utillity from 'utils';
import dayjs from 'dayjs';

const SoonDeal = () => {
  const themeContext = useThemeContext();
  const { soonClasses } = useSoonClass();

  const settings = useMemo(
    () => ({
      speed: 500,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }),
    []
  );

  return (
    <>
      <Classes
        classSrc="#"
        title="오픈 예정 클래스"
        allClassShow="전체 클래스 보기"
      >
        <StyleSlider {...settings}>
          {soonClasses.map((soonClass) => (
            <Card
              key={soonClass.id}
              title={soonClass.title}
              coverImage={soonClass.img}
              coverImageRatio={CoverRatio.RATIO_4X3}
              extraTop={
                <>
                  <Caption1 fontWeight={600} color={themeContext.ui19}>
                    {soonClass.creator}
                  </Caption1>
                </>
              }
              extraBottom={
                <>
                  <GoalRatio>
                    💖{' '}
                    {Utillity.getGoalRatio(
                      soonClass.cheer.goal,
                      soonClass.cheer.score
                    )}
                    % 달성
                  </GoalRatio>
                  <Score>
                    <HeartIcon size={12} fillColor={themeContext.ui14} />
                    {soonClass.cheer.score}
                  </Score>
                </>
              }
            >
              <SpanWrapper>
                <GraySpan>응원 마감까지</GraySpan>{' '}
                <BlackSpan>
                  {dayjs(soonClass.cheer.finishDate).diff(dayjs(), 'day')}일
                  남음
                </BlackSpan>
              </SpanWrapper>
              <Button color={ButtonColor.ORANGE_LIGHT} fill>
                응원하기
              </Button>
            </Card>
          ))}
        </StyleSlider>
      </Classes>
    </>
  );
};

export default React.memo(SoonDeal);

const StyleSlider = styled(Slider)`
  .slick-arrow {
  }

  .slick-slide {
    padding: 0 10px;
  }
`;

const GoalRatio = styled.span`
  color: ${({ theme }) => theme.ui39};
  font-size: 12px;
  font-weight: bold;
  margin-right: 5px;
`;

const Score = styled.span`
  color: ${({ theme }) => theme.ui14};
  font-size: 12px;
  display: inline-flex;
  align-items: center;
  gap: 3px;
`;

const SpanWrapper = styled.div`
  margin-bottom: 10px;
`;

const GraySpan = styled.span`
  color: ${({ theme }) => theme.ui14};
  font-size: 12px;
`;

const BlackSpan = styled.span`
  font-size: 12px;
`;
