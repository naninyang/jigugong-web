import React, { useState } from 'react';
import Head from 'next/head';
import { RadialChart, makeVisFlexible } from 'react-vis';
import styled from '@emotion/styled';
import { mq, styles, fontWeights, Rem, Em } from '../../../utils/designSystem';
import PageHeading from '../../../components/global/PageHeading';
import Tabs from '../../../sections/missions/Tabs';
import TabPane from '../../../sections/missions/TabPane';
import ArticleTabContents from '../../../sections/missions/ArticleTabContents';
import ArticleTabParticipants from '../../../sections/missions/ArticleTabParticipants';
import ArticleTabArticles from '../../../sections/missions/ArticleTabArticles';

// const scrollVerticalTrue = `body{background-color:#F6F6F6}`;
// const scrollVerticalFalse = `body{background-color:#FFFFFF}`;

const FlexRadialChart = makeVisFlexible(RadialChart);

const MissionGraph = [
  {
    theta: 23,
    style: { stroke: '#0eaa55', fill: '#0eaa55' },
    radius: 100,
    innerRadius: 60,
  },
  {
    theta: 77,
    style: { stroke: '#dcf5e8', fill: '#dcf5e8' },
    radius: 100,
    innerRadius: 60,
  },
];

const Container = styled.div({
  marginTop: Rem(70),
  paddingBottom: Rem(100),
  borderTop: '1px solid #aaaaaa',
  backgroundColor: '#ffffff',
  [mq.minXsmall]: {
    marginTop: Rem(97),
  },
});

const Contents = styled.div({
  margin: '0 auto',
  padding: `0 ${Em(25)}`,
  width: '100%',
  maxWidth: Rem(586),
  minHeight: `calc(100vh - ${Rem(97)})`,
});

const MissionImage = styled.div({
  overflow: 'hidden',
  borderRadius: `0 0 ${Em(10)} ${Em(10)}`,
});

const MissionThumbnail = styled.img({
  display: 'block',
  width: '100%',
});

const MissionHeading = styled.h1({
  margin: `${Em(16)} 0 ${Em(8.7)}`,
  fontSize: Rem(16),
  fontWeight: fontWeights.SemiBold,
  [mq.minTablet]: {
    fontSize: Rem(24),
  },
});

const MissionInfoList = styled.dl({
  display: 'flex',
  flexWrap: 'wrap',
});

const MissionInfoTerm = styled.dt({
  padding: `${Em(7)} 0`,
  width: Rem(60),
  fontWeight: fontWeights.Medium,
  fontSize: Rem(12),
  color: '#0eaa55',
  lineHeight: 1.78,
  [mq.minTablet]: {
    padding: `${Em(2)} 0`,
    width: Rem(87),
    fontSize: Rem(18),
  },
});

const MissionInfoDescription = styled.dd({
  padding: `${Em(7)} 0`,
  width: `calc(100% - ${Rem(60)})`,
  fontWeight: fontWeights.Regular,
  fontSize: Rem(12),
  color: '#5a5a5a',
  lineHeight: 1.78,
  [mq.minTablet]: {
    padding: `${Em(2)} 0`,
    width: `calc(100% - ${Rem(87)})`,
    fontSize: Rem(18),
  },
});

const MissionFigure = styled.div({
  display: 'flex',
  paddingBottom: Em(50),
});

const Percentage = styled.div({
  position: 'relative',
  paddingTop: '100%',
  height: 0,
  '& span': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: Rem(16),
    fontWeight: fontWeights.Bold,
    color: '#000000',
    [mq.minTablet]: {
      fontSize: Rem(24),
    },
  },
});

const FlexRadialGraph = styled.div({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  height: '100%',
  maxWidth: Rem(150),
  maxHeight: Rem(150),
  '& > div > div': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
});

const StatusInfo = styled.div({
  ...styles.col,
  display: 'flex',
  flexDirection: 'column',
});

const NumberHash = styled.div({
  position: 'relative',
  paddingTop: '100%',
  height: 0,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'block',
    borderRadius: '100%',
    backgroundColor: '#0eaa55',
    maxWidth: Rem(120),
    maxHeight: Rem(120),
    width: `calc(100% - ${Rem(30)})`,
    height: `calc(100% - ${Rem(30)})`,
  },
  '& span': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: Rem(16),
    fontWeight: fontWeights.Bold,
    color: '#ffffff',
    [mq.minTablet]: {
      fontSize: Rem(24),
    },
  },
});

const FigureTerm = styled.strong({
  marginTop: `-${Em(5)}`,
  textAlign: 'center',
  fontSize: Rem(14),
  fontWeight: fontWeights.SemiBold,
  [mq.minTablet]: {
    fontSize: Rem(20),
  },
});

const Wrapper = styled.div({
  margin: '0 auto',
  maxWidth: Rem(1194),
  borderTop: '1px solid #C4C4C4',
  width: '100%',
});

function MissionItem() {
  // const [scrollY, setScrollY] = useState(0);
  // const scrollVertical = scrollY > 97 ? true : false

  // React.useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //   };

  //   handleScroll();

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <>
      <Head>
        <link rel='alternate' hrefLang='ko-KR' href={`https://jigugong.com/missions/{mission.id}`} key='alternate' />
        <link rel='canonical' href={`https://jigugong.com/missions/{mission.id}`} key='canonical' />
        <title key='title'>{`지구공 : {mission.subject}`}</title>
        <meta name='description' content={`지구공 : {mission.context}`} key='description' />
        <meta property='og:title' content={`지구공 : {mission.subject}`} key='og:title' />
        <meta property='og:description' content={`지구공 : {mission.context}`} key='og:description' />
        <meta property='og:image' content={`{mission.thumbnail}?${Math.random().toString(36).substr(2, 11)}`} key='og:image' />
        <meta property='og:url' content={`https://jigugong.com/missions/{mission.id}`} key='og:url' />
        <meta property='og:type' content='article' key='og:type' />
        <meta property='og:site_name' content={`지구공 : {mission.subject}`} key='og:site_name' />
      </Head>
      <Container data-container='article'>
        {/* {scrollVertical && <style>{scrollVerticalTrue}</style>}
        {!scrollVertical && <style>{scrollVerticalFalse}</style>} */}
        <PageHeading link={'/'} label={'mission.subject'} />
        <Contents>
          <MissionImage>
            <MissionThumbnail
              src={'https://dummyimage.com/706x375/0EAA5/fff.png'}
              alt=''
            />
          </MissionImage>
          <MissionHeading>내 용기는 이만큼 커!</MissionHeading>
          <MissionInfoList>
            <MissionInfoTerm>미션내용</MissionInfoTerm>
            <MissionInfoDescription>일회용 포장 대신 다회용기로 물건을 담아 용기 사진을 인증하는 미션</MissionInfoDescription>
            <MissionInfoTerm>미션기간</MissionInfoTerm>
            <MissionInfoDescription>2021.06.14~2021.07.17</MissionInfoDescription>
            <MissionInfoTerm>미션목표</MissionInfoTerm>
            <MissionInfoDescription>50회 참여</MissionInfoDescription>
          </MissionInfoList>
          <MissionFigure>
            <StatusInfo>
              <Percentage>
                <FlexRadialGraph>
                  <FlexRadialChart
                    getAngle={d => d.theta}
                    animation={true}
                    data={MissionGraph}
                    center={{ x: 0, y: 0 }}
                  />
                </FlexRadialGraph>
                <span>23%</span>
              </Percentage>
              <FigureTerm>목표 달성률</FigureTerm>
            </StatusInfo>
            <StatusInfo>
              <NumberHash><span>15명</span></NumberHash>
              <FigureTerm>참여자 수</FigureTerm>
            </StatusInfo>
            <StatusInfo>
              <NumberHash><span>15번</span></NumberHash>
              <FigureTerm>참여 횟수</FigureTerm>
            </StatusInfo>
          </MissionFigure>
        </Contents>
        <Wrapper>
          <Tabs>
            <TabPane name='contents' key='0'>
              <ArticleTabContents />
            </TabPane>
            <TabPane name='participants' key='1'>
              <ArticleTabParticipants />
            </TabPane>
            <TabPane name='articles' key='2'>
              <ArticleTabArticles />
            </TabPane>
          </Tabs>
        </Wrapper>
      </Container>
    </>
  )
}

export default MissionItem;
