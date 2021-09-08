import React from 'react';
import styled from '@emotion/styled';
import LinkButton from '../utils/LinkButton';
import { Relative, styles } from '../utils/designSystem';
import { images } from '../assets';

const Container = styled.header({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
});

const Wrapper = styled.div({
  ...styles.widthSettings,
  height: `${Relative(97)}rem`,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const ServiceLogo = styled.h1({
  width: `${Relative(143)}rem`,
  height: `${Relative(57)}rem`,
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
  height: `${Relative(80)}rem`,
});

const SocialMediaItem = styled.li({
  width: `${Relative(80)}rem`,
  height: `${Relative(80)}rem`,
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
  background: `url(${images.icons.instagram}) no-repeat 50% 50%/32px`,
});

const BlogLinkButton = styled(LinkButton)({
  background: `url(${images.icons.naverBlog}) no-repeat 50% 50%/32px`,
});

function Header() {
  return (
    <Container>
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
