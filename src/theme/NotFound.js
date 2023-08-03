import React from 'react';
import NotFound from '@theme-original/NotFound';
import Layout from '@theme/Layout';

export default function NotFoundWrapper(props) {
  return (
    <Layout>
      <div className="container margin-vert--xl container-404">
        <span className="page-content content-desktop">Page Not Found</span>
        <span className="page-content content-mobile"><br />Page Not Found</span>
        <span className="page-description ml-auto mr-auto">
          It seems like we can't find the page you are looking for. Let's head
          back home or try other links instead.
        </span>
        <a
          className="join-community btn-desktop"
          style={{marginTop: 45}}
          href="/"
          >Back To Home</a>
        <a
          className="join-community btn-mobile"
          style={{marginTop: 80}}
          href="/"
          >Back To Home</a>
      </div>
    </Layout>
  )
}
