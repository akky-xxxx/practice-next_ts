/**
 * node_modules
 */
import React, { Component, Fragment } from "react"
import Head from "next/head"


/**
 * components
 */
import TopComponent from "../components"

type Props = {
  title: string
}

class Top extends Component<Props> {
  static async getInitialProps(): Promise<Props> {
    return { title: "Hello world" }
  }

  render() {
    return (
      <Fragment>
        <Head>
          <title>{this.props.title}</title>
        </Head>
        <TopComponent />
      </Fragment>
    )
  }
}

export default Top
