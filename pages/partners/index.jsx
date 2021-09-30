import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { isIOS, isAndroid } from 'react-device-detect';
import styled from '@emotion/styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { mq, styles, fontWeights, Clamp, Rem, Em } from '../../utils/designSystem';
import LinkButton from '../../utils/LinkButton';
import { images } from '../../assets';
import PageHeading from '../../components/global/PageHeading';
import OrganizationName from '../../sections/partners/OrganizationName';
import OrganizationDescription from '../../sections/partners/OrganizationDescription';
import OrganizationStatus from '../../sections/partners/OrganizationStatus';
import OrganizationMissions from '../../sections/partners/OrganizationMissions';
import OrganizationPress from '../../sections/partners/OrganizationPress';
import ArticleList from '../../components/global/ArticleList';
import ArticleListChildren from '../../components/global/ArticleListChildren';

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
  paddingTop: Em(40),
});

const SecondaryHeading = styled.h2({
  fontSize: Rem(20),
  fontWeight: fontWeights.Medium,
  [mq.minSmall]: {
    fontSize: Rem(24),
  },
  '&[data-section=description]': {
    ...styles.screenReaderOnly,
  },
});

const SliderControl = styled.div({
  margin: '0 auto',
  padding: `0 ${Em(20)}`,
  width: '100%',
  [mq.minTablet]: {
    padding: `0 ${Em(28)}`,
  },
  [mq.minSmall]: {
    padding: `0 ${Em(60)}`,
    maxWidth: Rem(1188),
  },
});

const StyledSlider = styled(Slider)({
  width: '100%',
  '& .slick-dots': {
    display: 'none!important',
  },
});

const ButtonPrevious = styled.button({
  left: `-${Rem(20)}`,
  zIndex: 9,
  width: Rem(25),
  height: '100%',
  background: 'none',
  [mq.minTablet]: {
    left: `-${Rem(28)}`,
    width: Rem(40),
  },
  [mq.minSmall]: {
    left: `-${Rem(60)}`,
    width: Rem(70),
  },
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
  },
  '&::before': {
    zIndex: 1,
    width: `calc(100% - ${Rem(8)})`,
    opacity: 1,
    backgroundColor: '#f6f6f6',
  },
  '&::after': {
    width: '100%',
    zIndex: 2,
    background: `url(${images.icons.sliderPrevious}) no-repeat 50% 50%/${Rem(13)} ${Rem(23)}`,
    [mq.minSmall]: {
      backgroundSize: `${Rem(18)} ${Rem(33)}`,
    },
    '&:hover, &:focus': {
      background: `url(${images.icons.sliderPrevious}) no-repeat 50% 50%/${Rem(13)} ${Rem(23)}`,
      [mq.minSmall]: {
        backgroundSize: `${Rem(18)} ${Rem(33)}`,
      },
    },
  },
});

const ButtonNext = styled.button({
  right: `-${Rem(20)}`,
  zIndex: 9,
  width: Rem(25),
  height: '100%',
  background: 'none',
  [mq.minTablet]: {
    right: `-${Rem(28)}`,
    width: Rem(40),
  },
  [mq.minSmall]: {
    right: `-${Rem(60)}`,
    width: Rem(70),
  },
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
  },
  '&::before': {
    zIndex: 1,
    width: `calc(100% - ${Rem(8)})`,
    opacity: 1,
    backgroundColor: '#f6f6f6',
  },
  '&::after': {
    width: '100%',
    zIndex: 2,
    background: `url(${images.icons.sliderNext}) no-repeat 50% 50%/${Rem(13)} ${Rem(23)}`,
    [mq.minSmall]: {
      backgroundSize: `${Rem(18)} ${Rem(33)}`,
    },
    '&:hover, &:focus': {
      background: `url(${images.icons.sliderNext}) no-repeat 50% 50%/${Rem(13)} ${Rem(23)}`,
      [mq.minSmall]: {
        backgroundSize: `${Rem(18)} ${Rem(33)}`,
      },
    },
  },
});

const StickerInfo = styled(LinkButton)(({ isDesktop }) => ({
  display: 'block',
  margin: Em(5),
  boxShadow: isDesktop ? `-${Em(10)} -${Em(10)} ${Em(20)} #F3F3F3` : `0 ${Em(4)} ${Em(4)} rgba(0, 0, 0, .25)`,
  borderRadius: Em(20),
  transition: 'box-shadow .25s',
  '&:hover': {
    boxShadow: isDesktop ? `0 ${Em(4)} ${Em(4)} rgba(0, 0, 0, .25)` : `0 ${Em(4)} ${Em(4)} rgba(0, 0, 0, .25)`,
    '& img': {
      transform: isDesktop ? 'scale(1.1)' : 'scale(1)',
    },
  },
  [mq.minTablet]: {
    margin: `${Em(10)} ${Em(10)} ${Em(15)}`,
  },
}));

const StickerImage = styled.div({
  position: 'relative',
  paddingTop: '81.34920635%',
  borderRadius: Em(20),
  overflow: 'hidden',
  height: 0,
});

const StickerThumbnail = styled.img({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform .25s',
  transform: 'scale(1)',
});

const ActionInfo = styled(LinkButton)(({ isDesktop }) => ({
  display: 'block',
  margin: Em(5),
  boxShadow: isDesktop ? `-${Em(10)} -${Em(10)} ${Em(20)} #F3F3F3` : `0 ${Em(4)} ${Em(4)} rgba(0, 0, 0, .25)`,
  borderRadius: Em(20),
  transition: 'box-shadow .25s',
  '&:hover': {
    boxShadow: isDesktop ? `0 ${Em(4)} ${Em(4)} rgba(0, 0, 0, .25)` : `0 ${Em(4)} ${Em(4)} rgba(0, 0, 0, .25)`,
    '& [aria-hidden] img': {
      transform: isDesktop ? 'scale(1.1)' : 'scale(1)',
    },
  },
  [mq.minTablet]: {
    margin: `${Em(10)} ${Em(10)} ${Em(15)}`,
  },
}));

const ActionImage = styled.div({
  position: 'relative',
  paddingTop: '89.6%',
  borderRadius: `${Em(20)} ${Em(20)} 0 0`,
  overflow: 'hidden',
  height: 0,
});

const ActionThumbnail = styled.img({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform .25s',
  transform: 'scale(1)',
});

const ActionFigure = styled.div({
  padding: `${Em(10)} ${Em(16)}`,
  borderRadius: `0 0 ${Em(16.2)} ${Em(16.2)}`,
  backgroundColor: '#ffffff',
  [mq.minXsmall]: {
    padding: `${Em(14)} ${Em(20)}`,
  },
});

const ItemCategory = styled.div({
  fontSize: Rem(16),
  fontWeight: fontWeights.Regular,
  color: '#5a5a5a',
});

const ItemSummary = styled.strong({
  display: 'block',
  margin: `${Em(8)} 0`,
  fontSize: Rem(20),
  fontWeight: fontWeights.SemiBold,
  color: '#000000',
  ...styles.ellipsis,
  [mq.minXsmall]: {
    fontSize: Rem(24),
  },
});

const ItemUser = styled.div({
  display: 'flex',
  alignItems: 'center',
});

const ItemUserImage = styled.div({
  borderRadius: '100%',
  overflow: 'hidden',
  width: Rem(24),
  height: Rem(24),
});

const ItemUserAvartar = styled.img({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const ItemUserName = styled.cite({
  paddingLeft: Em(10),
  fontSize: Rem(14),
  fontWeight: fontWeights.Regular,
  fontStyle: 'normal',
  color: '#5a5a5a',
  ...styles.ellipsis,
  [mq.minXsmall]: {
    fontSize: Rem(16),
  },
});

const ItemDescription = styled.div`
  ${Clamp(2, 33)};
  margin: ${Em(10)} 0 ${Em(12)};
  height: ${Rem(33)};
  font-size: ${Rem(14)};
  font-weight: ${fontWeights.Regular};
  color: #000000;
  ${mq.minXsmall} {
    ${Clamp(2, 38)};
    height: ${Rem(38)};
    font-size: ${Rem(16)};
  };
`;

const ItemOptions = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
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
  [mq.minXsmall]: {
    width: Rem(24),
    height: Rem(28),
  },
});

const ItemOptionLikeIconImage = styled.img({
  width: Rem(19),
  [mq.minXsmall]: {
    width: Rem(23),
  },
});

const ItemOptionStatus = styled.span({
  padding: `${Em(2)} 0 0 ${Em(5)}`,
  fontSize: Rem(14),
  letterSpacing: `-${Rem(.5)}`,
  fontWeight: fontWeights.Regular,
  color: '#000000',
  [mq.minXsmall]: {
    fontSize: Rem(18),
  },
});

const ItemOptionReply = styled.span({
  display: 'flex',
  alignItems: 'center',
});

const ItemOptionReplyIcon = styled.span({
  width: Rem(20),
  height: Rem(23),
  background: `url(${images.icons.chatbox}) no-repeat 50% 50%/${Rem(18)} ${Rem(22)}`,
  [mq.minXsmall]: {
    width: Rem(24),
    height: Rem(28),
    backgroundSize: `${Rem(20)} ${Rem(24)}`,
  },
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
  [mq.minXsmall]: {
    width: Rem(24),
    height: Rem(28),
  },
});

const ItemOptionBookmarkIconImage = styled.img({
  width: Rem(16),
  [mq.minXsmall]: {
    width: Rem(20),
  }
});

function PreviousArrow(props) {
  const { className, onClick, label } = props;
  return <ButtonPrevious className={className} onClick={onClick} aria-label={label} />
}

function NextArrow(props) {
  const { className, onClick, label } = props;
  return <ButtonNext className={className} onClick={onClick} aria-label={label} />
}

function ParnerDetail() {
  const [sticker, setSticker] = React.useState(null);
  const [action, setAction] = React.useState(null);
  const sticker_url = '/api/stickers';
  const action_url = '/api/action';
  React.useEffect(() => {
    axios.get(sticker_url).then((response) => {
      setSticker(response.data);
    });
    axios.get(action_url).then((response) => {
      setAction(response.data);
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PreviousArrow label={'이전으로 이동'} />,
    nextArrow: <NextArrow label={'다음으로 이동'} />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const isDesktop = !isIOS && !isAndroid ? true : false;

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
      <Container>
        <PageHeading link={'/'} label={'파트너'} />
        <OrganizationName />
        <Contents>
          <SecondaryHeading data-section='description'>파트너 소개</SecondaryHeading>
          <OrganizationDescription />
          <SecondaryHeading>사회공헌 기여도</SecondaryHeading>
          <OrganizationStatus />
          <SecondaryHeading>함께 진행한 미션</SecondaryHeading>
          <OrganizationMissions />
        </Contents>
        <ArticleList>
          <ArticleListChildren label={'section-sticker'} heading={'미션 스티커'}>
            <SliderControl>
              <StyledSlider {...settings}>
                {sticker && sticker.map(item => (
                  <div key={item._id}>
                    <StickerInfo
                      href='/'
                      isDesktop={isDesktop}
                    >
                      <StickerImage><StickerThumbnail src={item.image} alt={''} /></StickerImage>
                    </StickerInfo>
                  </div>
                ))}
              </StyledSlider>
            </SliderControl>
          </ArticleListChildren>

          <ArticleListChildren label={'section-action'} heading={'미션 참여 게시글'}>
            <SliderControl>
              <StyledSlider {...settings}>
                {action && action.map(item => (
                  <div key={item._id}>
                    <ActionInfo
                      href='/'
                      isDesktop={isDesktop}
                    >
                      <ActionImage aria-hidden='true'><ActionThumbnail src={item.thumbnail} alt={''} /></ActionImage>
                      <ActionFigure>
                        <ItemCategory>{item.category}</ItemCategory>
                        <ItemSummary>{item.summary}</ItemSummary>
                        <ItemUser>
                          <ItemUserImage><ItemUserAvartar src={item.user.avatar} alt={''} /></ItemUserImage>
                          <ItemUserName>{item.user.name}</ItemUserName>
                        </ItemUser>
                        <ItemDescription>{item.description}</ItemDescription>
                        <ItemOptions>
                          <ItemOptionLike>
                            <ItemOptionLikeIcon>
                              {item.option.like.active ?
                                <ItemOptionLikeIconImage
                                  src={`${images.icons.heartTrue}`}
                                  alt={'찜됨'}
                                /> :
                                <ItemOptionLikeIconImage
                                  src={`${images.icons.heartFalse}`}
                                  alt={'찜안됨'}
                                />
                              }
                            </ItemOptionLikeIcon>
                            <ItemOptionStatus aria-label={'찜 개수'}>{item.option.like.count}</ItemOptionStatus>
                          </ItemOptionLike>
                          <ItemOptionReply>
                            <ItemOptionReplyIcon />
                            <ItemOptionStatus aria-label={'댓글 개수'}>{item.option.reply}</ItemOptionStatus>
                          </ItemOptionReply>
                          <ItemOptionBookmark>
                            <ItemOptionBookmarkIcon>
                              {item.option.bookmark.active ?
                                <ItemOptionBookmarkIconImage
                                  src={`${images.icons.bookmarkTrue}`}
                                  alt={'북마크 됨'}
                                /> :
                                <ItemOptionLikeIconImage
                                  src={`${images.icons.bookmarkFalse}`}
                                  alt={'북마크 안됨'}
                                />
                              }
                            </ItemOptionBookmarkIcon>
                            <ItemOptionStatus aria-label={'북마크 개수'}>{item.option.bookmark.count}</ItemOptionStatus>
                          </ItemOptionBookmark>
                        </ItemOptions>
                      </ActionFigure>
                    </ActionInfo>
                  </div>
                ))}
              </StyledSlider>
            </SliderControl>
          </ArticleListChildren>
        </ArticleList>

        <Contents>
          <SecondaryHeading>뉴스기사</SecondaryHeading>
          <OrganizationPress />
        </Contents>
      </Container>
    </>
  )
}

export default ParnerDetail;
