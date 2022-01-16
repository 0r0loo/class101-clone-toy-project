import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import Classes from 'components/common/layout/Classes';
import useEvent from 'hooks/useEvent';
import Slider from 'react-slick';
import { Card, CoverRatio } from '@class101/ui';
import useThemeContext from 'hooks/useThemeContext';
import Utillity from 'utils';

dayjs.locale('ko');
const EventDeal = () => {
  const { events } = useEvent();
  const themeContext = useThemeContext();

  const settings = useMemo(
    () => ({
      speed: 500,
      infinite: false,
      slidesToShow: 3,
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
        title="진행중인 인기 이벤트"
        allClassShow="전체 이벤트 보기"
      >
        <StyleSlider {...settings}>
          {events.map((event) => (
            <Card
              key={event.id}
              title={event.title}
              coverImage={event.img}
              coverImageRatio={CoverRatio.RATIO_16X9}
            >
              <Span color={themeContext.ui39} fw="bold">
                D-
                {Utillity.getTimeDiff(
                  `20${event.period.startDate}`,
                  `20${event.period.finishDate}`
                )}
              </Span>
              <Span>
                {event.period.startDate} (
                {dayjs('20' + event.period.startDate).format('ddd')}) ~{' '}
                {event.period.finishDate} (
                {dayjs('20' + event.period.finishDate).format('ddd')})
              </Span>
            </Card>
          ))}
        </StyleSlider>
      </Classes>
    </>
  );
};

export default React.memo(EventDeal);

const StyleSlider = styled(Slider)`
  .slick-arrow {
  }

  .slick-slide {
    padding: 0 10px;
  }
`;

const Span = styled.span<{
  color?: string;
  fw?: string;
}>`
  font-size: 12px;
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}

  ${({ fw }) =>
    fw &&
    css`
      font-weight: ${fw};
    `}

    & + & {
    margin-left: 5px;
  }
`;
