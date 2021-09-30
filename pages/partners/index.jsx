import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { isIOS, isAndroid } from 'react-device-detect';
import styled from '@emotion/styled';
import { mq, styles, fontWeights, Rem } from '../../utils/designSystem';
import LinkButton from '../../utils/LinkButton';
import PageHeading from '../../components/global/PageHeading';
import OrganizationName from '../../sections/partners/OrganizationName';
import OrganizationDescription from '../../sections/partners/OrganizationDescription';
import OrganizationStatus from '../../sections/partners/OrganizationStatus';
import OrganizationMissions from '../../sections/partners/OrganizationMissions';
import OrganizationPress from '../../sections/partners/OrganizationPress';

const Container = styled.div({
  marginTop: Rem(70),
  paddingBottom: Rem(100),
  borderTop: '1px solid #aaaaaa',
  backgroundColor: '#ffffff',
  [mq.minXsmall]: {
    marginTop: Rem(97),
  },
});

const Contents = styled.div({
  ...styles.widthSettings,
});

const SecondaryHeading = styled.h2({
  fontSize: Rem(20),
  fontWeight: fontWeights.Medium,
  [mq.minSmall]: {
    fontSize: Rem(24),
  },
  '&[data-section=description]': {
    ...styles.screenReaderOnly,
  },
});

function ParnerDetail() {
  return (
    <>
      <Head>
        <link rel='alternate' hrefLang='ko-KR' href={`https://jigugong.com/missions/{mission.id}`} key='alternate' />
        <link rel='canonical' href={`https://jigugong.com/missions/{mission.id}`} key='canonical' />
        <title key='title'>{`지구공 : {article.subject}`}</title>
        <meta name='description' content={`지구공 : {article.context}`} key='description' />
        <meta property='og:title' content={`지구공 : {article.subject}`} key='og:title' />
        <meta property='og:description' content={`지구공 : {article.context}`} key='og:description' />
        <meta property='og:image' content={`{article.thumbnails[0]}?${Math.random().toString(36).substr(2, 11)}`} key='og:image' />
        <meta property='og:url' content={`https://jigugong.com/missions/{mission.id}/{article.article}`} key='og:url' />
        <meta property='og:type' content='article' key='og:type' />
        <meta property='og:site_name' content={`지구공 : {article.subject}`} key='og:site_name' />
      </Head>
      <Container>
        <PageHeading link={'/'} label={'파트너'} />
        <OrganizationName />
        <Contents>
          <SecondaryHeading data-section='description'>파트너 소개</SecondaryHeading>
          <OrganizationDescription />
          <SecondaryHeading>사회공헌 기여도</SecondaryHeading>
          <OrganizationStatus />
          <SecondaryHeading>함께 진행한 미션</SecondaryHeading>
          <OrganizationMissions />
        </Contents>
        <Contents>
          <SecondaryHeading>뉴스기사</SecondaryHeading>
          <OrganizationPress />
        </Contents>
      </Container>
    </>
  )
}

export default ParnerDetail;
