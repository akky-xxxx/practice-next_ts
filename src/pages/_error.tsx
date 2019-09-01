/**
 * node_modules
 */
import React, { Component, Fragment } from "react"
import { NextPageContext } from "next"
import Head from "next/head"

type Props = {
  title: string
  errorCode: number
}

class Error extends Component<Props> {
  static async getInitialProps(ctx: NextPageContext): Promise<Props> {
    const { res } = ctx
    return {
      title: `Error: ${res!.statusCode}`,
      errorCode: res!.statusCode,
    }
  }

  render() {
    return (
      <Fragment>
        <Head>
          <title>{this.props.title}</title>
        </Head>
        {this.props.errorCode}
      </Fragment>
    )
  }
}

export default Error
