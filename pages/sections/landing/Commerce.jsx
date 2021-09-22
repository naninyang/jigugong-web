import React from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import { isIOS, isAndroid } from 'react-device-detect';
import styled from '@emotion/styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { mq, styles, fontWeights, Rem, Em } from '../../utils/designSystem';
import useScrollFadeIn from '../../utils/useScrollFadeIn';
import LinkButton from '../../utils/LinkButton';
import { images } from '../../assets/';
import HeadingPrimary from '../../components/HeadingPrimary';
import Description from '../../components/Description';
import ArticleList from '../../components/ArticleList';

const Container = styled.section({
  backgroundColor: '#dcf5e8',
  [mq.maxMobile]: {
    overflowX: 'hidden',
  },
  [mq.minSmall]: {
    overflowX: 'hidden',
  },
});

const Contents = styled.div({
  ...styles.widthSettings,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: Em(40),
  [mq.minTablet]: {
    padding: `${Em(100)} ${Em(40)} 0`,
  },
  [mq.minSmall]: {
    margin: '0 auto',
    padding: `0 0 0 ${Em(68)}`,
    justifyContent: 'center',
    minHeight: Rem(878 + 170),
    height: `calc(100vh - ${Rem(517)})`,
  },
});

const MockupImages = styled.div({
  marginBottom: Em(40),
  [mq.minSmall]: {
    marginTop: 0,
  },
});

const MockupImage = styled.div({
  background: `url(${images.mockup.commerce}) no-repeat 50% 50%/cover`,
  marginLeft: `-${Em(48)}`,
  paddingTop: '150.114345%',
  height: 0,
  [mq.minTablet]: {
    paddingTop: '145.114345%',
  },
  [mq.minXsmall]: {
    paddingTop: '127.114345%',
    maxWidth: Rem(675),
  },
  [mq.minSmall]: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: `${Em(40)} 0 0 ${Em(190)}`,
    paddingTop: '74.114345%',
    width: Rem(675),
    backgroundPosition: '50% 50%',
    backgroundSize: 'contain',
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

const ProductInfo = styled(LinkButton)(({ isDesktop }) => ({
  display: 'block',
  margin: `0 ${Em(5)}`,
  '&:hover': {
    '& [aria-hidden] img': {
      transform: isDesktop ? 'scale(1.1)' : 'scale(1)',
    },
  },
  [mq.minTablet]: {
    margin: `0 ${Em(10)}`,
  },
}));

const ProductImage = styled.div({
  position: 'relative',
  paddingTop: '89.6%',
  borderRadius: Em(5),
  overflow: 'hidden',
  height: 0,
});

const ProductThumbnail = styled.img({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform .25s',
  transform: 'scale(1)',
});

const ProductFigure = styled.div({
  padding: `${Em(10)} 0 ${Em(10)} ${Em(16)}`,
  [mq.minSmall]: {
    padding: `${Em(14)} 0 ${Em(14)} ${Em(20)}`,
  },
});

const ItemBrand = styled.div({
  fontSize: Rem(14),
  fontWeight: fontWeights.Regular,
  color: '#5a5a5a',
  [mq.minXsmall]: {
    fontSize: Rem(16),
  },
});

const ItemProduct = styled.strong({
  display: 'block',
  margin: `${Em(1.5)} 0`,
  fontSize: Rem(18),
  fontWeight: fontWeights.SemiBold,
  color: '#000000',
  ...styles.ellipsis,
  [mq.minXsmall]: {
    fontSize: Rem(22),
  },
});

const ItemPrice = styled.div();

const PriceReduced = styled.div({
  display: 'flex',
  alignItems: 'center',
  margin: `${Em(9)} 0 ${Em(8)}`,
});

const PricePercentage = styled.div({
  paddingRight: Em(7),
  fontSize: Rem(12),
  fontWeight: fontWeights.Medium,
  color: '#f13434',
  [mq.minXsmall]: {
    fontSize: Rem(17),
  },
});

const PriceResult = styled.strong({
  fontSize: Rem(12),
  fontWeight: fontWeights.Medium,
  color: '#000000',
  [mq.minXsmall]: {
    fontSize: Rem(17),
  },
});

const PriceDiscount = styled.del({
  paddingLeft: Em(7),
  fontSize: Rem(12),
  fontWeights: fontWeights.Regular,
  color: '#5a5a5a',
  [mq.minXsmall]: {
    fontSize: Rem(17),
  },
});

const PriceEarthy = styled.div({
  display: 'flex',
  alignItems: 'center',
});

const EarthyDiscount = styled.strong({
  fontSize: Rem(12),
  fontWeight: fontWeights.Regular,
  letterSpacing: `-${Rem(.5)}`,
  color: '#0EAA55',
  [mq.minXsmall]: {
    fontSize: Rem(17),
  },
});

const EarthyDescription = styled.span({
  marginLeft: Em(9),
  fontSize: Rem(10),
  fontWeight: fontWeights.Regular,
  letterSpacing: `-${Rem(.5)}`,
  color: '#0EAA55',
  [mq.minXsmall]: {
    fontSize: Rem(13),
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

const Commerce = () => {
  const [product, setProduct] = React.useState(null);
  const url = '/api/product';
  React.useEffect(() => {
    axios.get(url).then((response) => {
      setProduct(response.data);
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
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
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
    <Container>
      <Contents aria-labelledby='section-commerce' {...useScrollFadeIn('up', 1, 0, 2)}>
        <HeadingPrimary id='section-commerce'>상점</HeadingPrimary>
        <Description>
          우리가 일상에서 사용하는 모든 제품의
          <strong>더 나은 친환경적인 대안을 제시합니다.</strong>
          친환경 실천으로 받은 지구포인트로
          <strong>더욱 저렴하게 만나보세요.</strong>
        </Description>
        <MockupImages>
          <MockupImage />
        </MockupImages>
      </Contents>
      <ArticleList aria={'section-product'} heading={'인기 상품'}>
        <SliderControl>
          <StyledSlider {...settings}>
            {product && product.map(item => (
              <div key={item._id}>
                <ProductInfo
                  href='/'
                  isDesktop={isDesktop}
                >
                  <ProductImage aria-hidden='true'><ProductThumbnail src={item.thumbnail} alt={''} /></ProductImage>
                  <ProductFigure>
                    <ItemBrand>{item.brand}</ItemBrand>
                    <ItemProduct>{item.product}</ItemProduct>
                    <ItemPrice>
                      <PriceReduced>
                        {item.price.reduced ?
                          <>
                            <PricePercentage>{Math.ceil((item.price.result - item.price.reduced) / item.price.result * 100)}%</PricePercentage>
                            <PriceResult>{item.price.reduced.toLocaleString('ko-KR')}원</PriceResult>
                            <PriceDiscount>{item.price.result.toLocaleString('ko-KR')}원</PriceDiscount>
                          </>
                          : <PriceResult>{item.price.result.toLocaleString('ko-KR')}원</PriceResult>
                        }
                      </PriceReduced>
                      <PriceEarthy>
                        <EarthyDiscount>{item.price.earthy.toLocaleString('ko-KR')}원</EarthyDiscount>
                        <EarthyDescription>지구포인트 최대할인가</EarthyDescription>
                      </PriceEarthy>
                    </ItemPrice>
                  </ProductFigure>
                </ProductInfo>
              </div>
            ))}
          </StyledSlider>
        </SliderControl>
      </ArticleList>
    </Container>
  )
}

export default Commerce;
