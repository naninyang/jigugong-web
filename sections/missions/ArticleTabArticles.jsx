import React from 'react';
import { isIOS, isAndroid } from 'react-device-detect';
import styled from '@emotion/styled';
import { mq, styles, fontWeights, Clamp, Rem, Em } from '../../utils/designSystem';
import LinkButton from '../../utils/LinkButton';
import { images } from '../../assets';

const MissionArticles = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
});

const ArticleItem = styled.div({
  flexBasis: '50%',
});

const ArticleInfo = styled(LinkButton)(({ isDesktop }) => ({
  display: 'block',
  margin: `${Em(5)} ${Em(7)} ${Em(20)}`,
  boxShadow: `0 ${Em(4)} ${Em(4)} rgba(0, 0, 0, .25)`,
  borderRadius: Em(20),
  transition: 'box-shadow .25s',
  '&:hover': {
    boxShadow: isDesktop ? `0 ${Em(8)} ${Em(8)} rgba(0, 0, 0, .25)` : `0 ${Em(4)} ${Em(4)} rgba(0, 0, 0, .25)`,
    '& [aria-hidden] img': {
      transform: isDesktop ? 'scale(1.1)' : 'scale(1)',
    },
  },
  [mq.minTablet]: {
    margin: `${Em(5)} ${Em(15)} ${Em(28)}`,
  },
}));

const ArticleImage = styled.div({
  position: 'relative',
  paddingTop: '89.6%',
  borderRadius: `${Em(20)} ${Em(20)} 0 0`,
  overflow: 'hidden',
  height: 0,
});

const ArticleThumbnail = styled.img({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform .25s',
  transform: 'scale(1)',
});

const ArticleFigure = styled.div({
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
  fontSize: Rem(18),
  fontWeight: fontWeights.SemiBold,
  color: '#000000',
  ...styles.ellipsis,
  [mq.minXsmall]: {
    fontSize: Rem(22),
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
  },
});

function ArticleTabArticles() {
  const isDesktop = !isIOS && !isAndroid ? true : false;

  return (
    <MissionArticles>
      {/* {} */}
      <ArticleItem>
        <ArticleInfo
          href='/'
          isDesktop={isDesktop}
        >
          <ArticleImage aria-hidden='true'><ArticleThumbnail src={'https://dummyimage.com/336x336/0EAA5/fff.png'} alt={''} /></ArticleImage>
          <ArticleFigure>
            <ItemCategory>채식</ItemCategory>
            <ItemSummary>잘 먹고 잘 살기</ItemSummary>
            <ItemUser>
              <ItemUserImage><ItemUserAvartar src={'https://dummyimage.com/24x24/0EAA5/fff.png'} alt={''} /></ItemUserImage>
              <ItemUserName>이먼지</ItemUserName>
            </ItemUser>
            <ItemDescription>안녕하세요 아직까진 페스코테리언을 유지 중인 지구공 막 가입한 이먼지라고 합니당 안녕하세요 아직까진 페스코테리언을 유지 중인 지구공 막 가입한 이먼지라고 합니당 </ItemDescription>
            <ItemOptions>
              <ItemOptionLike>
                <ItemOptionLikeIcon>
                  <ItemOptionLikeIconImage
                    src={`${images.icons.heartTrue}`}
                    alt={'찜됨'}
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
                    src={`${images.icons.bookmarkTrue}`}
                    alt={'북마크 됨'}
                  />
                </ItemOptionBookmarkIcon>
                <ItemOptionStatus aria-label={'북마크 개수'}>3</ItemOptionStatus>
              </ItemOptionBookmark>
            </ItemOptions>
          </ArticleFigure>
        </ArticleInfo>
      </ArticleItem>
      {/* { } */}
      {/* {} */}
      <ArticleItem>
        <ArticleInfo
          href='/'
          isDesktop={isDesktop}
        >
          <ArticleImage aria-hidden='true'><ArticleThumbnail src={'https://dummyimage.com/336x336/0EAA5/fff.png'} alt={''} /></ArticleImage>
          <ArticleFigure>
            <ItemCategory>채식</ItemCategory>
            <ItemSummary>잘 먹고 잘 살기</ItemSummary>
            <ItemUser>
              <ItemUserImage><ItemUserAvartar src={'https://dummyimage.com/24x24/0EAA5/fff.png'} alt={''} /></ItemUserImage>
              <ItemUserName>이먼지</ItemUserName>
            </ItemUser>
            <ItemDescription>안녕하세요 아직까진 페스코테리언을 유지 중인 지구공 막 가입한 이먼지라고 합니당 안녕하세요 아직까진 페스코테리언을 유지 중인 지구공 막 가입한 이먼지라고 합니당 </ItemDescription>
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
          </ArticleFigure>
        </ArticleInfo>
      </ArticleItem>
      {/* {} */}
      <ArticleItem>
        <ArticleInfo
          href='/'
          isDesktop={isDesktop}
        >
          <ArticleImage aria-hidden='true'><ArticleThumbnail src={'https://dummyimage.com/336x336/0EAA5/fff.png'} alt={''} /></ArticleImage>
          <ArticleFigure>
            <ItemCategory>채식</ItemCategory>
            <ItemSummary>잘 먹고 잘 살기</ItemSummary>
            <ItemUser>
              <ItemUserImage><ItemUserAvartar src={'https://dummyimage.com/24x24/0EAA5/fff.png'} alt={''} /></ItemUserImage>
              <ItemUserName>이먼지</ItemUserName>
            </ItemUser>
            <ItemDescription>안녕하세요 아직까진 페스코테리언을 유지 중인 지구공 막 가입한 이먼지라고 합니당 안녕하세요 아직까진 페스코테리언을 유지 중인 지구공 막 가입한 이먼지라고 합니당 </ItemDescription>
            <ItemOptions>
              <ItemOptionLike>
                <ItemOptionLikeIcon>
                  <ItemOptionLikeIconImage
                    src={`${images.icons.heartTrue}`}
                    alt={'찜됨'}
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
                    src={`${images.icons.bookmarkTrue}`}
                    alt={'북마크 됨'}
                  />
                </ItemOptionBookmarkIcon>
                <ItemOptionStatus aria-label={'북마크 개수'}>3</ItemOptionStatus>
              </ItemOptionBookmark>
            </ItemOptions>
          </ArticleFigure>
        </ArticleInfo>
      </ArticleItem>
      {/* {} */}
      <ArticleItem>
        <ArticleInfo
          href='/'
          isDesktop={isDesktop}
        >
          <ArticleImage aria-hidden='true'><ArticleThumbnail src={'https://dummyimage.com/336x336/0EAA5/fff.png'} alt={''} /></ArticleImage>
          <ArticleFigure>
            <ItemCategory>채식</ItemCategory>
            <ItemSummary>잘 먹고 잘 살기</ItemSummary>
            <ItemUser>
              <ItemUserImage><ItemUserAvartar src={'https://dummyimage.com/24x24/0EAA5/fff.png'} alt={''} /></ItemUserImage>
              <ItemUserName>이먼지</ItemUserName>
            </ItemUser>
            <ItemDescription>안녕하세요 아직까진 페스코테리언을 유지 중인 지구공 막 가입한 이먼지라고 합니당 안녕하세요 아직까진 페스코테리언을 유지 중인 지구공 막 가입한 이먼지라고 합니당 </ItemDescription>
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
          </ArticleFigure>
        </ArticleInfo>
      </ArticleItem>
      {/* {} */}
    </MissionArticles>
  )
}

export default ArticleTabArticles;
