import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Slider from 'react-slick';
import axios from 'axios';
import styled from '@emotion/styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { mq, styles, Rem, Em, fontWeights } from '../../utils/designSystem';
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
  background: `#f6f6f6 url(${images.icons.sliderPrevious}) no-repeat 50% 50%/${Rem(13)} ${Rem(23)}`,
  [mq.minTablet]: {
    left: `-${Rem(28)}`,
    width: Rem(40),
  },
  [mq.minSmall]: {
    left: `-${Rem(60)}`,
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
    right: `-${Rem(60)}`,
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

const OrganizationInfo = styled.div({
  margin: `0 ${Em(5)}`,
  [mq.minTablet]: {
    margin: `0 ${Em(10)}`,
  },
});

const OrganizationImage = styled.div({
  position: 'relative',
  paddingTop: '63.0952381%',
  height: 0,
});

const OrganizationBanner = styled.img({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const OrganizationName = styled.strong({
  display: 'flex',
  alignItems: 'center',
  padding: `0 ${Em(23)}`,
  height: Rem(43),
  backgroundColor: '#e5e5e5',
  fontSize: Rem(16),
  fontWeight: fontWeights.Regular,
  [mq.minXsmall]: {
    fontSize: Rem(20),
  }
});

function PreviousArrow(props) {
  const { className, onClick, label } = props;
  return <ButtonPrevious className={className} onClick={onClick} aria-label={label} />
}

function NextArrow(props) {
  const { className, onClick } = props;
  return <ButtonNext className={className} onClick={onClick} />
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
        <SliderControl>
          <StyledSlider {...settings}>
            {organization && organization.map(item => (
              <div key={item._id}>
                <OrganizationInfo>
                  <OrganizationImage><OrganizationBanner src={item.picture} alt={''} /></OrganizationImage>
                  <OrganizationName>{item.organization}</OrganizationName>
                </OrganizationInfo>
              </div>
            ))}
          </StyledSlider>
        </SliderControl>
      </ArticleList>
    </Container>
  )
}

export default Mission;
