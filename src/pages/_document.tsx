/**
 * node_modules
 */
import React from "react"
import Document, { DocumentContext } from "next/document"

/**
 * layouts
 */
import DefaultLayout from "../layouts"

export default class extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps
    }
  }

  render() {
    return <DefaultLayout />
  }
}
