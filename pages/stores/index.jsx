import React, { useState } from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import { mq, styles, fontWeights, Rem, Em } from '../../utils/designSystem';
import { images } from '../../assets';
import PageHeading from '../../components/global/PageHeading';
import CategorySelect from '../../sections/stores/CategorySelect';

// const scrollVerticalTrue = `body{background-color:#F6F6F6}`;
// const scrollVerticalFalse = `body{background-color:#FFFFFF}`;

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
  ...styles.widthSettings,
});

function index() {
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
        <title key='title'>{`지구공 : {article.subject}`}</title>
        <meta name='description' content={`지구공 : {article.context}`} key='description' />
        <meta property='og:title' content={`지구공 : {article.subject}`} key='og:title' />
        <meta property='og:description' content={`지구공 : {article.context}`} key='og:description' />
        <meta property='og:image' content={`{article.thumbnails[0]}?${Math.random().toString(36).substr(2, 11)}`} key='og:image' />
        <meta property='og:url' content={`https://jigugong.com/missions/{mission.id}/{article.article}`} key='og:url' />
        <meta property='og:type' content='article' key='og:type' />
        <meta property='og:site_name' content={`지구공 : {article.subject}`} key='og:site_name' />
      </Head>
      <Container data-container='article'>
        {/* {scrollVertical && <style>{scrollVerticalTrue}</style>}
        {!scrollVertical && <style>{scrollVerticalFalse}</style>} */}
        <PageHeading link={'/'} label={'article.subject'} />
        <CategorySelect />
        <Contents>
          매장 목록
        </Contents>
      </Container>
    </>
  )
}

export default index;
