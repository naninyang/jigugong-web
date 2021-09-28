import React, { useState } from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { mq, styles, fontWeights, Rem, Em } from '../../../../utils/designSystem';
import PageHeading from '../../../../components/global/PageHeading';

const scrollVerticalTrue = `body{background-color:#F6F6F6}`;
const scrollVerticalFalse = `body{background-color:#FFFFFF}`;

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
  width: '100%',
  maxWidth: Rem(375),
  minHeight: `calc(100vh - ${Rem(97)})`,
});

const SliderControl = styled.div();

const StyledSlider = styled(Slider)({
  width: '100%',
  '& .slick-slide div': {
    outline: 'none',
  },
  '& .slick-arrow': {
    display: 'none!important',
  },
  '& .slick-dots': {
    bottom: 0,
    height: Rem(40),
    padding: `${Rem(13)} 0`,
    backgroundColor: '#ffffff',
    borderRadius: `${Em(15)} ${Em(15)} 0 0`,
    '& li': {
      width: 'auto',
      height: 'auto',
      margin: 0,
      '&.slick-active button::before': {
        opacity: 1,
      },
      '& button': {
        padding: Rem(3),
        width: 'auto',
        height: 'auto',
        '&:hover::before': {
          opacity: 0.7,
        },
        '&::before': {
          content: '""',
          position: 'static',
          display: 'block',
          width: Rem(8),
          height: Rem(8),
          backgroundColor: '#000000',
          borderRadius: '100%',
          opacity: 0.37,
          lineHeight: 'normal',
        },
      },
    },
  },
});

const Thumbnail = styled.div({
  position: 'relative',
  paddingTop: '100%',
  height: 0,
});

const ThumbnailImage = styled.img({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

function ArticleItem() {
  const [scrollY, setScrollY] = useState(0);
  const scrollVertical = scrollY > 97 ? true : false

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <ul><li>{dots}</li></ul>
    ),
    customPaging: i => (
      <button type='button' />
    )
  };

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
        {scrollVertical && <style>{scrollVerticalTrue}</style>}
        {!scrollVertical && <style>{scrollVerticalFalse}</style>}
        <PageHeading link={'/'} label={'article.subject'} />
        <Contents>

          <SliderControl>
            <StyledSlider {...settings}>
              <Thumbnail>
                <ThumbnailImage src={'https://dummyimage.com/375x375/0EAA5/fff.png'} alt='' />
              </Thumbnail>
              <Thumbnail>
                <ThumbnailImage src={'https://dummyimage.com/375x375/0EAA5/fff.png'} alt='' />
              </Thumbnail>
              <Thumbnail>
                <ThumbnailImage src={'https://dummyimage.com/375x375/0EAA5/fff.png'} alt='' />
              </Thumbnail>
              <Thumbnail>
                <ThumbnailImage src={'https://dummyimage.com/375x375/0EAA5/fff.png'} alt='' />
              </Thumbnail>
              <Thumbnail>
                <ThumbnailImage src={'https://dummyimage.com/375x375/0EAA5/fff.png'} alt='' />
              </Thumbnail>
              <Thumbnail>
                <ThumbnailImage src={'https://dummyimage.com/375x375/0EAA5/fff.png'} alt='' />
              </Thumbnail>
            </StyledSlider>
          </SliderControl>

        </Contents>
      </Container>
    </>
  )
}

export default ArticleItem;
