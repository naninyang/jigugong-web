import React from 'react';
import styled from '@emotion/styled';
import { mq, styles, Rem, Em } from '../../utils/designSystem';
import { images } from '../../assets';

const Container = styled.div({
  backgroundColor: '#F6F6F6',
});

const Contents = styled.div({
  ...styles.widthSettings,
  display: 'flex',
  alignItems: 'center',
  paddingTop: Em(25),
  paddingBottom: Em(25),
  height: Rem(102),
  [mq.minXsmall]: {
    paddingTop: Em(33),
    paddingBottom: Em(33),
    height: Rem(118),
  },
});

const OrganizationImage = styled.img({
  maxWidth: '100%',
  height: '100%',
  objectFit: 'contain',
});

function OrganizationName() {
  return (
    <Container>
      <Contents aria-hidden='true'>
        <OrganizationImage src={images.test.organizationName} alt='' />
      </Contents>
    </Container>
  )
}

export default OrganizationName;
