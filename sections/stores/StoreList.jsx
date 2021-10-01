import React, { useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { images } from '../../assets';
import { mq, styles, fontWeights, Rem, Em } from '../../utils/designSystem';
import LinkButton from '../../utils/LinkButton';

const Container = styled.div({
  ...styles.widthSettings,
});

const Contents = styled.div({
  marginTop: Em(30),
  padding: `0 ${Em(35)}`,
});

const StoreItem = styled.article({
  display: 'flex',
  margin: `${Em(20)} 0`,
  border: '1px solid #aaaaaa',
  borderRadius: Em(20),
});

const StoreInfo = styled.div({
  position: 'relative',
  margin: `0 ${Em(20)}`,
  paddingTop: Em(40),
});

const StoreName = styled.h2({
  fontSize: Rem(24),
  fontWeight: fontWeights.SemiBold,
});

const StoreCategory = styled.strong({
  position: 'absolute',
  top: 0,
  left: 0,
  fontSize: Rem(18),
  fontWeight: fontWeights.Regular,
  color: '#5a5a5a',
  lineHeight: 1.77777778,
});

const StoreAddress = styled.address({
  display: 'flex',
  alignItems: 'center',
  padding: `${Em(11)} 0 ${Em(9)}`,
  fontSize: Rem(18),
  fontWeight: fontWeights.Regular,
  fontStyle: 'normal',
  lineHeight: 1,
  '&::before': {
    content: '""',
    display: 'block',
    marginRight: Rem(8),
    width: Rem(24),
    height: Rem(27),
    background: `url(${images.icons.marker}) no-repeat 50% 50%/contain`,
  }
});

const StoreDescription = styled.div({
  fontSize: Rem(18),
  fontWeight: fontWeights.Regular,
  lineHeight: 1.55555556,
});

const SliderControl = styled.div({
  width: Rem(400),
  [mq.minTablet]: {
    padding: `0 ${Em(28)}`,
  },
  [mq.minSmall]: {
    padding: `0 ${Em(60)}`,
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
    backgroundColor: '#ffffff',
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
    backgroundColor: '#ffffff',
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

const ThubnailItem = styled.div();

const ThubnailImage = styled.div({
  position: 'relative',
  paddingTop: '100%',
  borderRadius: Em(20),
  overflow: 'hidden',
  height: 0,
});

const ThubnailThumbnail = styled.img({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform .25s',
  transform: 'scale(1)',
});

function PreviousArrow(props) {
  const { className, onClick, label } = props;
  return <ButtonPrevious className={className} onClick={onClick} aria-label={label} />
}

function NextArrow(props) {
  const { className, onClick, label } = props;
  return <ButtonNext className={className} onClick={onClick} aria-label={label} />
}

function StoreList() {
  const [getStore, setStore] = React.useState(null);
  const url = '/api/store-list';
  React.useEffect(() => {
    axios.get(url).then((response) => {
      setStore(response.data);
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PreviousArrow label={'이전으로 이동'} />,
    nextArrow: <NextArrow label={'다음으로 이동'} />,
  };

  return (
    <Container>
      <Contents>
        {getStore && getStore.map(item => (
          <StoreItem key={item.uuid}>
            <SliderControl>
              <StyledSlider {...settings}>
                {item.thumbnails.map((thumbnail) => (
                  <ThubnailItem>
                    <ThubnailImage>
                      <ThubnailThumbnail src={thumbnail} alt='' />
                    </ThubnailImage>
                  </ThubnailItem>
                ))}
              </StyledSlider>
            </SliderControl>
            <StoreInfo>
              <StoreName>{item.storeName}</StoreName>
              <StoreCategory>{item.categoryName}</StoreCategory>
              <StoreAddress>{item.storeAddr}</StoreAddress>
              <StoreDescription>{item.description}</StoreDescription>
            </StoreInfo>
          </StoreItem>
        ))}
      </Contents>
    </Container>
  )
}

export default StoreList;
