import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { isIOS, isAndroid } from 'react-device-detect';
import axios from 'axios';
import styled from '@emotion/styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { mq, styles, Rem, Em, fontWeights } from '../../utils/designSystem';
import useScrollFadeIn from '../../utils/useScrollFadeIn';
import LinkButton from '../../utils/LinkButton';
import { images } from '../../assets';
import ArticleList from '../../components/global/ArticleList';
import ArticleListChildren from '../../components/global/ArticleListChildren';
import ButtonGreen from '../../components/landing/ButtonGreen';
import HeadingPrimary from '../../components/landing/HeadingPrimary';
import HeadingSecondary from '../../components/landing/HeadingSecondary';
import Description from '../../components/landing/Description';

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

const MockupImages = styled.div({
  paddingBottom: Em(40),
  [mq.minTablet]: {
    margin: `-${Em(60)} -${Em(40)} ${Em(40)}`,
    paddingBottom: 0,
  },
  [mq.minXsmall]: {
    margin: `-${Em(80)} -${Em(40)} ${Em(40)}`,
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
  [mq.minTablet]: {
    marginLeft: `-${Em(25)}`,
    paddingTop: '78.114345%',
  },
  [mq.minXsmall]: {
    marginLeft: `-${Em(70)}`,
    paddingTop: '84.114345%',
  },
  [mq.minSmall]: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: `-${Em(35)} 0 0 ${Em(440)}`,
    paddingTop: '61.114345%',
    width: Rem(923),
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

const OrganizationInfo = styled(LinkButton)(({ isDesktop }) => ({
  display: 'block',
  margin: `${Em(5)} ${Em(5)} ${Em(15)}`,
  borderRadius: Em(20),
  boxShadow: isDesktop ? `-${Em(10)} -${Em(10)} ${Em(20)} #F3F3F3` : `0 ${Em(4)} ${Em(4)} rgba(0, 0, 0, .25)`,
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

const OrganizationImage = styled.div({
  position: 'relative',
  paddingTop: '63.0952381%',
  borderRadius: `${Em(20)} ${Em(20)} 0 0`,
  overflow: 'hidden',
  height: 0,
});

const OrganizationBanner = styled.img({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform .25s',
  transform: 'scale(1)',
});

const OrganizationName = styled.strong({
  display: 'flex',
  alignItems: 'center',
  padding: `0 ${Em(23)}`,
  height: Rem(43),
  borderRadius: `0 0 ${Em(16.2)} ${Em(16.2)}`,
  backgroundColor: '#e5e5e5',
  fontSize: Rem(16),
  fontWeight: fontWeights.Regular,
  color: '#000000',
  ...styles.ellipsis,
  [mq.minXsmall]: {
    fontSize: Rem(20),
  },
});

function PreviousArrow(props) {
  const { className, onClick, label } = props;
  return <ButtonPrevious className={className} onClick={onClick} aria-label={label} />
}

function NextArrow(props) {
  const { className, onClick, label } = props;
  return <ButtonNext className={className} onClick={onClick} aria-label={label} />
}

const Mission = () => {
  const [organization, setOrganization] = React.useState(null);
  const url = '/api/organization';
  React.useEffect(() => {
    axios.get(url).then((response) => {
      setOrganization(response.data);
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PreviousArrow label={'???????????? ??????'} />,
    nextArrow: <NextArrow label={'???????????? ??????'} />,
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

  const isDesktop = !isIOS && !isAndroid ? true : false;

  return (
    <Container>
      <Contents aria-labelledby='section-mission' {...useScrollFadeIn('up', 1, 0, 2)}>
        <HeadingPrimary>??????</HeadingPrimary>
        <HeadingSecondary id='section-mission'>
          ????????? ????????? ??????
          <strong>??????????????????</strong>
        </HeadingSecondary>
        <Description>
          <strong>??????????????? ???????????? ????????? ??????????????????.</strong>
          ????????? ?????? ????????? ?????? ????????? ??????????????? ?????????.
        </Description>
        <LinkGroup>
          <LinkItem><ButtonGreen href='/missions'>???????????? ????????????</ButtonGreen></LinkItem>
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
      <ArticleList>
        <ArticleListChildren label={'section-organization'} heading={'???????????? ????????? ?????????'}>
          <SliderControl>
            <StyledSlider {...settings}>
              {organization && organization.map(item => (
                <div key={item._id}>
                  <OrganizationInfo
                    href='/partners'
                    isDesktop={isDesktop}
                  >
                    <OrganizationImage aria-hidden='true'><OrganizationBanner src={item.picture} alt={''} /></OrganizationImage>
                    <OrganizationName>{item.organization}</OrganizationName>
                  </OrganizationInfo>
                </div>
              ))}
            </StyledSlider>
          </SliderControl>
        </ArticleListChildren>
      </ArticleList>
    </Container>
  )
}

export default Mission;
