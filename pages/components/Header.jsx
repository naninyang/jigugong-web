import React from 'react';
import styled from '@emotion/styled';
import LinkButton from '../utils/LinkButton';
import { Rem, styles } from '../utils/designSystem';
import { images } from '../assets';

const Container = styled.header({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
});

const Wrapper = styled.div({
  ...styles.widthSettings,
  margin: '0 auto',
  display: 'flex',
  height: Rem(97),
  alignItems: 'center',
  justifyContent: 'space-between',
});

const ServiceLogo = styled.h1({
  width: Rem(143),
  height: Rem(57),
  '& a': {
    display: 'block',
    width: '100%',
    height: '100%',
    background: `url(${images.logos.jigugongHorizontal}) no-repeat 50% 50%/contain`,
  },
  '& span': {
    ...styles.screenReaderOnly,
  },
});

const SocialMediaList = styled.ul({
  display: 'flex',
  marginRight: `-${Rem(24)}`,
  height: Rem(80),
});

const SocialMediaItem = styled.li({
  width: Rem(80),
  height: Rem(80),
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
  background: `url(${images.icons.instagram}) no-repeat 50% 50%/${Rem(32)}`,
});

const BlogLinkButton = styled(LinkButton)({
  background: `url(${images.icons.naverBlog}) no-repeat 50% 50%/${Rem(32)}`,
});

function Header() {
  return (
    <Container role='banner'>
      <Wrapper>
        <ServiceLogo>
          <LinkButton href="/">
            <span>지구공</span>
          </LinkButton>
        </ServiceLogo>
        <SocialMediaList>
          <SocialMediaItem>
            <InstagramLinkButton href="https://www.instagram.com/jigugong_official/">
              <span>인스타그램 채널</span>
            </InstagramLinkButton>
          </SocialMediaItem>
          <SocialMediaItem>
            <BlogLinkButton href="https://blog.naver.com/earthy_company/">
              <span>네이버블로그</span>
            </BlogLinkButton>
          </SocialMediaItem>
        </SocialMediaList>
      </Wrapper>
    </Container>
  )
}

export default Header;
