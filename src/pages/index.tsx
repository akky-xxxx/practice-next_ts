/**
 * node_modules
 */
import React, { Component, Fragment } from "react"
import Head from "next/head"
import { connect } from "react-redux"

/**
 * actions
 */
import { decrement, increment } from "../redux/modules/counter/actions"

/**
 * components
 */
import TopComponent, { TopProps } from "../components"


type Props = {
  title: string
}

type TopPageProps = Props & TopProps

class TopPage extends Component<TopPageProps> {
  static async getInitialProps(): Promise<Props> {
    return { title: "Hello world" }
  }

  render() {
    const {
      props: {
        title,
        count,
        handleIncrement,
        handleDecrement,
      }
    } = this

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

const mapStateToProps = state => ({
  count: state.counter.count
})

const mapDispatchToProps = dispatch => ({
  handleIncrement: () => dispatch(increment()),
  handleDecrement: () => dispatch(decrement()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TopPage)
