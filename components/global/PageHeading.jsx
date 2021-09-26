import React from 'react';
import styled from '@emotion/styled';
import { mq, fontWeights, Rem, styles } from '../../utils/designSystem';
import LinkButton from '../../utils/LinkButton';
import { images } from '../../assets';

const Container = styled.h1({
  position: 'absolute',
  top: 0,
  left: Rem(63),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: `calc(100% - ${Rem(63 + 96)})`,
  height: Rem(70),
  [mq.minXsmall]: {
    ...styles.screenReaderOnly,
  },
  '&::after': {
    content: '""',
    width: Rem(20),
    height: Rem(25),
  },
});

const PageHeadingLink = styled(LinkButton)({
  width: Rem(40),
  height: Rem(25),
  background: `url(${images.icons.historyBack}) no-repeat 50% 50%/${Rem(13)} ${Rem(23)}`,
  '& span': {
    ...styles.screenReaderOnly,
  }
})

const PageHeadingLabel = styled.span({
  lineHeight: Rem(25),
  fontSize: Rem(18),
  fontWeight: fontWeights.SemiBold,
});

function PageHeading({ link, label }) {
  return (
    <Container>
      <PageHeadingLink href={link}><span>뒤로가기</span></PageHeadingLink>
      <PageHeadingLabel>{label}</PageHeadingLabel>
    </Container>
  )
}

export default PageHeading;
