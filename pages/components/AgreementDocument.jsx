import React from 'react';
import styled from '@emotion/styled';
import { mq, styles, fontWeights, Rem, Em } from '../utils/designSystem';

const Container = styled.div({
  padding: `${Em(15)} ${Em(20)}`,
  borderRadius: Em(5),
  backgroundColor: '#f6f6f6',
});

const Contents = styled.div({
  overflowY: 'scroll',
  height: Rem(166),
  fontSize: Rem(18),
  fontWeight: fontWeights.Regular,
  lineHeight: 1.5,
  color: ' #212529',
});

const DOCUMENT = `내용
내용
내용
내용
내용
내용
내용
내용
내용
내용`;

const AgreementDocument = ({ label }) => {
  return (
    <Container aria-labelledby={label}>
      <Contents>
        <pre>
          {DOCUMENT}
        </pre>
      </Contents>
    </Container>
  )
}

export default AgreementDocument;