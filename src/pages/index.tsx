import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import PreviewImg from '../images/preview.png';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang} />
        <meta name="description" content={description} />
        <meta name="keywords" content="Vladimir Ivanov portfolio fullstack web-developer" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta property="og:image" content={PreviewImg} />
        <meta name="twitter:image:src" content={PreviewImg} />
      </Helmet>
      <App />
    </>
  );
};
