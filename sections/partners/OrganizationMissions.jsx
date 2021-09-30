import React from 'react';
import styled from '@emotion/styled';
import { mq, Em } from '../../utils/designSystem';
import { images } from '../../assets';

const Container = styled.div({
  padding: `${Em(30)} 0 ${Em(70)}`,
});

const MissionList = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  margin: `-${Em(10)} 0`,
  [mq.minXsmall]: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    margin: `-${Em(18)}`,
  },
});

const MissionItem = styled.li({
  padding: `${Em(10)} 0`,
  [mq.minXsmall]: {
    padding: Em(18),
    width: '50%',
  },
});

const MissionImage = styled.div({
  position: 'relative',
  paddingTop: '53.13059034%',
  height: 0,
  borderRadius: Em(10),
  overflow: 'hidden',
});

const MissionThumbnail = styled.img({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

function OrganizationMissions() {
  return (
    <Container>
      <MissionList>
        <MissionItem>
          <MissionImage>
            <MissionThumbnail src={images.test.missionThumbnail} alt='' />
          </MissionImage>
        </MissionItem>
        <MissionItem>
          <MissionImage>
            <MissionThumbnail src={images.test.missionThumbnail} alt='' />
          </MissionImage>
        </MissionItem>
        <MissionItem>
          <MissionImage>
            <MissionThumbnail src={images.test.missionThumbnail} alt='' />
          </MissionImage>
        </MissionItem>
        <MissionItem>
          <MissionImage>
            <MissionThumbnail src={images.test.missionThumbnail} alt='' />
          </MissionImage>
        </MissionItem>
      </MissionList>
    </Container>
  )
}

export default OrganizationMissions;
