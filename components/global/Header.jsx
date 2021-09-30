import React from 'react';
import styled from '@emotion/styled';
import LinkButton from '../../utils/LinkButton';
import { mq, Rem, Em, styles } from '../../utils/designSystem';
import { images } from '../../assets';

const Container = styled.header({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  backgroundColor: '#ffffff',
});

const Wrapper = styled.div({
  ...styles.widthSettings,
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: Rem(70),
  [mq.minXsmall]: {
    height: Rem(97),
  },
});

const ServiceLogo = styled.h1({
  width: Rem(38),
  height: Rem(42),
  [mq.minXsmall]: {
    width: Rem(143),
    height: Rem(57),
  },
  '& a': {
    display: 'block',
    width: '100%',
    height: '100%',
    background: `url(${images.icons.jigugong}) no-repeat 50% 50%/contain`,
    [mq.minXsmall]: {
      backgroundImage: `url(${images.logos.jigugongHorizontal})`,
    },
  },
  '& span': {
    ...styles.screenReaderOnly,
  },
});

const SocialMediaList = styled.ul({
  display: 'flex',
  alignItems: 'center',
  marginRight: `-${Rem(16)}`,
  height: Rem(80),
  [mq.minLarge]: {
    marginRight: `-${Rem(24)}`,
  },
});

const SocialMediaItem = styled.li({
  width: Rem(48),
  height: Rem(48),
  [mq.minXsmall]: {
    width: Rem(64),
    height: Rem(64),
  },
  [mq.minLarge]: {
    width: Rem(80),
    height: Rem(80),
  },
  '& a': {
    width: '100%',
    height: '100%',
    display: 'block',
  },
  '& span': {
    ...styles.screenReaderOnly,
  },
});

const InstagramLinkButton = styled(LinkButton)({
  background: `url(${images.icons.instagram}) no-repeat 50% 50%/${Rem(24)}`,
  [mq.minXsmall]: {
    backgroundSize: Rem(32),
  },
});

const BlogLinkButton = styled(LinkButton)({
  background: `url(${images.icons.naverBlog}) no-repeat 50% 50%/${Rem(24)}`,
  [mq.minXsmall]: {
    backgroundSize: Rem(32),
  },
});

function Header() {
  return (
    <Container role='banner'>
      <Wrapper>
        <ServiceLogo>
          <LinkButton href='/'>
            <span>지구공</span>
          </LinkButton>
        </ServiceLogo>
        <SocialMediaList>
          <SocialMediaItem>
            <InstagramLinkButton href='https://www.instagram.com/jigugong_official/'>
              <span>인스타그램 채널</span>
            </InstagramLinkButton>
          </SocialMediaItem>
          <SocialMediaItem>
            <BlogLinkButton href='https://blog.naver.com/earthy_company/'>
              <span>네이버블로그</span>
            </BlogLinkButton>
          </SocialMediaItem>
        </SocialMediaList>
      </Wrapper>
    </Container>
  )
}

export default Header;
