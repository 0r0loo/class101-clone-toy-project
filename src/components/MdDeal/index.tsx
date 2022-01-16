import React, { useMemo } from 'react';
import styled from 'styled-components';
import Classes from 'components/common/layout/Classes';
import useMdDeal from 'hooks/useMdDeal';
import Slider from 'react-slick';
import {
  Badge,
  Caption1,
  Card,
  CoverRatio,
  HeartIcon,
  HeartOutlineIcon,
} from '@class101/ui';
import useThemeContext from 'hooks/useThemeContext';
import Utillity from 'utils';

const MdDeal = () => {
  const themeContext = useThemeContext();
  const { mdDeals } = useMdDeal();

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
      <Classes classSrc="#" title="MD 추천 클래스" allClassShow="">
        <StyleSlider {...settings}>
          {mdDeals.map((mdDeal) => (
            <Card
              key={mdDeal.id}
              title={mdDeal.title}
              coverImage={mdDeal.img}
              coverImageRatio={CoverRatio.RATIO_3X4}
              extraTop={
                <>
                  <Caption1 fontWeight={600} color={themeContext.ui19}>
                    {mdDeal.creator}
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
                    {mdDeal.like}
                  </Badge>
                </div>
              }
            >
              {mdDeal.coupon === 0 || (
                <CuponBadge>{mdDeal.coupon}만원 쿠폰</CuponBadge>
              )}
              <HeartIconWrapper>
                <HeartOutlineIcon fillColor={themeContext.ui00} />
              </HeartIconWrapper>
              <SaleRatioSpan>
                {
                  Utillity.getSaleRatio(
                    mdDeal.price.installment,
                    mdDeal.price.originalPrice,
                    mdDeal.price.salePrice
                  ).saleRatio
                }
                %
              </SaleRatioSpan>
              <MonthPrice>
                월{' '}
                {
                  Utillity.getSaleRatio(
                    mdDeal.price.installment,
                    mdDeal.price.originalPrice,
                    mdDeal.price.salePrice
                  ).monthPrice
                }
                원
              </MonthPrice>
              <MonthSpan>({mdDeal.price.installment}개월)</MonthSpan>
            </Card>
          ))}
        </StyleSlider>
      </Classes>
    </>
  );
};

export default React.memo(MdDeal);

const StyleSlider = styled(Slider)`
  .slick-arrow {
  }

  .slick-slide {
    padding: 0 10px;
  }
`;

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
