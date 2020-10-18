import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import { headData } from '../mock/data';
import '../style/main.scss';

export default () => {
  const { lang } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page not found</title>
        <html lang={lang} />
        <meta name="description" content="Page not found" />
      </Helmet>
      <section id="not-found">
        <Link className="" to="/">
          Go back
        </Link>
        <h1>
          Sorry, this path does not exist{' '}
          <span role="img" aria-label="sad emoji">
            😞
          </span>
        </h1>
      </section>
    </>
  );
};
