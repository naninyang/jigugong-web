import React from 'react';
import styled from '@emotion/styled';
import { mq, styles, Rem, Em } from '../../utils/designSystem';
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

const Commerce = () => {
  return (
    <Container>
      <Contents>
        <HeadingPrimary>상점</HeadingPrimary>
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
      <ArticleList heading={'인기 상품'}>
        상품 목록
      </ArticleList>
    </Container>
  )
}

export default Commerce;
