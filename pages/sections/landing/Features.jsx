import React from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import styled from '@emotion/styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { mq, styles, fontWeights, Clamp, Rem, Em } from '../../utils/designSystem';
import { images } from '../../assets/';
import ButtonGreen from '../../components/ButtonGreen';
import HeadingPrimary from '../../components/HeadingPrimary';
import HeadingSecondary from '../../components/HeadingSecondary';
import Description from '../../components/Description';
import ArticleList from '../../components/ArticleList';

const Container = styled.section();

const Practical = styled.div({
  backgroundColor: '#dcf5e8',
  [mq.maxTablet]: {
    overflow: 'hidden',
  },
  [mq.minSmall]: {
    overflow: 'hidden',
  },
});

const Action = styled.div({
  ...styles.widthSettings,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: Em(40),
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
    minHeight: Rem(829 + 110),
    height: `calc(100vh - ${Rem(609)})`,
  },
});

const MockupImagesAction = styled.div({
  marginTop: Em(40),
  [mq.minTablet]: {
    overflow: 'hidden',
    margin: `${Em(40)} -${Em(40)} 0`,
  },
  [mq.minSmall]: {
    marginTop: 0,
  },
});

const MockupImageAction = styled.div({
  background: `url(${images.mockup.featuresAction}) no-repeat 50% 50%/cover`,
  margin: `0 -${Em(170)}`,
  paddingTop: '120.114345%',
  height: 0,
  [mq.minTablet]: {
    margin: `0 -${Em(110)}`,
    paddingBottom: 0,
  },
  [mq.minXsmall]: {
    margin: `0 -${Em(70)}`,
    maxWidth: Rem(1211),
  },
  [mq.minSmall]: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: `${Em(110)} 0 0 ${Em(350)}`,
    paddingTop: '69.114345%',
    width: Rem(1211),
  },
});

const Activity = styled.div({
  backgroundImage: 'linear-gradient(to top, #dcf5e8, #eaf7ff)',
  display: 'flex',
  flexDirection: 'column',
  padding: `${Em(40)} ${Em(25)} 0`,
  [mq.minXsmall]: {
    padding: 0,
  },
  [mq.minSmall]: {
    padding: `${Em(80)} 0`,
    minHeight: Rem(322 + 322 + 120),
    height: '100vh',
  },
});

const Contents = styled.div({
  display: 'flex',
  flexDirection: 'column',
  [mq.minSmall]: {
    width: Rem(582),
  },
  [mq.minXsmall]: {
    '&[data-activity=conversation]': {
      paddingRight: Em(100),
      alignItems: 'flex-end',
      textAlign: 'right',
    },
    '&[data-activity=store]': {
      paddingLeft: Em(100),
      alignItems: 'flex-start',
      textAlign: 'left',
    },
  },
});

const Conversation = styled.div({
  [mq.minXsmall]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: `${Em(80)} 0 ${Em(40)}`,
  },
  [mq.minSmall]: {
    padding: 0,
    minHeight: Rem(433),
    height: '50vh',
  },
});

const MockupImagesConversation = styled.div({
  overflow: 'hidden',
  paddingTop: Em(40),
  [mq.minXsmall]: {
    paddingTop: 0,
  },
  [mq.minSmall]: {
    height: Rem(433),
  },
});

const MockupImageConversation = styled.div({
  background: `url(${images.mockup.featuresConversation}) no-repeat 50% 50% /contain`,
  paddingTop: '78.114345%',
  height: 0,
  [mq.minXsmall]: {
    paddingTop: '77.114345%',
    width: `calc(100vh - ${Rem(600)})`,
  },
  [mq.minSmall]: {
    width: Rem(582),
  },
});

const Store = styled.div({
  paddingTop: Em(20),
  [mq.minXsmall]: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Em(40),
  },
  [mq.minSmall]: {
    padding: 0,
    minHeight: Rem(433),
    height: '50vh',
  },
});

const MockupImagesStore = styled.div({
  overflow: 'hidden',
  [mq.minTablet]: {
    margin: `-${Em(30)} -${Em(25)} -${Em(50)}`,
  },
  [mq.minXsmall]: {
    display: 'flex',
    alignItems: 'center',
    margin: `-${Em(48)} -${Em(25)}`,
    paddingTop: 0,
  },
  [mq.minSmall]: {
    height: Rem(433),
  },
});

const MockupImageStore = styled.div({
  background: `url(${images.mockup.featuresStore}) no-repeat 50% 50%/contain`,
  margin: `-${Em(37)} 0 -${Em(37)} -${Em(70)}`,
  paddingTop: '94.114345%',
  height: 0,
  [mq.minTablet]: {
    marginLeft: `-${Em(75)}`,
    paddingTop: '89.114345%',
  },
  [mq.minXsmall]: {
    paddingTop: '77.114345%',
    width: `calc(100vh - ${Rem(600)})`,
  },
  [mq.minSmall]: {
    width: Rem(582),
  },
});

const LinkGroup = styled.div({
  position: 'relative',
  zIndex: 999999,
  display: 'flex',
  flexDirection: 'column',
  margin: `${Em(25)} 0`,
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

const SliderControl = styled.div({
  margin: '0 auto',
  padding: `0 ${Em(20)}`,
  width: '100%',
  [mq.minTablet]: {
    padding: `0 ${Em(28)}`,
  },
  [mq.minSmall]: {
    padding: `0 ${Em(70)}`,
    maxWidth: Rem(1188),
  },
});

const StyledSlider = styled(Slider)({
  width: '100%',
  '& .slick-slide div': {
    outline: 'none',
  },
  '& .slick-dots': {
    display: 'none!important',
  },
});

const ButtonPrevious = styled.button({
  left: `-${Rem(20)}`,
  zIndex: 9,
  width: Rem(25),
  height: '100%',
  background: `#f6f6f6 url(${images.icons.sliderPrevious}) no-repeat 50% 50%/${Rem(13)} ${Rem(23)}`,
  [mq.minTablet]: {
    left: `-${Rem(28)}`,
    width: Rem(40),
  },
  [mq.minSmall]: {
    left: `-${Rem(70)}`,
    width: Rem(70),
    backgroundSize: `${Rem(18)} ${Rem(33)}`,
  },
  '&:hover, &:focus': {
    background: `url(${images.icons.sliderPrevious}) no-repeat 50% 50%/${Rem(13)} ${Rem(23)}`,
    [mq.minSmall]: {
      backgroundSize: `${Rem(18)} ${Rem(33)}`,
    },
  },
  '&::before': {
    display: 'none',
  },
});

const ButtonNext = styled.button({
  right: `-${Rem(20)}`,
  zIndex: 9,
  width: Rem(25),
  height: '100%',
  background: `url(${images.icons.sliderNext}) no-repeat 50% 50%/${Rem(13)} ${Rem(23)}`,
  [mq.minTablet]: {
    right: `-${Rem(28)}`,
    width: Rem(40),
  },
  [mq.minSmall]: {
    right: `-${Rem(70)}`,
    width: Rem(70),
    backgroundSize: `${Rem(18)} ${Rem(33)}`,
  },
  '&:hover, &:focus': {
    background: `url(${images.icons.sliderNext}) no-repeat 50% 50%/${Rem(13)} ${Rem(23)}`,
    [mq.minSmall]: {
      backgroundSize: `${Rem(18)} ${Rem(33)}`,
    },
  },
  '&::before': {
    display: 'none',
  },
});

const ActionInfo = styled.div({
  margin: `0 ${Em(5)}`,
  [mq.minTablet]: {
    margin: `0 ${Em(10)}`,
  },
});

const ActionImageModule = styled.div({
  position: 'relative',
  paddingTop: '89.6%',
  height: 0,
});

const ActionImage = styled.img({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const ActionFigure = styled.div({
  padding: `${Em(14)} ${Em(20)}`,
  height: Rem(201),
  backgroundColor: '#ffffff',
});

const ItemCategory = styled.div({
  fontSize: Rem(16),
  fontWeight: fontWeights.Regular,
  color: '#5a5a5a',
});

const ItemSummary = styled.strong({
  display: 'block',
  margin: `${Em(8)} 0`,
  fontSize: Rem(24),
  fontWeight: fontWeights.SemiBold,
  ...styles.ellipsis,
});

const ItemUser = styled.div({
  display: 'flex',
  alignItems: 'center',
});

const ItemUserThumbnail = styled.div({
  borderRadius: '100%',
  overflow: 'hidden',
  width: Rem(24),
  height: Rem(24),
});

const ItemUserThumbnailImage = styled.img({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const ItemUserName = styled.cite({
  paddingLeft: Em(10),
  fontSize: Rem(16),
  fontWeight: fontWeights.Regular,
  fontStyle: 'normal',
  color: '#5a5a5a',
});

const ItemDescription = styled.div`
  ${Clamp(2, 38)};
  margin: ${Em(10)} 0 ${Em(12)};
  height: ${Rem(38)};
  font-size: ${Rem(16)};
  font-weight: ${fontWeights.Regular};
`;

const ItemOptions = styled.div({
  display: 'flex',
});

const ItemOptionLike = styled.span({
  display: 'flex',
  alignItems: 'center',
});

const ItemOptionLikeIcon = styled.span({
  display: 'flex',
  alignItems: 'center',
  width: Rem(24),
  height: Rem(28),
});

const ItemOptionLikeIconImage = styled.img({
  width: Rem(23),
});

const ItemOptionStatus = styled.span({
  margin: `0 ${Em(7)}`,
  paddingTop: Em(2),
  fontSize: Rem(18),
  fontWeight: fontWeights.Regular,
});

const ItemOptionReply = styled.div({
  display: 'flex',
  alignItems: 'center',
  margin: `0 ${Em(22)} 0 ${Em(20)}`,
});

const ItemOptionReplyIcon = styled.div({
  width: Rem(24),
  height: Rem(28),
  background: `url(${images.icons.chatbox}) no-repeat 50% 50%/${Rem(24)} ${Rem(24)}`,
});

const ItemOptionBookmark = styled.span({
  display: 'flex',
  alignItems: 'center',
  '& span': {
    marginLeft: 0,
  },
});

const ItemOptionBookmarkIcon = styled.div({
  display: 'flex',
  alignItems: 'center',
  width: Rem(24),
  height: Rem(28),
});

const ItemOptionBookmarkIconImage = styled.img({
  width: Rem(20),
});

function PreviousArrow(props) {
  const { className, onClick, label } = props;
  return <ButtonPrevious className={className} onClick={onClick} aria-label={label} />
}

function NextArrow(props) {
  const { className, onClick } = props;
  return <ButtonNext className={className} onClick={onClick} />
}

const Feature = () => {
  const [action, setAction] = React.useState(null);
  const url = '/api/action';
  React.useEffect(() => {
    axios.get(url).then((response) => {
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
        breakpoint: 769,
        settings: {
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 481,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <Container>
      <Practical>
        <Action>
          <HeadingPrimary>실천</HeadingPrimary>
          <HeadingSecondary>
            나만의 친환경 실천
            <strong>일상을 공유해요</strong>
          </HeadingSecondary>
          <Description>
            <strong>채식, 제로플라스틱, 분리배출, 업사이클링, 플로깅 등</strong>
            나만의 방식으로 환경보호를 실천하고 공유해보세요.
          </Description>
          <MockupImagesAction>
            <MockupImageAction />
          </MockupImagesAction>
        </Action>
      </Practical>
      <ArticleList heading={'인기 실천글'}>
        <SliderControl>
          <StyledSlider {...settings}>
            {action && action.map(item => (
              <div key={item._id}>
                <ActionInfo>
                  <ActionImageModule><ActionImage src={item.thumbnail} alt={''} /></ActionImageModule>
                  <ActionFigure>
                    <ItemCategory>{item.category}</ItemCategory>
                    <ItemSummary>{item.summary}</ItemSummary>
                    <ItemUser>
                      <ItemUserThumbnail><ItemUserThumbnailImage src={item.user.avatar} alt={''} /></ItemUserThumbnail>
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
      </ArticleList>
      <Activity>
        <Conversation>
          <Contents data-activity='conversation'>
            <HeadingPrimary>커뮤니티</HeadingPrimary>
            <Description>
              환경에 관심 있는 사람들과
              <strong>자유롭게 이야기를 나누고 소통해요.</strong>
            </Description>
          </Contents>
          <MockupImagesConversation>
            <MockupImageConversation />
          </MockupImagesConversation>
        </Conversation>
        <Store>
          <Contents data-activity='store'>
            <HeadingPrimary>지구+</HeadingPrimary>
            <Description>
              환경을 위한 실천에 동참하는
              <strong>제로웨이스트/비건 매장을 소개해드릴게요.</strong>
              <LinkGroup>
                <LinkItem><ButtonGreen href="/">매장목록 보러가기</ButtonGreen></LinkItem>
              </LinkGroup>
            </Description>
          </Contents>
          <MockupImagesStore>
            <MockupImageStore />
          </MockupImagesStore>
        </Store>
      </Activity>
    </Container>
  )
}

export default Feature;
