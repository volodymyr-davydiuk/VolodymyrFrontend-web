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
    featuredImage {
      node {
        altText
				sourceUrl
				imageFile {
					childImageSharp {
						gatsbyImageData(layout: CONSTRAINED, quality: 90)
					}
				}
      }
    }
    gatsby_home {
			subtitle
		}
  }

`