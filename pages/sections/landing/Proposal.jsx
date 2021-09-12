import React from 'react';
import styled from '@emotion/styled';
import { Rem, styles } from '../../utils/designSystem';
import { images } from '../../utils/designSystem';

const Container = styled.div();

const Proposal = () => {
  const handleSubmit = event => {
    event.preventDefault();
    alert('양식 입력')
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>협업제안 및 문의 양식</legend>
          <label htmlFor='org'>단체/기업명</label>
          <input type='text' id='org' />
          <button type="submit">제출</button>
        </fieldset>
      </form>
    </Container>
  )
}

export default Proposal;
