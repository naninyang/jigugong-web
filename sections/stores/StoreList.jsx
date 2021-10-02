import React, { useState } from 'react';
import styled from '@emotion/styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { images } from '../../assets';
import { mq, styles, fontWeights, Rem, Em } from '../../utils/designSystem';

const Container = styled.div({
  ...styles.widthSettings,
});

const Contents = styled.div({
  marginTop: Em(22),
  [mq.minTablet]: {
    padding: `0 ${Em(27)}`,
  },
  [mq.minSmall]: {
    marginTop: Em(30),
    padding: `0 ${Em(35)}`,
  },
});

const StoreItem = styled.article({
  display: 'flex',
  flexDirection: 'column',
  margin: `${Em(12)} 0`,
  padding: `${Em(12)} 0`,
  border: '1px solid #aaaaaa',
  [mq.minTablet]: {
    flexDirection: 'row',
  },
  [mq.minSmall]: {
    margin: `${Em(20)} 0`,
    padding: `${Em(20)} 0`,
  },
});

const StoreInfo = styled.div({
  position: 'relative',
  margin: `0 ${Em(12)}`,
  paddingTop: Em(32),
  [mq.minSmall]: {
    margin: `0 ${Em(20)}`,
    paddingTop: Em(40),
  },
});

const StoreName = styled.h2({
  fontSize: Rem(20),
  fontWeight: fontWeights.SemiBold,
  [mq.minSmall]: {
    fontSize: Rem(24),
  },
});

const StoreCategory = styled.strong({
  position: 'absolute',
  top: 0,
  left: 0,
  fontSize: Rem(14),
  fontWeight: fontWeights.Regular,
  color: '#5a5a5a',
  lineHeight: 1.77777778,
  [mq.minSmall]: {
    fontSize: Rem(18),
  },
});

const StoreAddress = styled.address({
  display: 'flex',
  alignItems: 'center',
  padding: `${Em(7)} 0 ${Em(5)}`,
  fontSize: Rem(14),
  fontWeight: fontWeights.Regular,
  fontStyle: 'normal',
  lineHeight: 1,
  [mq.minSmall]: {
    padding: `${Em(11)} 0 ${Em(9)}`,
    fontSize: Rem(18),
  },
  '&::before': {
    content: '""',
    display: 'block',
    marginRight: Rem(4),
    width: Rem(20),
    height: Rem(24),
    background: `url(${images.icons.marker}) no-repeat 50% 50%/contain`,
    [mq.minSmall]: {
      marginRight: Rem(8),
      width: Rem(24),
      height: Rem(27),
    },
  }
});

const StoreDescription = styled.div({
  fontSize: Rem(14),
  fontWeight: fontWeights.Regular,
  lineHeight: 1.55555556,
  [mq.minSmall]: {
    fontSize: Rem(18),
  },
});

const SliderControl = styled.div({
  padding: `0 ${Em(25)}`,
  [mq.minTablet]: {
    width: Rem(300),
    padding: `0 ${Em(28)}`,
  },
  [mq.minSmall]: {
    width: Rem(400),
    padding: `0 ${Em(60)}`,
  },
});

const StyledSlider = styled(Slider)({
  width: '100%',
  '& .slick-dots': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'static',
    bottom: 0,
    height: Rem(36),
    backgroundColor: '#ffffff',
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

const ButtonPrevious = styled.button({
  left: `-${Rem(25)}`,
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
  right: `-${Rem(25)}`,
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

function StoreList({ stores, loading }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PreviousArrow label={'이전으로 이동'} />,
    nextArrow: <NextArrow label={'다음으로 이동'} />,
    appendDots: dots => (
      <ul><li>{dots}</li></ul>
    ),
    customPaging: i => (
      <button type='button' />
    ),
  };

  return (
    <Container>
      <Contents>
        {loading && <div> loading... </div>}
        {stores.map((store) => (
          <StoreItem key={store.id}>
            <SliderControl>
              <StyledSlider {...settings}>
                {store.thumbnails.map((thumbnail) => (
                  <ThubnailItem>
                    <ThubnailImage>
                      <ThubnailThumbnail src={thumbnail} alt='' />
                    </ThubnailImage>
                  </ThubnailItem>
                ))}
              </StyledSlider>
            </SliderControl>
            <StoreInfo>
              <StoreName>{store.storeName}</StoreName>
              <StoreCategory>{store.categoryName}</StoreCategory>
              <StoreAddress>{store.storeAddr}</StoreAddress>
              <StoreDescription>{store.description}</StoreDescription>
            </StoreInfo>
          </StoreItem>
        ))}
      </Contents>
    </Container>
  )
}

export default StoreList;
