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
      <h1 className={intro}>Welcome to Smokingleads.</h1>
      
        <>
          <p className={callOut}>
            We are a custom email list provider, with more than 1k lists and 3k variants
            to help you reach your ideal customers on scale.
          </p>
          <p className={callToAction}>
            Find your own custom list by searching our data for your ideal customers
          
            <a href="/search">
              <img
                src="https://smokingleads.io/find_your_ideal_customers.png"
                alt="Search for your ideal customer"
                className={deployButton}
              />
            </a>
          </p>
        </>
      
    </div>
  )
}

export default function IndexPage({ data }) {
  return (
    <Layout>
      <Hero />
      <ProductListing products={data?.shopifyCollection?.products} />
    </Layout>
  )
}
