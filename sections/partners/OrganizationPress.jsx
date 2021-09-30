import React from 'react';
import { isIOS, isAndroid } from 'react-device-detect';
import styled from '@emotion/styled';
import { mq, styles, fontWeights, Rem, Em, Clamp } from '../../utils/designSystem';
import LinkButton from '../../utils/LinkButton';
import { images } from '../../assets';

const Container = styled.div({
  padding: `${Em(22)} 0 ${Em(62)}`,
  [mq.minXsmall]: {
    padding: `${Em(30)} 0 ${Em(70)}`,
  },
});

const PressList = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  margin: `-${Em(10)} 0`,
  [mq.minXsmall]: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    margin: `-${Em(18)}`,
  },
});

const PressItem = styled.li({
  padding: `${Em(10)} 0`,
  [mq.minXsmall]: {
    padding: Em(18),
    width: '50%',
  },
});

const PressLink = styled(LinkButton)(({ isDesktop }) => ({
  display: 'block',
  border: '1px solid #aaaaaa',
  borderRadius: Em(20),
  overflow: 'hidden',
  boxShadow: isDesktop ? `none` : `${Em(4)} ${Em(6)} ${Em(6)} rgba(0, 0, 0, 0.25)`,
  transition: 'box-shadow .25s',
  '&:hover': {
    boxShadow: isDesktop ? `${Em(4)} ${Em(4)} ${Em(6)} rgba(0, 0, 0, 0.25)` : `${Em(4)} ${Em(6)} ${Em(6)} rgba(0, 0, 0, 0.25)`,
    '& img': {
      transform: isDesktop ? 'scale(1.1)' : 'scale(1)',
    },
  },
}));

const PressFigure = styled.figure();

const PressImage = styled.div({
  position: 'relative',
  paddingTop: '42.21824687%',
  height: 0,
  overflow: 'hidden',
  backgroundColor: '#C4C4C4',
});

const PressThumbnail = styled.img({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform .25s',
  transform: 'scale(1)',
});

const PressFigcaption = styled.figcaption({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  padding: `${Em(46)} ${Em(12)} ${Em(12)}`,
  [mq.minXsmall]: {
    padding: `${Em(54)} ${Em(20)} 0`,
    height: Rem(168),
  },
});

const PressHeading = styled.strong({
  paddingBottom: Em(4),
  fontSize: Rem(20),
  fontWeight: fontWeights.SemiBold,
  color: '#000000',
  ...styles.ellipsis,
  [mq.minXsmall]: {
    paddingBottom: Em(8),
    fontSize: Rem(24),
  },
});

const PressOrganization = styled.span({
  position: 'absolute',
  top: Em(18),
  left: Em(18),
  fontSize: Rem(12),
  fontWeight: fontWeights.Regular,
  lineHeight: 1.6,
  color: '#5a5a5a',
  [mq.minXsmall]: {
    top: Em(16),
    left: Em(17),
    fontSize: Rem(20),
  },
});

const PressDateTime = styled.time({
  position: 'absolute',
  top: Em(18),
  right: Em(18),
  fontSize: Rem(12),
  fontWeight: fontWeights.Regular,
  lineHeight: 2,
  color: '#5a5a5a',
  [mq.minXsmall]: {
    top: Em(14),
    right: Em(17),
    fontSize: Rem(16),
  },
});

const PressDescription = styled.div`
  ${Clamp(2, 45)};
  height: ${Rem(45)};
  font-size: ${Rem(14)};
  font-weight: ${fontWeights.Regular};
  line-height: 1.56;
  color: #000000;
  ${mq.minXsmall} {
    ${Clamp(2, 43)};
    height: ${Rem(43)};
    font-size: ${Rem(18)};
  };
`;

function OrganizationPress() {
  const isDesktop = !isIOS && !isAndroid ? true : false;

  return (
    <Container>
      <PressList>
        <PressItem>
          <PressLink
            href='https://www.epnc.co.kr/news/articleView.html?idxno=214844'
            isDesktop={isDesktop}
          >
            <PressFigure>
              <PressImage>
                <PressThumbnail src={images.test.pressThumbnail1} alt='' />
              </PressImage>
              <PressFigcaption>
                <PressHeading>라임-약속의 자전거-서울환경운동연합, ‘모두를 위한 도로’ 캠페인 진행</PressHeading>
                <PressOrganization>테크월드뉴스</PressOrganization>
                <PressDateTime datetime='2021-09-17'>2021.09.17</PressDateTime>
                <PressDescription>[테크월드뉴스=조명의 기자] 공유 킥보드 라임이 오는 11월 21일까지 약속의 자전거, 서울환경운동연합과 함께 다양한 이동수단이 존중받고 공존할 수 있는 도로 환경을 만들기 위한 시민참여 캠페인 ‘모두를 위한 도로(Complete Streets)’를 진행한다고 밝혔다.</PressDescription>
              </PressFigcaption>
            </PressFigure>
          </PressLink>
        </PressItem>
        <PressItem>
          <PressLink
            href='https://www.lifein.news/news/articleView.html?idxno=13100'
            isDesktop={isDesktop}
          >
            <PressFigure>
              <PressImage>
                <PressThumbnail src={images.test.pressThumbnail2} alt='' />
              </PressImage>
              <PressFigcaption>
                <PressHeading>"한번 제비는 영원한 제비" 서울환경연합, 제비의 삶 2 종료</PressHeading>
                <PressOrganization>라이프인</PressOrganization>
                <PressDateTime datetime='2021-09-28'>2021.09.28</PressDateTime>
                <PressDescription>서울환경운동연합(이하 서울환경연합) '제비의 삶' 시즌 2가 종료됐다. 서울환경연합은 기후위기 문제를 해결하기 위해 지난 8월 23일부터 9월 19일까지 제로웨이스트와 비건에 대한 접근성을 높이고, 올바른 정보를 전달하고자 온라인 캠페인 '제비의 삶' 시즌 2를 진행했다.</PressDescription>
              </PressFigcaption>
            </PressFigure>
          </PressLink>
        </PressItem>
      </PressList>
    </Container>
  )
}

export default OrganizationPress;
