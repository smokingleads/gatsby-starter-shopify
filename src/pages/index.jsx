import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import {
  container,
  intro,
  callOut,
  callToAction,
  deployButton,
} from "./index.module.css"

export const query = graphql`
  query {
    shopifyCollection(handle: { eq: "frontpage" }) {
      products {
        ...ProductCard
      }
    }
  }
`
function Hero (props) {
  return (
    <div className={container}>
      <h1 className={intro}>Welcome to Smokingleads. Your one stop shop for email lists.</h1>
      {!!process.env.GATSBY_DEMO_STORE && (
        <>
          <p className={callOut}>
            It's a custom email list site, with 1k lists and 3k variants
            to help you get the contacts you want without breaking the bank.
          </p>
          <p className={callToAction}>
            Find a list of your ideal customers here.
            <a href="/pages/search">
              <img
                src="https://www.gatsbyjs.com/deploynow.png"
                alt="Search"
                className={deployButton}
              />
            </a>
          </p>
        </>
      )}
    </div>
  )
}

export default function IndexPage({ data }) {
  return (
    <Layout>
      <Hero />
      <div className={container}>
      <h1 className={intro}>Welcome to Smokingleads. Your one stop shop for email lists.</h1>
      {!!process.env.GATSBY_DEMO_STORE && (
        <>
          <p className={callOut}>
            It's a custom email list site, with 1k lists and 3k variants
            to help you get the contacts you want without breaking the bank.
          </p>
          <p className={callToAction}>
            Find a list of your ideal customers here.
            <a href="/pages/search">
              <img
                src="https://www.gatsbyjs.com/deploynow.png"
                alt="Search"
                className={deployButton}
              />
            </a>
          </p>
        </>
      )}
    </div>
    </Layout>
  )
}
