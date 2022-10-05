import App from 'next/app'
import { withRouter } from 'next/router';
import React from 'react';

import 'windi.css'

class MyApp extends App {
  render() {
    const { pageProps } = this.props
    let { Component } = this.props as any;
    return <Component {...pageProps}></Component>
  }
}

export default withRouter(MyApp)
