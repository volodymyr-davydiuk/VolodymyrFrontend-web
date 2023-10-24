import * as React from "react"
import Layout from "../components/shared/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"


const IndexPage = ({ data }) => {
  const { home } = data
  const { page } = home
  const { title, content, seo } = page

  return (
    <Layout>
      <Seo title={seo.title ?? process.env.SITE_NAME} description={seo.metaDesc ?? process.env.SITE_DESCRIPTION} />
      <h1>{title}</h1>
      {content && (
        <p dangerouslySetInnerHTML={{ __html: content }} />
      )}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query homeData {
    home: wp {
      page(id: "46", idType: DATABASE_ID) {
        ...HomeData
      }
    }
  }
`;
