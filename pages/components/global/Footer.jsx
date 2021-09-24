import React from 'react';
import styled from '@emotion/styled';
import { mq, fontWeights, Rem, Em, styles } from '../../utils/designSystem';
import { images } from '../../assets';

const Container = styled.footer({
  backgroundColor: '#f6f6f6',
});

const Wrapper = styled.div({
  ...styles.widthSettings,
  margin: '0 auto',
  paddingTop: Em(35),
  paddingBottom: Em(35),
  display: 'flex',
  alignItems: 'flex-start',
  [mq.maxXsmall]: {
    flexDirection: 'column',
    width: '100%',
  },
});

const FooterHeading = styled.h1({
  ...styles.screenReaderOnly,
});

const LawInfo = styled.div({
  width: '100%',
  [mq.minSmall]: {
    flex: 2,
  },
});

const LawInfoHeading = styled.h2({
  ...styles.screenReaderOnly,
});

const LawInfoList = styled.dl({
  display: 'flex',
  flexWrap: 'wrap',
});

const LawInfoTerm = styled.dt({
  padding: `${Em(7)} 0`,
  width: Rem(130),
  fontWeight: fontWeights.Medium,
  fontSize: Rem(12),
  [mq.minTablet]: {
    padding: `${Em(7)} 0`,
    width: Rem(170),
    fontSize: Rem(16),
  },
});

const LawInfoDescription = styled.dd({
  padding: `${Em(7)} 0`,
  width: `calc(100% - ${Rem(130)})`,
  fontWeight: fontWeights.Regular,
  fontSize: Rem(12),
  color: '#5a5a5a',
  [mq.minTablet]: {
    padding: `${Em(7)} 0`,
    width: `calc(100% - ${Rem(170)})`,
    fontSize: Rem(16),
  },
  '& address': {
    fontStyle: 'normal',
  },
});

const ContactInfo = styled.div({
  width: '100%',
  [mq.minXsmall]: {
    flex: 2,
  },
});

const ContactInfoHeading = styled.h2({
  margin: `${Em(30)} 0 ${Em(10)}`,
  fontWeight: fontWeights.SemiBold,
  fontSize: Rem(12),
  textTransform: 'uppercase',
  [mq.minTablet]: {
    fontSize: Rem(16),
  },
  [mq.minXsmall]: {
    margin: `${Em(7)} 0 ${Em(10)}`,
  },
});

const ContactInfoList = styled.dl({
  display: 'flex',
  flexWrap: 'wrap',
});

const ContactInfoTerm = styled.dt({
  margin: `${Rem(5)} 0`,
  height: Rem(19),
  flexBasis: Rem(26),
  [mq.minXsmall]: {
    flexBasis: Rem(30),
    height: Rem(23),
  },
  '& span': {
    ...styles.screenReaderOnly,
  },
  '&[data-item=phone]': {
    background: `url(${images.icons.phone}) no-repeat 50% 50%/contain`,
  },
  '&[data-item=email]': {
    background: `url(${images.icons.email}) no-repeat 50% 50%/contain`,
  },
});

const ContactInfoDescription = styled.dd({
  display: 'flex',
  alignItems: 'center',
  margin: `${Rem(5)} 0`,
  paddingLeft: Em(24),
  width: `calc(100% - ${Rem(26)})`,
  [mq.minSmall]: {
    paddingLeft: Em(28),
    width: `calc(100% - ${Rem(30)})`,
  },
  '& a': {
    fontWeight: fontWeights.Regular,
    fontSize: Rem(12),
    color: '#000000',
    [mq.minTablet]: {
      fontSize: Rem(16),
    },
  },
});

const Notice = styled.div({
  marginTop: Em(15),
  lineHeight: 1.88,
  fontSize: Rem(12),
  fontWeight: fontWeights.Regular,
  color: '#5A5A5A',
  [mq.minSmall]: {
    fontSize: Rem(16),
  },
});

function Footer() {
  return (
    <Container
      role='contentinfo'
      aria-labelledby='body-footer'
    >
      <Wrapper>
        <FooterHeading id='body-footer'>법적 정보 및 연락처 정보</FooterHeading>
        <LawInfo>
          <LawInfoHeading>법정 정보</LawInfoHeading>
          <LawInfoList>
            <LawInfoTerm>상호명</LawInfoTerm>
            <LawInfoDescription>얼씨 주식회사</LawInfoDescription>
            <LawInfoTerm>사업자등록번호</LawInfoTerm>
            <LawInfoDescription>000-00-00000</LawInfoDescription>
            <LawInfoTerm>통신판매업번호</LawInfoTerm>
            <LawInfoDescription>000-00-00000</LawInfoDescription>
            <LawInfoTerm>개인정보책임관리자</LawInfoTerm>
            <LawInfoDescription>김기섭</LawInfoDescription>
            <LawInfoTerm>대표이사</LawInfoTerm>
            <LawInfoDescription>김지원</LawInfoDescription>
            <LawInfoTerm>주소</LawInfoTerm>
            <LawInfoDescription><address>서울시</address></LawInfoDescription>
          </LawInfoList>
        </LawInfo>
        <ContactInfo>
          <ContactInfoHeading>Contact</ContactInfoHeading>
          <ContactInfoList>
            <ContactInfoTerm data-item={'phone'}><span>Phone</span></ContactInfoTerm>
            <ContactInfoDescription><a href='tel:1688-3290'>1688-3290</a></ContactInfoDescription>
            <ContactInfoTerm data-item={'email'}><span>Email</span></ContactInfoTerm>
            <ContactInfoDescription><a href='mailto:info@jigugong.com'>info@jigugong.com</a></ContactInfoDescription>
          </ContactInfoList>
          <Notice aria-label='주중 오전 10시부터 오후 7시 운영. 주말 및 법정공휴일 제외'>
            <p aria-hidden='true'>OPEN AM 10:00 ~ PM 07:00</p>
            <p aria-hidden='true'>SAT.SUN.HOLIDAY OFF</p>
          </Notice>
        </ContactInfo>
      </Wrapper>
    </Container>
  )
}

export default Footer;
