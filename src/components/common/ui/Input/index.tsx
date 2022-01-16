import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';

interface Props {
  leftText?: any;
  rightText?: any;
  placeholder?: string | undefined;
  leftCb?: Function;
  rightCb?: Function;
  enterCb: Function;
}

const Input = ({
  leftText,
  rightText,
  placeholder,
  leftCb,
  rightCb,
  enterCb,
}: Props) => {
  const inputRef = useRef(null);

  const onClickLeft = useCallback(() => {
    if (leftCb) {
      leftCb(inputRef);
    }
  }, [leftCb]);
  const onClickRight = useCallback(() => {
    if (rightCb) {
      rightCb(inputRef);
    }
  }, [rightCb]);
  const onEnter = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        enterCb(inputRef);
      }
      return;
    },
    [enterCb]
  );

  return (
    <Container>
      <LeftDiv onClick={onClickLeft}>{leftText}</LeftDiv>
      <InputTag placeholder={placeholder} ref={inputRef} onKeyDown={onEnter} />
      <RightDiv onClick={onClickRight}>{rightText}</RightDiv>
    </Container>
  );
};

export default React.memo(Input);

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.ui12};
  padding: 12px 16px;
  border-radius: 24px;
  gap: 10px;
  width: 100%;
`;

const InputTag = styled.input`
  background-color: inherit;
  width: 100%;
`;

const LeftDiv = styled.div``;
const RightDiv = styled.div``;
