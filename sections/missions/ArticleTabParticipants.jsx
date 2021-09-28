import React from 'react';
import styled from '@emotion/styled';
import { fontWeights, Rem, Em } from '../../utils/designSystem';


const MissionParticipants = styled.ul();

const ParticipantsCount = styled.strong({
  paddingLeft: Em(16),
  fontSize: Rem(18),
  fontWeight: fontWeights.Regular,
});

const ParticipantsList = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  marginTop: Em(16),
});

const ParticipantsItem = styled.li({
  display: 'flex',
  alignItems: 'center',
  padding: `0 ${Em(16)}`,
  height: Rem(44),
  '&:nth-child(odd)': {
    borderRadius: Em(10),
    backgroundColor: '#f6f6f6',
  },
});

const ItemImage = styled.div({
  width: Rem(25),
  height: Rem(25),
  overflow: 'hidden',
  borderRadius: '100%',
});

const ItemImageAvatar = styled.img({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const ItemCite = styled.cite({
  marginLeft: Em(12),
  fontSize: Rem(18),
  fontWeight: fontWeights.Regular,
  fontStyle: 'normal',
});

function ArticleTabParticipants() {
  return (
    <MissionParticipants>
      <ParticipantsCount>총 8명</ParticipantsCount>
      <ParticipantsList>
        <ParticipantsItem>
          <ItemImage><ItemImageAvatar src={'https://dummyimage.com/25x25/0EAA5/fff.png'} alt='' /></ItemImage>
          <ItemCite>이먼지</ItemCite>
        </ParticipantsItem>
        <ParticipantsItem>
          <ItemImage><ItemImageAvatar src={'https://dummyimage.com/25x25/0EAA5/fff.png'} alt='' /></ItemImage>
          <ItemCite>이먼지</ItemCite>
        </ParticipantsItem>
        <ParticipantsItem>
          <ItemImage><ItemImageAvatar src={'https://dummyimage.com/25x25/0EAA5/fff.png'} alt='' /></ItemImage>
          <ItemCite>이먼지</ItemCite>
        </ParticipantsItem>
        <ParticipantsItem>
          <ItemImage><ItemImageAvatar src={'https://dummyimage.com/25x25/0EAA5/fff.png'} alt='' /></ItemImage>
          <ItemCite>이먼지</ItemCite>
        </ParticipantsItem>
        <ParticipantsItem>
          <ItemImage><ItemImageAvatar src={'https://dummyimage.com/25x25/0EAA5/fff.png'} alt='' /></ItemImage>
          <ItemCite>이먼지</ItemCite>
        </ParticipantsItem>
        <ParticipantsItem>
          <ItemImage><ItemImageAvatar src={'https://dummyimage.com/25x25/0EAA5/fff.png'} alt='' /></ItemImage>
          <ItemCite>이먼지</ItemCite>
        </ParticipantsItem>
        <ParticipantsItem>
          <ItemImage><ItemImageAvatar src={'https://dummyimage.com/25x25/0EAA5/fff.png'} alt='' /></ItemImage>
          <ItemCite>이먼지</ItemCite>
        </ParticipantsItem>
        <ParticipantsItem>
          <ItemImage><ItemImageAvatar src={'https://dummyimage.com/25x25/0EAA5/fff.png'} alt='' /></ItemImage>
          <ItemCite>이먼지</ItemCite>
        </ParticipantsItem>
      </ParticipantsList>
    </MissionParticipants>
  )
}

export default ArticleTabParticipants;
