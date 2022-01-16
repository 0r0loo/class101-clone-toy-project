import React from 'react';
import styled, { css } from 'styled-components';
import { CloseIcon } from '@class101/ui';
import useThemeContext from 'hooks/useThemeContext';
import { useCallback } from 'react';
import { useState } from 'react';

const TopBanner = () => {
  const [isClose, setIsColose] = useState(false);
  const themeContext = useThemeContext();

  const onCloseHandler = useCallback(() => {
    setIsColose(true);
  }, []);

  return (
    <Container isClose={isClose}>
      <Text>지금 가입하고 원하는 클래스 1개 무료 체험하기 {`>`}</Text>
      <IconWrapper onClick={onCloseHandler}>
        <CloseIcon fillColor={themeContext.ui00} size={18} />
      </IconWrapper>
    </Container>
  );
};

export default React.memo(TopBanner);

const Container = styled.div<{ isClose: boolean }>`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.ui00};
  padding: 10px;

  cursor: pointer;

  ${({ isClose }) =>
    isClose &&
    css`
      display: none;
    `}
`;

const Text = styled.div``;

const IconWrapper = styled.div`
  padding: 3px;
  border-radius: 4px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
