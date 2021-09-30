import React from 'react';
import styled from '@emotion/styled';
import { mq, fontWeights, Rem, Em } from '../../utils/designSystem';

const Container = styled.div({
  paddingTop: Em(30),
  paddingBottom: Em(30),
  fontSize: Rem(20),
  fontWeight: fontWeights.Regular,
  lineHeight: 1.6,
  [mq.minSmall]: {
    paddingTop: Em(22),
    paddingBottom: Em(22),
    fontSize: Rem(16),
  },
});

function OrganizationDescription() {
  return (
    <Container>
      서울환경연합은 지구공 회원들이 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용 소개내용
    </Container>
  )
}

export default OrganizationDescription;
