/**
 * node_modules
 */
import { DefaultQuery } from "next-server/router"

/**
 * store
 */
import { ReduxStoreInstance } from "../src/redux/store"

declare module "next" {
  interface NextPageContext<Q extends DefaultQuery = DefaultQuery> {
    store: ReduxStoreInstance
  }
}

declare module "next/app" {
  interface AppProps<Q extends DefaultQuery = DefaultQuery> {
    store: ReduxStoreInstance
  }
}
