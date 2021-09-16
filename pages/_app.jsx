import React from 'react';
import Head from 'next/head';
import 'normalize.css';
import './assets/styles/global.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="alternate" hrefLang="ko-KR" href="https://jigugong.com/" />
        <link rel="canonical" href="https://jigugong.com/" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <title>지구공 : 지구를 구하는 공동체</title>
        <meta name="Description" content="개인의 실천을 모아 세상을 변화시킵니다. 지구를 구하는 공동체, 지구공은 미션과 실천을 중심으로 환경보호 문화를 확산시키는 친환경 플랫폼입니다." />
        <meta property="og:title" content="지구공" />
        <meta property="og:description" content="개인의 실천을 모아 세상을 변화시킵니다. 지구를 구하는 공동체, 지구공은 미션과 실천을 중심으로 환경보호 문화를 확산시키는 친환경 플랫폼입니다." />
        <meta property="og:url" content="https://jigugong.com/" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:image" content={`https://jigugong.com/jigugong-og-image.png?${Math.random().toString(36).substr(2, 11)}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="지구공" />
        <script src="/assets/fonts/font-loader.js"></script>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default App;
