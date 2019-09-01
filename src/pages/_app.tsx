/**
 * node_modules
 */
import React, { Fragment } from "react"
import App, { AppContext } from "next/app"
import Head from "next/head"

export default class extends App {
  static async getInitialProps(props: AppContext) {
    const { Component, ctx } = props
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {
      pageProps
    }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Fragment>
        <Head>
          <title>テスト</title>
        </Head>
        <Component {...pageProps} />
      </Fragment>
    )
  }
}
