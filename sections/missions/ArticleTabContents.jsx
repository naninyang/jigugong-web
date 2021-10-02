import React from 'react';
import styled from '@emotion/styled';
import { Rem, Em } from '../../utils/designSystem';

const MissionContents = styled.div({
  margin: '0 auto',
  maxWidth: Rem(756),
  width: '100%',
});

const ContentsImage = styled.img({
  marginTop: Em(13),
  display: 'block',
  width: '100%',
});

function ArticleTabContents() {
  return (
    <MissionContents>
      <ContentsImage src={'https://dummyimage.com/706x706/0EAA5/fff.png'} alt='' />
      <ContentsImage src={'https://dummyimage.com/706x706/0EAA5/fff.png'} alt='' />
    </MissionContents>
  )
}

export default ArticleTabContents;
