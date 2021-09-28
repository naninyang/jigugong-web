import React, { useState } from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { mq, styles, fontWeights, Rem, Em } from '../../../../utils/designSystem';
import { images } from '../../../../assets';
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

const Article = styled.article({
  position: 'relative',
});

const CategoryName = styled.strong({
  paddingLeft: Em(12),
  fontSize: Rem(18),
  fontWeight: fontWeights.Regular,
  color: '#5a5a5a',
});

const DateTime = styled.time({
  position: 'absolute',
  top: 0,
  right: Rem(12),
  fontSize: Rem(16),
  fontWeight: fontWeights.Regular,
  color: '#5a5a5a',
});

const Summary = styled.h1({
  margin: `${Em(11)} ${Em(8)}`,
  fontSize: Rem(24),
  fontWeight: fontWeights.SemiBold,
});

const Creator = styled.div({
  display: 'flex',
  alignItems: 'center',
  padding: `0 ${Em(16)}`,
  height: Rem(44),
  borderRadius: Em(10),
  backgroundColor: '#f6f6f6',
});

const CreatorAvatar = styled.div({
  width: Rem(25),
  height: Rem(25),
  overflow: 'hidden',
  borderRadius: '100%',
});

const AvatarImage = styled.img({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const CreatorName = styled.div({
  marginLeft: Em(12),
  fontSize: Rem(18),
  fontWeight: fontWeights.Regular,
});

const Description = styled.div({
  padding: `${Em(16)} ${Em(7)}`,
  '& p': {
    lineHeight: 1.56,
  },
});

const ItemOptions = styled.div({
  display: 'flex',
  alignItems: 'center',
  padding: `0 ${Em(16)}`,
  height: Rem(44),
  borderRadius: Em(10),
  backgroundColor: '#f6f6f6',
});

const ItemOptionLike = styled.span({
  display: 'flex',
  alignItems: 'center',
});

const ItemOptionLikeIcon = styled.span({
  display: 'flex',
  alignItems: 'center',
  width: Rem(20),
  height: Rem(23),
});

const ItemOptionLikeIconImage = styled.img({
  width: Rem(19),
});

const ItemOptionStatus = styled.span({
  padding: `${Em(2)} 0 0 ${Em(5)}`,
  fontSize: Rem(14),
  letterSpacing: `-${Rem(.5)}`,
  fontWeight: fontWeights.Regular,
  color: '#000000',
});

const ItemOptionReply = styled.span({
  display: 'flex',
  alignItems: 'center',
  padding: `0 ${Em(40)}`,
});

const ItemOptionReplyIcon = styled.span({
  width: Rem(20),
  height: Rem(23),
  background: `url(${images.icons.chatbox}) no-repeat 50% 50%/${Rem(18)} ${Rem(22)}`,
});

const ItemOptionBookmark = styled.span({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
});

const ItemOptionBookmarkIcon = styled.span({
  display: 'flex',
  alignItems: 'center',
  width: Rem(20),
  height: Rem(23),
});

const ItemOptionBookmarkIconImage = styled.img({
  width: Rem(16),
});

const CommentList = styled.ul();

const CommentItem = styled.li();

const ReplyList = styled.ul();

const ReplyItem = styled.li();

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

          <Article>
            <CategoryName>미션명</CategoryName>
            <DateTime datetime='2021-08-16'>2021.08.16</DateTime>
            <Summary>잘 먹고 잘 살기</Summary>
            <Creator>
              <CreatorAvatar><AvatarImage src={'https://dummyimage.com/25x25/0EAA5/fff.png'} alt='' /></CreatorAvatar>
              <CreatorName>이먼지</CreatorName>
            </Creator>
            <Description>
              <p>안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요</p>
              <p>안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요 안녕하세요</p>
            </Description>
          </Article>

          <ItemOptions>
            <ItemOptionLike>
              <ItemOptionLikeIcon>
                <ItemOptionLikeIconImage
                  src={`${images.icons.heartFalse}`}
                  alt={'찜안됨'}
                />
              </ItemOptionLikeIcon>
              <ItemOptionStatus aria-label={'찜 개수'}>12</ItemOptionStatus>
            </ItemOptionLike>
            <ItemOptionReply>
              <ItemOptionReplyIcon />
              <ItemOptionStatus aria-label={'댓글 개수'}>10</ItemOptionStatus>
            </ItemOptionReply>
            <ItemOptionBookmark>
              <ItemOptionBookmarkIcon>
                <ItemOptionBookmarkIconImage
                  src={`${images.icons.bookmarkFalse}`}
                  alt={'북마크 안됨'}
                />
              </ItemOptionBookmarkIcon>
              <ItemOptionStatus aria-label={'북마크 개수'}>3</ItemOptionStatus>
            </ItemOptionBookmark>
          </ItemOptions>

          <CommentList>
            <CommentItem>
              comment #1
            </CommentItem>
            <CommentItem>
              comment #2
              <button type='button'>대댓글 1개 더보기</button>
              <ReplyList>
                <ReplyItem>
                  reply #2_1
                </ReplyItem>
                <ReplyItem>
                  reply #2_2
                </ReplyItem>
              </ReplyList>
            </CommentItem>
          </CommentList>

        </Contents>
      </Container>
    </>
  )
}

export default ArticleItem;
