import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Inner from 'components/common/layout/Inner';

interface Props {
  title: string;
  allClassShow?: string;
  classSrc: string;
  children?: React.ReactNode;
}

const Classes = ({ title, allClassShow, classSrc, children }: Props) => {
  return (
    <Container>
      <Inner>
        <Header>
          <Title to={classSrc}>{title}</Title>
          <ClassShow to={classSrc}>{allClassShow}</ClassShow>
        </Header>
        {children}
      </Inner>
    </Container>
  );
};

export default React.memo(Classes);

const Container = styled.div``;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Title = styled(Link)`
  ${({ theme }) => theme.title}
`;

const ClassShow = styled(Link)`
  color: ${({ theme }) => theme.ui16};
  font-weight: bold;
  &:hover {
    color: ${({ theme }) => theme.ui15};
    text-decoration: underline;
  }
`;
