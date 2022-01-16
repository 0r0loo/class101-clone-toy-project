import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Inner from 'components/common/layout/Inner';
import { useCallback } from 'react';
import Input from 'components/common/ui/Input';
import { SearchIcon } from '@class101/ui';

const Header = () => {
  const [tabs, setTabs] = useState([
    {
      id: 'class',
      title: '클래스',
      href: '#',
      isActive: true,
    },
    {
      id: 'store',
      title: '스토어',
      href: '#',
      isActive: false,
    },
  ]);

  const searchObj = useMemo(
    () => ({
      placeholder: '찾으시는 취미가 있으신가요?',
      icon: <SearchIcon size={20} />,
      onSearch: (input: any) => {
        console.log(input.current.value);
      },
    }),
    []
  );

  const links = useMemo(
    () => [
      {
        text: '크리에이터 지원',
        href: '#',
      },
      {
        text: '기업교육',
        href: '#',
      },
      {
        text: '로그인',
        href: '#',
      },
    ],
    []
  );

  const onClickTab = useCallback((id) => {
    setTabs((prev) =>
      prev.map((tab) =>
        tab.id === id ? { ...tab, isActive: true } : { ...tab, isActive: false }
      )
    );
  }, []);

  return (
    <Container>
      <Logo to="#">CLASS101</Logo>
      <FlexWrapper>
        <LeftWrapper>
          <TabWrapper>
            {tabs.map((tab) => (
              <Tab
                key={tab.id}
                to={tab.href}
                className={tab.isActive ? 'active' : ''}
                onClick={() => onClickTab(tab.id)}
              >
                {tab.title}
              </Tab>
            ))}
          </TabWrapper>
          <Input
            placeholder={searchObj.placeholder}
            rightText={searchObj.icon}
            rightCb={searchObj.onSearch}
            enterCb={searchObj.onSearch}
          />
        </LeftWrapper>
        <RightWrapper>
          <LinkWrapper>
            {links.map((link) => (
              <LinkNav to={link.href} key={link.text}>
                {link.text}
              </LinkNav>
            ))}
          </LinkWrapper>
        </RightWrapper>
      </FlexWrapper>
    </Container>
  );
};

export default React.memo(Header);

const Container = styled.div`
  padding: 20px 0;
  display: flex;
  align-items: center;
`;

const Logo = styled(Link)`
  ${({ theme }) => theme.title}
  margin-right: 28px;
  cursor: pointer;
`;

const FlexWrapper = styled.div`
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const LeftWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  align-items: center;
  max-width: 600px;
`;
const RightWrapper = styled.div``;

const TabWrapper = styled.div`
  ${({ theme }) => theme.title}
  display: flex;
  gap: 15px;
  margin-right: 20px;
`;

const Tab = styled(Link)`
  white-space: nowrap;

  &.active {
    color: ${({ theme }) => theme.ui25};
  }
`;

const LinkWrapper = styled.div`
  display: inline-flex;
  gap: 10px;
`;

const LinkNav = styled(Link)`
  flex-wrap: nowrap;
  white-space: nowrap;
`;
