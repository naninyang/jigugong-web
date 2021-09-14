import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from '@emotion/styled';
import { mq, styles, Rem, Em } from '../../utils/designSystem';
import { images } from '../../assets/';
import ButtonGreen from '../../components/ButtonGreen';
import HeadingPrimary from '../../components/HeadingPrimary';
import HeadingSecondary from '../../components/HeadingSecondary';
import Description from '../../components/Description';
import ArticleList from '../../components/ArticleList';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 481 })
  return isDesktop ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 480 })
  return isMobile ? children : null
}

const Container = styled.section({
  backgroundColor: '#eaf7ff',
  overflow: 'hidden',
});

const Contents = styled.div({
  ...styles.widthSettings,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  [mq.minTablet]: {
    padding: `${Em(100)} ${Em(40)} 0`,
  },
  [mq.minSmall]: {
    margin: '0 auto',
    padding: `0 0 0 ${Em(68)}`,
    justifyContent: 'center',
    minHeight: Rem(698),
    height: `calc(100vh - ${Rem(308)})`,
  },
});

const LinkGroup = styled.div({
  position: 'relative',
  zIndex: 999999,
  display: 'flex',
  margin: `${Em(50)} 0`,
  flexDirection: 'column',
  [mq.minXsmall]: {
    flexDirection: 'row',
  },
  [mq.minSmall]: {
    marginBottom: 0,
  },
});

const LinkItem = styled.div({
  margin: `${Em(15)} 0`,
  position: 'relative',
});

const MockupImages = styled.div({
  paddingBottom: Em(40),
  [mq.minTablet]: {
    margin: `-${Em(60)} -${Em(92)} 0`,
    paddingBottom: 0,
  },
  [mq.minXsmall]: {
    margin: `-${Em(60)} -${Em(150)} 0`,
  },
  [mq.minSmall]: {
    margin: 0,
  },
});

const MockupImage1 = styled.div({
  position: 'relative',
  margin: `-${Em(80)} -${Em(25)} 0`,
  paddingTop: '265.114345%',
  height: 0,
  background: `url(${images.mockup.mission00}) no-repeat 50% 50%/cover`,
});

const MockupImage2 = styled.div({
  position: 'relative',
  margin: 0,
  paddingTop: '125.196548%',
  height: 0,
  background: `url(${images.mockup.mission01}) no-repeat 50% 50%/cover`,
});

const MockupImage3 = styled.div({
  position: 'relative',
  margin: 0,
  paddingTop: '125.196548%',
  height: 0,
  background: `url(${images.mockup.mission02}) no-repeat 50% 50%/cover`,
});

const MockupImage = styled.div({
  background: `url(${images.mockup.missionMerge}) no-repeat 50% 50%/contain`,
  margin: `0 ${Em(20)}`,
  paddingTop: '75.114345%',
  height: 0,
  backgroundPosition: '0 0',
  backgroundSize: 'contain',
  [mq.minSmall]: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: `-${Em(20)} 0 0 ${Em(440)}`,
    paddingTop: '61.114345%',
    width: Rem(923),
  },
});

const Mission = () => {
  return (
    <Container>
      <Contents>
        <HeadingPrimary>미션</HeadingPrimary>
        <HeadingSecondary>
          개인의 실천이 모여
          <strong>사회공헌으로</strong>
        </HeadingSecondary>
        <Description>
          <strong>지구공에서 환경보호 미션에 참여해보세요.</strong>
          개인의 작은 실천이 모여 커다란 사회공헌이 됩니다.
        </Description>
        <LinkGroup>
          <LinkItem><ButtonGreen href="/">미션목록 보러가기</ButtonGreen></LinkItem>
        </LinkGroup>
        <MockupImages>
          <Mobile>
            <MockupImage1 />
            <MockupImage2 />
            <MockupImage3 />
          </Mobile>
          <Desktop>
            <MockupImage />
          </Desktop>
        </MockupImages>
      </Contents>
      <ArticleList heading={'지구공과 함께한 파트너'}>
        지구공 파트너
      </ArticleList>
    </Container>
  )
}

export default Mission;
