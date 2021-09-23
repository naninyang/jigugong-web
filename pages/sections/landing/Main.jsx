import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { isIOS, isAndroid } from 'react-device-detect';
import styled from '@emotion/styled';
import { mq, fontWeights, Rem, Em, styles } from '../../utils/designSystem';
import LinkButton from '../../utils/LinkButton';
import useScrollFadeIn from '../../utils/useScrollFadeIn';
import { images } from '../../assets/';
import ButtonGreen from '../../components/ButtonGreen';
import Description from '../../components/Description';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 481 })
  return isDesktop ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 480 })
  return isMobile ? children : null
}

const Container = styled.main({
  paddingTop: `${Rem(97)}`,
  backgroundImage: 'radial-gradient(circle at 0 0, #dcf5e8, #dcf5e8, #eaf7ff)',
  [mq.maxMobile]: {
    overflowX: 'hidden',
  },
  [mq.minSmall]: {
    overflowX: 'hidden',
  },
});

const Contents = styled.div({
  ...styles.widthSettings,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  padding: `${Em(40)} ${Em(25)}`,
  [mq.minTablet]: {
    padding: `${Em(40)} ${Em(40)} 0`,
  },
  [mq.minXsmall]: {
    padding: `${Em(100)} ${Em(40)} 0`,
  },
  [mq.minSmall]: {
    margin: '0 auto',
    padding: `0 0 0 ${Em(68)}`,
    justifyContent: 'center',
    minHeight: Rem(97 + 874),
    height: `calc(100vh - ${Rem(97)})`,
  },
});

const MainHeading = styled.h1({
  marginBottom: Em(20),
  display: 'flex',
  flexDirection: 'column',
  fontWeight: fontWeights.ExtraBold,
  fontSize: Rem(32),
  textShadow: '0 1px 4px #c4c4c4',
  color: '#0EAA55',
  [mq.minXsmall]: {
    position: 'relative',
    zIndex: 999999,
    marginBottom: Em(40),
    fontSize: Rem(50),
  },
  '& strong': {
    marginTop: Rem(10),
    fontWeight: fontWeights.ExtraBold,
    [mq.minXsmall]: {
      marginTop: Rem(20),
    },
  },
  '&::before': {
    content: '""',
    marginBottom: Rem(30),
    width: Rem(70),
    height: Rem(78),
    background: `url(${images.icons.jigugong}) no-repeat 50% 50%/contain`,
    [mq.minXsmall]: {
      marginBottom: Rem(60),
      width: Rem(113),
      height: Rem(126),
    },
  },
});

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
  margin: `${Em(25)} 0`,
  flexDirection: 'column-reverse',
  [mq.minXsmall]: {
    margin: `${Em(50)} -${Em(15)}`,
    flexDirection: 'row',
  },
  [mq.minSmall]: {
    marginBottom: 0,
  },
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
  borderRadius: Em(7),
  top: Em(20),
  left: 0,
  paddingTop: Em(20),
  [mq.minXsmall]: {
    top: Em(30),
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
    fontSize: Rem(14),
    color: '#000000',
    whiteSpace: 'nowrap',
  },
});

const Button = styled.button({
  display: 'inline-flex',
  position: 'relative',
  zIndex: 9,
  padding: `${Em(10)} ${Em(22)}`,
  border: 0,
  borderRadius: Em(15),
  backgroundColor: '#0EAA55',
  fontWeight: fontWeights.SemiBold,
  fontSize: Rem(16),
  color: '#FFFFFF',
  [mq.minXsmall]: {
    fontSize: Rem(20),
  },
});

const MockupImageModule = styled.div({
  overflow: 'hidden',
  margin: `-${Em(75)} -${Em(25)} 0`,
  padding: `0 ${Em(27)}`,
  [mq.minTablet]: {
    margin: `-${Em(40)} -${Em(40)} -${Em(100)}`,
    padding: 0,
  },
  [mq.minXsmall]: {
    margin: `-${Em(67)} -${Em(40)} -${Em(100)}`,
  },
  [mq.minSmall]: {
    overflow: 'visible',
    margin: 0,
    paddingBottom: Em(100),
  },
});

const MockupImages = styled.div({
  paddingBottom: Em(40),
  [mq.minTablet]: {
    paddingBottom: 0,
    margin: `0 0 0 -${Em(33)}`,
  },
  [mq.minXsmall]: {
    margin: `0 0 0 -${Em(90)}`,
  },
  [mq.minSmall]: {
    margin: 0,
  },
});

const MockupImage1 = styled.div({
  position: 'relative',
  margin: `0 -${Em(25)} -${Em(80)}`,
  paddingTop: '258.114345%',
  height: 0,
  background: `url(${images.mockup.main00}) no-repeat 50% 50%/cover`,
});

const MockupImage2 = styled.div({
  position: 'relative',
  margin: `-${Em(80)} -${Em(25)} -${Em(40)}`,
  paddingTop: '258.114345%',
  height: 0,
  background: `url(${images.mockup.main01}) no-repeat 50% 50%/cover`,
});

const MockupImage = styled.div({
  background: `url(${images.mockup.mainMerge}) no-repeat 50% 50%/contain`,
  paddingTop: '91.114345%',
  height: 0,
  backgroundPosition: '0 0',
  backgroundSize: 'contain',
  [mq.minTablet]: {
    paddingTop: '109.114345%',
  },
  [mq.minSmall]: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: `-${Em(70)} 0 0 ${Em(280)}`,
    paddingTop: '74.114345%',
    width: Rem(807),
  },
});

const Main = () => {
  const [active, setActive] = useState(false);

  const isDesktop = !isIOS && !isAndroid ? true : false;

  const handleClick = () => {
    setActive(!active);
  };

  const iOSMobileURL = `itms-apps://itunes.apple.com/kr/app/id1550230253`;
  const aOSMobileURL = `market://details?id=com.jigugong.app`;
  const iOSDesktopURL = `https://apps.apple.com/kr/app/id1550230253`;
  const aOSDesktopURL = `https://play.google.com/store/apps/details?id=com.jigugong.app`;
  const earthyDocumentURL = `https://drive.google.com/u/1/uc?id=1066rIf9v3yBGJHkzOEFsDPX5Gajgu0xL&export=download`;

  return (
    <Container role='main'>
      <Contents aria-labelledby='section-main' {...useScrollFadeIn('up', 1, 0, 1)}>
        <MainHeading id='section-main'>
          개인의 실천을 모아
          <strong>세상을 변화시킵니다.</strong>
        </MainHeading>
        <Description role='region'>
          <Point>지구를 구하는 공동체, 지구공은</Point>
          미션과 실천을 중심으로
          <span>환경보호 문화를 확산시키는 친환경 플랫폼입니다.</span>
        </Description>
        <LinkGroup>
          <LinkItem>
            {isIOS && <ButtonGreen href={iOSMobileURL}>앱 다운로드</ButtonGreen>}
            {isAndroid && <ButtonGreen href={aOSMobileURL}>앱 다운로드</ButtonGreen>}
            {
              isDesktop &&
              (
                <NotMobile>
                  <Button
                    onClick={handleClick}
                    type='button'
                    aria-haspopup='true'
                    id='app-download-button'
                    aria-controls='app-download'
                  >
                    앱 다운로드
                  </Button>
                  <StoreList
                    active={active}
                    aria-expanded={active}
                    aria-haspopup='true'
                    aria-labelledby='app-download-button'
                    role='menu'
                    id='app-download'
                  >
                    <StoreItem role='menuitem'><LinkButton href={iOSDesktopURL}>애플 앱스토어</LinkButton></StoreItem>
                    <StoreItem role='menuitem'><LinkButton href={aOSDesktopURL}>구글 플레이스토어</LinkButton></StoreItem>
                  </StoreList>
                </NotMobile>
              )
            }
          </LinkItem>
          <LinkItem><ButtonGreen href={earthyDocumentURL}>회사소개서 다운로드</ButtonGreen></LinkItem>
        </LinkGroup>
        <MockupImageModule>
          <MockupImages>
            <Mobile>
              <MockupImage1 />
              <MockupImage2 />
            </Mobile>
            <Desktop>
              <MockupImage />
            </Desktop>
          </MockupImages>
        </MockupImageModule>
      </Contents>
    </Container >
  )
}

export default Main;
