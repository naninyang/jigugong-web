import React from 'react';
import styled from '@emotion/styled';
import { mq, fontWeights, Rem, Em, styles } from '../utils/designSystem';
import { images } from '../assets';

const Container = styled.footer({
  backgroundColor: '#f6f6f6',
});

const Wrapper = styled.div({
  ...styles.widthSettings,
  margin: '0 auto',
  paddingTop: '41px',
  paddingBottom: '41px',
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
  flex: 1,
  [mq.minXsmall]: {
    flex: 2,
  },
});

const LawInfoHeading = styled.h2({
  ...styles.screenReaderOnly,
});

const LawInfoList = styled.dl({
  ...styles.clearfix,
});

const LawInfoTerm = styled.dt({
  padding: `${Em(9, 22)} ${Em(32, 22)} ${Em(9, 22)} 0`,
  float: 'left',
  fontWeight: fontWeights.Medium,
  fontSize: `${Rem(22)}`,
});

const LawInfoDescription = styled.dd({
  padding: `${Em(9, 22)} 0`,
  fontWeight: fontWeights.Regular,
  fontSize: `${Rem(22)}`,
  color: '#5a5a5a',
  '& address': {
    fontStyle: 'normal',
  },
});

const ContactInfo = styled.div({
  flex: 1,
  [mq.minXsmall]: {
    flex: 2,
  },
});

const ContactInfoHeading = styled.h2({
  fontWeight: fontWeights.SemiBold,
  fontSize: `${Rem(22)}`,
  textTransform: 'uppercase',
});

const ContactInfoList = styled.dl({
  display: 'flex',
  flexWrap: 'wrap',
});

const ContactInfoTerm = styled.dt({
  margin: `${Rem(9)} 0`,
  height: `${Rem(27)}`,
  flexBasis: `${Rem(33)}`,
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
  margin: `${Rem(9)} 0`,
  paddingLeft: `${Em(33, 22)}`,
  width: `calc(100% - ${Rem(49)})`,
  '& a': {
    fontWeight: fontWeights.Regular,
    fontSize: `${Rem(22)}`,
    color: '#000000',
  },
});

const Notice = styled.div({
  marginTop: `${Em(30, 22)}`,
  lineHeight: `${Em(30, 22)}`,
  fontSize: `${Rem(22)}`,
  fontWeight: fontWeights.Regular,
  color: '#5A5A5A',
});

function Footer() {
  return (
    <Container>
      <Wrapper>
        <FooterHeading>법적 정보 및 연락처 정보</FooterHeading>
        <LawInfo>
          <LawInfoHeading>법정 정보</LawInfoHeading>
          <LawInfoList>
            <LawInfoTerm>상호명</LawInfoTerm>
            <LawInfoDescription>얼씨 주식회사</LawInfoDescription>
            <LawInfoTerm>대표이사</LawInfoTerm>
            <LawInfoDescription>김지원</LawInfoDescription>
            <LawInfoTerm>사업자등록번호</LawInfoTerm>
            <LawInfoDescription>000-00-00000</LawInfoDescription>
            <LawInfoTerm>통신판매업번호</LawInfoTerm>
            <LawInfoDescription>000-00-00000</LawInfoDescription>
            <LawInfoTerm>주소</LawInfoTerm>
            <LawInfoDescription><address>서울시</address></LawInfoDescription>
            <LawInfoTerm>개인정보책임관리자</LawInfoTerm>
            <LawInfoDescription>김기섭</LawInfoDescription>
          </LawInfoList>
        </LawInfo>
        <ContactInfo>
          <ContactInfoHeading>Contact</ContactInfoHeading>
          <ContactInfoList>
            <ContactInfoTerm data-item={'phone'}><span>Phone</span></ContactInfoTerm>
            <ContactInfoDescription><a href="tel:1688-3290">1688-3290</a></ContactInfoDescription>
            <ContactInfoTerm data-item={'email'}><span>Email</span></ContactInfoTerm>
            <ContactInfoDescription><a href="mailto:info@jigugong.com">info@jigugong.com</a></ContactInfoDescription>
          </ContactInfoList>
          <Notice>
            <p>OPEN AM 10:00 ~ PM 07:00</p>
            <p>SAT.SUN.HOLIDAY OFF</p>
          </Notice>
        </ContactInfo>
      </Wrapper>
    </Container>
  )
}

export default Footer;
