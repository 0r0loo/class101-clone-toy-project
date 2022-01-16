import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
  readonly background?: string;
}

const Inner: React.FC<Props> = ({ background, children }) => {
  return (
    <Container background={background}>
      <InnerDiv>{children}</InnerDiv>
    </Container>
  );
};

export default React.memo(Inner);

const Container = styled.div<{ background?: string }>`
  width: 100%;
  background-color: ${({ background }) => background};
`;
const InnerDiv = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`;
