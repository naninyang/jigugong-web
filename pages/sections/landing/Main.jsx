import React, { useState } from 'react';
import styled from '@emotion/styled';
import { mq, fontWeights, Rem, Em, styles } from '../../utils/designSystem';
import LinkButton from '../../utils/LinkButton';
import { images } from '../../assets/';
import ButtonGreen from '../../components/ButtonGreen';
import Description from '../../components/Description';

const Container = styled.main({
  paddingTop: `${Rem(97)}`,
  backgroundImage: 'radial-gradient(circle at 0 0, #dcf5e8, #dcf5e8, #eaf7ff)',
});

const Contents = styled.div({
  ...styles.widthSettings,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  padding: `${Em(100)} ${Em(25)}`,
  [mq.minTablet]: {
    padding: `${Em(100)} ${Em(40)}`,
  },
  [mq.minSmall]: {
    margin: '0 auto',
    padding: 0,
    justifyContent: 'center',
    minHeight: Rem(97 + 874),
    height: `calc(100vh - ${Rem(97)})`,
  },
});

const MainHeading = styled.h1({
  marginBottom: `${Em(40)}`,
  display: 'flex',
  flexDirection: 'column',
  fontWeight: fontWeights.ExtraBold,
  fontSize: `${Rem(30)}`,
  textShadow: '0 1px 4px #c4c4c4',
  color: '#0EAA55',
  [mq.minXsmall]: {
    marginBottom: `${Em(40)}`,
    fontSize: `${Rem(50)}`,
  },
  '& strong': {
    marginTop: `${Rem(20)}`,
    fontWeight: fontWeights.ExtraBold,
  },
  '&::before': {
    content: '""',
    marginBottom: `${Rem(60)}`,
    width: `${Rem(70)}`,
    height: `${Rem(78)}`,
    background: `url(${images.icons.jigugong}) no-repeat 50% 50%/contain`,
    [mq.minXsmall]: {
      width: `${Rem(113)}`,
      height: `${Rem(126)}`,
    },
  },
});

const MainDescription = styled(Description)();

const Point = styled.strong({
  color: '#0EAA55',
  '&~ span': {
    display: 'block',
  },
});

const LinkGroup = styled.div({
  position: 'relative',
  zIndex: 999999,
  display: 'flex',
  margin: `${Em(50)} 0`,
  flexDirection: 'column-reverse',
  [mq.minXsmall]: {
    margin: `${Em(50)} -${Em(15)} 0`,
    flexDirection: 'row',
  }
});

const LinkItem = styled.div({
  margin: `${Em(15)} 0`,
  position: 'relative',
  [mq.minXsmall]: {
    margin: `0 ${Em(15)}`,
  },
});

const NotMobile = styled.div();

const StoreList = styled.ul(({ active }) => ({
  display: active ? 'block' : 'none',
  backgroundColor: '#FFFFFF',
  position: 'absolute',
  borderRadius: `${Em(7)}`,
  top: `${Rem(44)}`,
  left: 0,
  [mq.minXsmall]: {
    right: 0,
  },
}));

const StoreItem = styled.li({
  padding: `${Em(10)} ${Em(10)}`,
  borderTop: '1px solid #0EAA55',
  '&:first-of-type': {
    borderTop: 0,
  },
  '& a': {
    display: 'block',
    fontWeight: fontWeights.SemiBold,
    fontSize: `${Rem(14)}`,
    color: '#000000',
    whiteSpace: 'nowrap',
  },
});

const Button = styled.button({
  display: 'inline-flex',
  backgroundColor: '#0EAA55',
  padding: `${Em(10)} ${Em(22)}`,
  border: 0,
  borderRadius: `${Em(15)}`,
  fontWeight: fontWeights.SemiBold,
  fontSize: `${Rem(20)}`,
  color: '#FFFFFF',
});

const MockupImages = styled.div({
  margin: `-${Em(60)} 0 -${Em(80)}`,
  [mq.minTablet]: {
    margin: '0 auto',
    position: 'relative',
    maxWidth: Rem(768),
    width: '100%',
    height: Rem(575),
  },
  [mq.minSmall]: {
    position: 'static',
    width: 'auto',
    height: 'auto',
  },
});

const MockupImage1 = styled.div({
  position: 'relative',
  width: '100%',
  maxWidth: Rem(481),
  paddingTop: '145.11434511%',
  background: `url(${images.mockup.main00}) no-repeat 50% 50%/contain`,
  [mq.minXsmall]: {
    position: 'absolute',
    top: `-${Rem(25)}`,
    left: `-${Rem(125)}`,
    paddingTop: '95.114345%',
  },
  [mq.minSmall]: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    marginTop: `-${Rem(60)}`,
    marginLeft: `${Rem(80)}`,
    paddingTop: '59.114345%',
  },
});

const MockupImage2 = styled.div({
  position: 'relative',
  width: '100%',
  maxWidth: Rem(481),
  paddingTop: '145.11434511%',
  background: `url(${images.mockup.main01}) no-repeat 50% 50%/contain`,
  [mq.minXsmall]: {
    position: 'absolute',
    top: `${Rem(116)}`,
    left: `${Rem(201)}`,
    paddingTop: '95.114345%',
  },
  [mq.minSmall]: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    marginTop: `${Rem(116)}`,
    marginLeft: `${Rem(406)}`,
    paddingTop: '59.114345%',
  },
});

const Main = () => {
  const [active, setActive] = useState(false);

  const isIos = typeof window !== 'undefined' ? navigator.platform.toLowerCase().indexOf('iphone') >= 0 : false;
  const isIpados = typeof window !== 'undefined' ? navigator.platform.toLowerCase().indexOf('ipad') >= 0 : false;
  const isAndroid = typeof window !== 'undefined' ? navigator.platform.toLowerCase().indexOf('android') >= 0 : false;
  const notMobile = !isIos && !isIpados && !isAndroid ? true : false;

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <Container>
      <Contents>
        <MainHeading>
          개인의 실천을 모아
          <strong>세상을 변화시킵니다.</strong>
        </MainHeading>
        <MainDescription>
          <Point>지구를 구하는 공동체, 지구공은</Point>
          미션과 실천을 중심으로
          <span>환경보호 문화를 확산시키는 친환경 플랫폼입니다.</span>
        </MainDescription>
        <LinkGroup>
          <LinkItem>
            {!notMobile && <ButtonGreen href='https://earthyguna.com/v1/deeplink/'>앱 다운로드</ButtonGreen>}
            {
              notMobile &&
              (
                <NotMobile>
                  <Button
                    onClick={handleClick}
                    type={'button'}
                  >
                    앱 다운로드
                  </Button>
                  <StoreList active={active}>
                    <StoreItem><LinkButton href='https://apps.apple.com/kr/app/%EC%A7%80%EA%B5%AC%EA%B3%B5/id1550230253'>애플 앱스토어</LinkButton></StoreItem>
                    <StoreItem><LinkButton href='https://play.google.com/store/apps/details?id=com.jigugong.app'>구글 플레이스토어</LinkButton></StoreItem>
                  </StoreList>
                </NotMobile>
              )
            }
          </LinkItem>
          <LinkItem><ButtonGreen href="https://naver.com/">회사소개서 다운로드</ButtonGreen></LinkItem>
        </LinkGroup>
        <MockupImages>
          <MockupImage1 />
          <MockupImage2 />
        </MockupImages>
      </Contents>
    </Container>
  )
}

export default Main;
