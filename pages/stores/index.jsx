import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import styled from '@emotion/styled';
import { mq, styles, fontWeights, Rem, Em } from '../../utils/designSystem';
import PageHeading from '../../components/global/PageHeading';
import CategorySelect from '../../sections/stores/CategorySelect';
import StoreList from '../../sections/stores/StoreList';
import Pagination from '../../sections/stores/Pagination';

// const scrollVerticalTrue = `body{background-color:#F6F6F6}`;
// const scrollVerticalFalse = `body{background-color:#FFFFFF}`;

const Container = styled.div({
  marginTop: Rem(70),
  paddingBottom: Rem(100),
  borderTop: '1px solid #aaaaaa',
  backgroundColor: '#ffffff',
  [mq.minXsmall]: {
    marginTop: Rem(97),
  },
});

function index() {
  // const [scrollY, setScrollY] = useState(0);
  // const scrollVertical = scrollY > 97 ? true : false

  // React.useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //   };

  //   handleScroll();

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [storesPerPage, setStoresPerPage] = useState(10);
  const url = '/api/store-list';

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await axios.get(
        url
      );
      setStores(response.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const indexOfLast = currentPage * storesPerPage;
  const indexOfFirst = indexOfLast - storesPerPage;
  function currentStores(tmp) {
    let currentStores = 0;
    currentStores = tmp.slice(indexOfFirst, indexOfLast);
    return currentStores;
  }

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
      <Container data-container='article'>
        {/* {scrollVertical && <style>{scrollVerticalTrue}</style>}
        {!scrollVertical && <style>{scrollVerticalFalse}</style>} */}
        <PageHeading link={'/'} label={'article.subject'} />
        <CategorySelect />
        <StoreList
          stores={currentStores(stores)}
          loading={loading}
        />
        <Pagination
          storesPerPage={storesPerPage}
          totalStores={stores.length}
          paginate={setCurrentPage}
          currentPage={currentPage}
        />
      </Container>
    </>
  )
}

export default index;
