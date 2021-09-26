import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { mq, fontWeights, Rem, Em, styles } from '../../utils/designSystem';
import TabPane from './TabPane';

const MissionNavigation = styled.nav({
  height: Rem(60),
  [mq.minXsmall]: {
    height: Rem(68),
  },
});

const TabList = styled.div({
  display: 'flex',
  height: '100%',
});

const TabItem = styled.button({
  padding: 0,
  height: '100%',
  border: 0,
  backgroundColor: '#ffffff',
  position: 'relative',
  fontSize: Rem(20),
  fontWeight: fontWeights.Medium,
  color: '#aaaaaa',
  ...styles.col,
  [mq.minXsmall]: {
    fontSize: Rem(24),
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '2px',
    left: 0,
    width: '100%',
    height: '1px',
    backgroundColor: '#aaaaaa',
  },
  '&[aria-selected=true]': {
    fontWeight: fontWeights.SemiBold,
    color: '#0aaa55',
    '&::after': {
      bottom: 0,
      height: Rem(6),
      backgroundColor: '#0aaa55',
      boxShadow: `0 ${Em(2)} ${Em(2)} rgba(0, 0, 0, 0.25)`,
    },
  },
});

const MissionContent = styled.div({
  marginTop: Em(20),
});

const TabPanel = styled.div({
  '&#nav-ongoing a > div': {
    '&::after': {
      content: '"미션상세 보러가기"',
    },
  },
  '&#nav-closed a > div': {
    '&::after': {
      content: '"미션결과 보러가기"',
    },
  },
});

const Tabs = (props) => {
  const { children } = props;
  const [tabHeader, setTabHeader] = useState([]);
  const [childContent, setChildConent] = useState({});
  const [active, setActive] = useState('');
  useEffect(() => {
    const headers = [];
    const childCnt = {};
    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;
      const { name } = element.props;
      headers.push(name);
      childCnt[name] = element.props.children;
    });
    setTabHeader(headers);
    setActive(headers[0]);
    setChildConent({ ...childCnt });
    console.log(childCnt);
  }, [props, children]);

  const changeTab = (name) => {
    setActive(name);
  };

  return (
    <>
      <MissionNavigation>
        <TabList className='TabList' id='nav-tab' role='tablist'>
          {tabHeader.map((item) => (
            <TabItem
              id={`nav-${item}-tab`}
              type='button'
              role='tab'
              aria-controls={`nav-${item}`}
              aria-selected={item === active ? 'true' : 'false'}
              onClick={() => changeTab(item)}
              key={item}
            >
              {item === 'ongoing' ? '진행중 미션' : '완료된 미션'}
            </TabItem>
          ))}
        </TabList>
      </MissionNavigation>
      <MissionContent className='tab-content MissionContent' id='nav-tabContent'>
        {Object.keys(childContent).map((key) => {
          if (key === active) {
            return (
              <TabPanel
                class='TabPanel'
                id={`nav-${active}`}
                role='tabpanel'
                aria-labelledby={`nav-${active}-tab`}
              >
                {childContent[key]}
              </TabPanel>
            )
          } else {
            return null;
          }
        })}
      </MissionContent>
    </>
  );
};

Tabs.propTypes = {
  children: function (props, propName, componentName) {
    const prop = props[propName];
    let error = null;

    React.Children.forEach(prop, function (child) {
      if (child.type !== TabPane) {
        error = new Error(
          '`' + componentName + '` children should be of type `TabPane`.'
        );
      }
    });
    return error;
  }
};

export default Tabs;
