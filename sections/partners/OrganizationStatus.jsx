import React from 'react';
import styled from '@emotion/styled';
import { mq, fontWeights, Rem, Em } from '../../utils/designSystem';

const Container = styled.div({
  display: 'flex',
  justifyContent: 'center',
});

const StatusItem = styled.dl({
  display: 'flex',
  flexDirection: 'column-reverse',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  padding: `${Em(22)} 0`,
  [mq.minSmall]: {
    padding: `${Em(30)} ${Em(45)}`,
  },
});

const StatusTerm = styled.dt({
  justifyContent: 'center',
  marginTop: Em(16),
  fontSize: Rem(12),
  fontWeight: fontWeights.SemiBold,
  [mq.minTablet]: {
    fontSize: Rem(16),
  },
  [mq.minSmall]: {
    marginTop: Em(24),
    fontSize: Rem(22),
  },
});

const StatusDescription = styled.dd({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: Rem(100),
  height: Rem(100),
  borderRadius: '100%',
  backgroundColor: '#0eaa55',
  fontSize: Rem(16),
  fontWeight: fontWeights.Bold,
  color: '#ffffff',
  textAlign: 'center',
  [mq.minTablet]: {
    width: Rem(115),
    height: Rem(115),
    fontSize: Rem(20),
  },
  [mq.minSmall]: {
    width: Rem(187),
    height: Rem(187),
    fontSize: Rem(32),
  }
});

function OrganizationStatus() {
  return (
    <Container>
      <StatusItem>
        <StatusTerm>발행한 지구포인트량</StatusTerm>
        <StatusDescription>3,333,000</StatusDescription>
      </StatusItem>
      <StatusItem>
        <StatusTerm>총 참여자 수</StatusTerm>
        <StatusDescription>3,000 명</StatusDescription>
      </StatusItem>
      <StatusItem>
        <StatusTerm>발행한 지구포인트량</StatusTerm>
        <StatusDescription>3,000 번</StatusDescription>
      </StatusItem>
    </Container>
  )
}

export default OrganizationStatus;
