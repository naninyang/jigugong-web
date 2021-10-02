import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { mq, styles, fontWeights, Rem, Em } from '../../utils/designSystem';
import LinkButton from '../../utils/LinkButton';
import { ContinuousColorLegend } from 'react-vis';

const Container = styled.div();

const Contents = styled.div({
  display: 'flex',
  justifyContent: 'center',
});

const Page = styled.div({
  padding: `0 ${Em(3)}`,
});

const PageLink = styled.button(({ currentPage }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 0,
  padding: 0,
  width: Rem(38),
  height: Rem(38),
  backgroundColor: currentPage ? '#3bb549' : '#ffffff',
  borderRadius: '100%',
  fontSize: Rem(20),
  fontWeight: fontWeights.Medium,
  color: currentPage ? '#ffffff' : '#aaaaaa',
  textAlign: 'center',
  cursor: currentPage ? 'default' : 'pointer',
  '&:hover': {
    backgroundColor: currentPage ? '#3bb549' : '#F6F6F6',
    color: currentPage ? '#ffffff' : '#aaaaaa',
  },
}));

// const CategoryLink = styled(LinkButton)(({ currentCategory }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: `0 ${Em(16)}`,
//   height: Rem(44),
//   border: '1px solid',
//   borderRadius: Em(22),
//   color: currentCategory ? '#0EAA55' : '#5a5a5a',
// }));

function Pagination({ reviewsPerPage, totalReviews, paginate, currentPage }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalReviews / reviewsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Container>
      <Contents>
        {pageNumbers.map((number) => (
          <Page key={number}>
            <PageLink
              type='button'
              onClick={() => paginate(number)}
              currentPage={currentPage === number ? true : false}
            >
              {number}
            </PageLink>
          </Page>
        ))}
      </Contents>
    </Container>
  )
}

export default Pagination;
