/**
 * node_modules
 */
import React from "react"
import Document, { DocumentContext } from "next/document"
import { ServerStyleSheet } from "styled-components"

/**
 * layouts
 */
import DefaultLayout from "../layouts"

export default class extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    const styleSheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) => (props: any) => styleSheet.collectStyles(<App {...props} />)
      })

    return {
      ...initialProps,
      styles: [...(initialProps.styles as any), ...styleSheet.getStyleElement()],
    }
  }

  render() {
    return <DefaultLayout />
  }
}
