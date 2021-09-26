import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { isIOS, isAndroid } from 'react-device-detect';
import styled from '@emotion/styled';
import { mq, fontWeights, Rem, Em, styles } from '../../utils/designSystem';
import LinkButton from '../../utils/LinkButton';
import Tabs from '../../sections/missions/Tabs';
import TabPane from '../../sections/missions/TabPane';

const scrollVerticalTrue = `body{background-color:#F6F6F6}`;
const scrollVerticalFalse = `body{background-color:#FFFFFF}`;

const Container = styled.div({
  marginTop: Rem(97),
  borderTop: '1px solid #aaaaaa',
  backgroundColor: '#ffffff',
});

const PageHading = styled.h1({
  ...styles.screenReaderOnly,
});

const Contents = styled.div({
  margin: '0 auto',
  padding: `0 ${Em(25)}`,
  width: '100%',
  maxWidth: Rem(586),
  minHeight: `calc(100vh - ${Rem(97)})`,
});

const MissionList = styled.ul({
  display: 'flex',
  flexDirection: 'column',
});

const MissionItem = styled.li({
  margin: `${Em(10)} 0`,
});

const MissionItemLink = styled(LinkButton)({
  display: 'block',
  position: 'relative',
  paddingTop: '53.17164179%',
  height: 0,
  borderRadius: Em(10),
  overflow: 'hidden',
  '&:hover': {
    '& img': {
      transform: 'scale(1.1)',
    },
    '& > div': {
      opacity: 1,
    },
  },
});

const MissionThumbnail = styled.img({
  position: 'absolute',
  display: 'block',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform .25s',
  transform: 'scale(1)',
});

const MissionMouseOver = styled.div({
  position: 'absolute',
  display: 'block',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, .5)',
  transition: 'opacity .25s',
  opacity: 0,
  '&::after': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: Rem(212),
    height: Rem(45),
    border: '1px solid #ffffff',
    borderRadius: Em(8),
    fontSize: Rem(20),
    fontWeight: fontWeights.Medium,
    color: '#ffffff',
    [mq.minXsmall]: {
      width: Rem(220),
      height: Rem(53),
      fontSize: Rem(24),
    },
  },
});

function index() {
  const [scrollY, setScrollY] = useState(0);
  const [mission, setMission] = React.useState(null);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollVertical = scrollY > 97 ? true : false
  const isDesktop = !isIOS && !isAndroid ? true : false;

  const url = '/api/mission';
  React.useEffect(() => {
    axios.get(url).then((response) => {
      setMission(response.data);
    });
  }, []);

  return (
    <>
      <Head>
        <link rel='alternate' hrefLang='ko-KR' href='https://jigugong.com/missions/' key='alternate' />
        <link rel='canonical' href='https://jigugong.com/missions/' key='canonical' />
        <title key='title'>지구공 : 미션목록</title>
        <meta property='og:title' content='지구공 : 미션목록' key='og:title' />
        <meta property='og:url' content='https://jigugong.com/missions/' key='og:url' />
        <meta property='og:site_name' content='지구공 : 미션목록' key='og:site_name' />
      </Head>
      <Container>
        {scrollVertical && <style>{scrollVerticalTrue}</style>}
        {!scrollVertical && <style>{scrollVerticalFalse}</style>}
        <PageHading>미션목록</PageHading>
        <Contents>
          <Tabs>
            <TabPane name='ongoing' key='0'>
              {mission && mission.map(item => (
                <MissionList key={item.uuid}>
                  <MissionItem>
                    <MissionItemLink href={`/missions/${item.id}`}>
                      <MissionThumbnail src={item.thumbnail} alt={item.subject} />
                      {isDesktop && <MissionMouseOver aria-label='미션상세 보러가기' />}
                    </MissionItemLink>
                  </MissionItem>
                </MissionList>
              ))}
            </TabPane>
            <TabPane name='closed' key='1'>
              {mission && mission.map(item => (
                <MissionList key={item.uuid}>
                  <MissionItem>
                    <MissionItemLink href={`/missions/${item.id}`}>
                      <MissionThumbnail src={item.thumbnail} alt={item.subject} />
                      {isDesktop && <MissionMouseOver aria-label='미션결과 보러가기' />}
                    </MissionItemLink>
                  </MissionItem>
                </MissionList>
              ))}
            </TabPane>
          </Tabs>
        </Contents>
      </Container>
    </>
  )
}

export default index;
