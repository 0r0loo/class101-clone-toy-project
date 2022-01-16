import React, { useMemo } from 'react';
import styled from 'styled-components';
import Classes from 'components/common/layout/Classes';
import {
  Badge,
  Caption1,
  Card,
  ClockIcon,
  CoverRatio,
  HeartIcon,
  HeartOutlineIcon,
  LikeIcon,
} from '@class101/ui';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useTimeDeal from 'hooks/useTimeDeal';
import useThemeContext from 'hooks/useThemeContext';
import theme from 'styles/theme';
import Utillity from 'utils';

const TimeDeal = () => {
  const themeContext = useThemeContext();
  const { timeDeals } = useTimeDeal();

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
        title="오늘의 특가! TIMEDEAL"
        allClassShow="전체 클래스 보기"
      >
        <StyleSlider {...settings}>
          {timeDeals.map((timeDeal) => (
            <Card
              key={timeDeal.id}
              title={timeDeal.title}
              coverImage={timeDeal.img}
              coverImageRatio={CoverRatio.RATIO_4X3}
              extraTop={
                <>
                  <TimeEnd>
                    <LeftDiv>
                      <ClockIcon size={12} fillColor={themeContext.ui00} />
                      타임딜 종료까지
                    </LeftDiv>
                    <RightDiv>00:00:00</RightDiv>
                  </TimeEnd>
                  <Caption1 fontWeight={600} color={themeContext.ui19}>
                    {timeDeal.creator}
                  </Caption1>
                </>
              }
              extraBottom={
                <div style={{ marginLeft: '-4px', lineHeight: '0' }}>
                  <Badge
                    icon={<HeartIcon fillColor={themeContext.ui14} />}
                    backgroundColor="transparent"
                    color={themeContext.ui14}
                    size="sm"
                  >
                    {timeDeal.like}
                  </Badge>{' '}
                  <Badge
                    icon={<LikeIcon fillColor={themeContext.ui14} />}
                    backgroundColor="transparent"
                    color={themeContext.ui14}
                    size="sm"
                  >
                    {timeDeal.thumsUp}
                  </Badge>
                </div>
              }
            >
              <CuponBadge>{timeDeal.coupon}만원 쿠폰</CuponBadge>
              <HeartIconWrapper>
                <HeartOutlineIcon fillColor={themeContext.ui00} />
              </HeartIconWrapper>

              <SaleRatioSpan>
                {
                  Utillity.getSaleRatio(
                    timeDeal.price.installment,
                    timeDeal.price.originalPrice,
                    timeDeal.price.salePrice
                  ).saleRatio
                }
                %
              </SaleRatioSpan>
              <MonthPrice>
                월{' '}
                {
                  Utillity.getSaleRatio(
                    timeDeal.price.installment,
                    timeDeal.price.originalPrice,
                    timeDeal.price.salePrice
                  ).monthPrice
                }
                원
              </MonthPrice>
              <MonthSpan>({timeDeal.price.installment}개월)</MonthSpan>
            </Card>
          ))}
        </StyleSlider>
      </Classes>
    </>
  );
};

export default React.memo(TimeDeal);

const StyleSlider = styled(Slider)`
  .slick-arrow {
  }

  .slick-slide {
    padding: 0 10px;
  }
`;

const TimeEnd = styled.div`
  color: ${({ theme }) => theme.ui00};
  background-color: ${({ theme }) => theme.purple};
  display: flex;
  justify-content: space-between;
  font-size: 9px;
  font-weight: 600;
  line-height: 12px;
  letter-spacing: normal;
  border-radius: 3px;
  padding: 0px 6px;
`;

const LeftDiv = styled.div`
  svg {
    margin-right: 5px;
  }
`;

const RightDiv = styled.div``;

const CuponBadge = styled(Badge)`
  position: absolute;
  top: 13px;
  left: 10px;
  border-radius: 2px;
  padding: 6px 8px;
  background-color: ${({ theme }) => theme.purple};
`;

const HeartIconWrapper = styled.div`
  padding: 3px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 13px;
  right: 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 4px;
  }
`;

const SaleRatioSpan = styled.span`
  color: ${({ theme }) => theme.ui39};
  font-weight: bold;
  margin-right: 5px;
`;

const MonthPrice = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const MonthSpan = styled.span`
  color: ${({ theme }) => theme.ui16};
  font-size: 12px;
`;
