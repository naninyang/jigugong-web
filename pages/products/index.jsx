import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { isIOS, isAndroid } from 'react-device-detect';
import styled from '@emotion/styled';
import { images } from '../../assets';
import { mq, fontWeights, Rem, Em } from '../../utils/designSystem';
import LinkButton from '../../utils/LinkButton';
import Tabs from '../../sections/missions/Tabs';
import TabPane from '../../sections/missions/TabPane';

// const scrollVerticalTrue = `body{background-color:#F6F6F6}`;
// const scrollVerticalFalse = `body{background-color:#FFFFFF}`;

const Container = styled.div({
  marginTop: Rem(70),
  borderTop: '1px solid #aaaaaa',
  backgroundColor: '#ffffff',
  [mq.minXsmall]: {
    marginTop: Rem(97),
  },
});

const Contents = styled.div({
  margin: '0 auto',
  padding: `0 ${Em(25)}`,
  width: '100%',
  maxWidth: Rem(586),
  minHeight: `calc(100vh - ${Rem(97)})`,
});

const PageHeading = styled.div({
  display: 'flex',
  alignItems: 'center',
  height: Rem(64),
  fontSize: Rem(14),
  fontWeight: fontWeights.Regular,
  [mq.minXsmall]: {
    height: Rem(72),
    fontSize: Rem(18),
  },
});

const LocationParent = styled.span({
  display: 'flex',
  alignItems: 'center',
  '&::after': {
    content: '""',
    display: 'block',
    margin: `0 ${Em(6)}`,
    width: Rem(12),
    height: Rem(14),
    background: `url(${images.icons.locationArrow}) no-repeat 50% 50%/contain`,
    [mq.minXsmall]: {
      margin: `0 ${Em(12)}`,
      width: Rem(16),
      height: Rem(18),
    },
  },
});

const LocationChildren = styled.span();

const ProductSummary = styled.div({
  display: 'flex',
});

const SummaryThunbmail = styled.div({
  width: Rem(170),
  height: Rem(170),
  [mq.minXsmall]: {
    width: Rem(300),
    height: Rem(300),
  },
});

const SummaryThunbmailImage = styled.div({
  position: 'relative',
  paddingTop: '100%',
  height: 0,
});

const SummaryImage = styled.img({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const SummaryInfo = styled.div({
  position: 'relative',
  marginLeft: Em(28),
  paddingTop: Em(24),
  [mq.minXsmall]: {
    marginLeft: Em(36),
    paddingTop: Em(32),
  },
});

const Heading = styled.h1({
  fontSize: Rem(20),
  fontWeight: fontWeights.SemiBold,
  [mq.minXsmall]: {
    fontSize: Rem(24),
  },
});

const Brand = styled.span({
  position: 'absolute',
  top: Rem(1),
  left: 0,
  fontSize: Rem(14),
  fontWeight: fontWeights.Light,
  color: '#5a5a5a',
  [mq.minXsmall]: {
    top: Rem(2),
    fontSize: Rem(18),
  },
});

const Price = styled.div();

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

const ReviewLevel = styled.div({
  marginTop: Em(3),
  display: 'flex',
  [mq.minXsmall]: {
    marginTop: Em(7),
  },
});

const ReviewLevelItem = styled.div({
  width: Rem(17),
  height: Rem(17),
  background: `url(${images.icons.reviewStar}) no-repeat 50% 50%/contain`,
  [mq.minXsmall]: {
    width: Rem(21),
    height: Rem(21),
  },
});

function index() {
  // const [scrollY, setScrollY] = useState(0);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //   };

  //   handleScroll();

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const scrollVertical = scrollY > 97 ? true : false
  const isDesktop = !isIOS && !isAndroid ? true : false;
  const [productDescriptions, setProductDescriptions] = React.useState(null);
  const [productReviews, setProductReviews] = React.useState(null);

  const url_description = '/api/product-descriptions';
  const url_review = '/api/product-reviews';
  React.useEffect(() => {
    // axios.get(url_description).then((response) => {
    //   setProductDescriptions(response.data);
    // });
    // axios.get(url_review).then((response) => {
    //   setProductReviews(response.data);
    // });
  }, []);

  return (
    <>
      <Head>
        <link rel='alternate' hrefLang='ko-KR' href='https://jigugong.com/missions/' key='alternate' />
        <link rel='canonical' href='https://jigugong.com/missions/' key='canonical' />
        <title key='title'>지구공 : 미션목록</title>
        <meta property='og:title' content='지구공 : 미션목록' key='og:title' />
        <meta property='og:url' content='https://jigugong.com/missions/' key='og:url' />
        <meta property='og:site_name' content='지구공 : 미션목록' key='og:site_name' />
      </Head>
      <Container>
        {/* {scrollVertical && <style>{scrollVerticalTrue}</style>}
        {!scrollVertical && <style>{scrollVerticalFalse}</style>} */}
        <Contents>
          <PageHeading>
            <LocationParent>주방</LocationParent>
            <LocationChildren>가제지게미 주방비누</LocationChildren>
          </PageHeading>
          <ProductSummary>
            <SummaryThunbmail>
              <SummaryThunbmailImage>
                <SummaryImage src={images.test.productThumbnail} alt='' />
              </SummaryThunbmailImage>
            </SummaryThunbmail>
            <SummaryInfo>
              <Heading>가베지게미 주방비누</Heading>
              <Brand>리아생활</Brand>
              <Price>
                <PriceReduced>
                  <PricePercentage>19%</PricePercentage>
                  <PriceResult>7,000원</PriceResult>
                  <PriceDiscount>8,000원</PriceDiscount>
                </PriceReduced>
                <PriceEarthy>
                  <EarthyDiscount>6,300원</EarthyDiscount>
                  <EarthyDescription>지구포인트 최대할인가</EarthyDescription>
                </PriceEarthy>
              </Price>
              <ReviewLevel>
                <ReviewLevelItem />
                <ReviewLevelItem />
                <ReviewLevelItem />
                <ReviewLevelItem />
              </ReviewLevel>
            </SummaryInfo>
          </ProductSummary>
          {/* <Tabs>
            <TabPane name='descriptions' key='0'>
              {productDescriptions && productDescriptions.map(productDescription => (
                <DescriptionItem key={productDescription.uuid}>
                  <DescriptionImage src={productDescription.thumbnail} alt='' />
                </DescriptionItem>
              ))}
            </TabPane>
            <TabPane name='reviews' key='1'>
              상품후기
            </TabPane>
          </Tabs> */}
        </Contents>
      </Container>
    </>
  )
}

export default index;
