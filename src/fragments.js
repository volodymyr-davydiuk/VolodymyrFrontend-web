import { graphql } from "gatsby"

export const fragments = graphql`
 
  fragment HomeData on WP_Page {
    title
    content
    uri
    seo {
      title
      metaDesc
      metaKeywords
    }
  }

`