import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styled from '@emotion/styled';
import { mq, styles, fontWeights, Rem, Em } from '../../utils/designSystem';
import LinkButton from '../../utils/LinkButton';

const Container = styled.div({
  borderBottom: '1px solid #aaaaaa',
});

const CategoryList = styled.ul({
  ...styles.widthSettings,
  display: 'flex',
  alignItems: 'center',
  height: Rem(50),
  overflowX: 'scroll',
  [mq.maxTablet]: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  [mq.minTablet]: {
    height: Rem(70),
  },
  [mq.minSmall]: {
    height: Rem(90),
  },
});

const CategoryItem = styled.li({
  paddingRight: Em(5),
  [mq.minTablet]: {
    paddingRight: Em(9),
  },
  [mq.minSmall]: {
    paddingRight: Em(18),
  },
});

const CategoryLink = styled(LinkButton)(({ currentCategory }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: `0 ${Em(8)}`,
  height: Rem(28),
  border: '1px solid',
  borderRadius: Em(12),
  color: currentCategory ? '#0EAA55' : '#5a5a5a',
  [mq.minTablet]: {
    padding: `0 ${Em(12)}`,
    height: Rem(36),
    borderRadius: Em(18),
  },
  [mq.minSmall]: {
    padding: `0 ${Em(16)}`,
    height: Rem(44),
    borderRadius: Em(22),
  },
}));

const CategoryName = styled.span({
  fontSize: Rem(16),
  fontWeight: fontWeights.Regular,
  whiteSpace: 'nowrap',
  [mq.minTablet]: {
    fontSize: Rem(14),
  },
  [mq.minSmall]: {
    fontSize: Rem(20),
  },
});

function CategorySelect() {
  const router = useRouter();
  const [getStore, setStore] = React.useState(null);
  const url = '/api/store-categories';
  React.useEffect(() => {
    axios.get(url).then((response) => {
      setStore(response.data);
    });
  }, []);

  return (
    <Container>
      <CategoryList>
        {getStore && getStore.map(item => (
          <CategoryItem key={item.uuid}>
            <CategoryLink
              href={`/stores?category=${item.engName}`}
              currentCategory={router.query.category === item.engName ? true : false}
            >
              <CategoryName>{item.korName}</CategoryName>
            </CategoryLink>
          </CategoryItem>
        ))}
      </CategoryList>
    </Container>
  )
}

export default CategorySelect;
