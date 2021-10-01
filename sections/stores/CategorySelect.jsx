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
  height: Rem(90),
});

const CategoryItem = styled.li({
  paddingRight: Em(18),
});

const CategoryLink = styled(LinkButton)(({ currentCategory }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: `0 ${Em(16)}`,
  height: Rem(44),
  border: '1px solid',
  borderRadius: Em(22),
  color: currentCategory ? '#0EAA55' : '#5a5a5a',
}));

const CategoryName = styled.span({
  fontSize: Rem(20),
  fontWeight: fontWeights.Regular,
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
