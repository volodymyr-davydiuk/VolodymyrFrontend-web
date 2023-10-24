// const path = require(`path`)
//
// const mediaFields = `
//   node {
//     altText
//     uri
//   }
// `
//
// const seoFields = `
//   seo {
//     title
//     focuskw
//     metaDesc
//     metaKeywords
//     opengraphDescription
//     opengraphTitle
//     twitterDescription
//     twitterTitle
//   }
// `
// const query = `
//   query ALL_POSTS {
//     wp {
//       pages(first: 5000, where: {status: PUBLISH}) {
//         nodes {
//           title
//           uri
//           content
//         }
//       }
//       posts(first: 5000, where: {status: PUBLISH}) {
//         nodes {
//           categories {
//             nodes {
//               name
//               slug
//               termTaxonomyId
//             }
//           }
//           content
//           date
//           featuredImage {
//             ${mediaFields}
//           }
//           ${seoFields}
//           status
//           uri
//           title
//         }
//       }
//     }
//   }
// `
//
// exports.createPages = async ({ actions, graphql }) => {
//   const { data } = await graphql(`
//     ${query}
//   `)
//
//   if(!data.wp) return null
//
//   data.wp.pages.nodes.forEach(page => {
//     actions.createPage({
//       path: `${page.uri}`,
//       component: path.resolve(`./src/components/templates/post.js`),
//       context: {
//         ...page,
//         title: page.title,
//         content: page.content,
//       },
//     })
//   })
//
//   data.wp.posts.nodes.forEach(post => {
//     actions.createPage({
//       path: `/post${post.uri}`,
//       component: path.resolve(`./src/components/templates/post.js`),
//       context: {
//         ...post,
//         id: post.id,
//         slug: post.uri,
//         title: post.title,
//       },
//     })
//   })
// }

const createPages = require(`./create/createPages`);

exports.createPages = async (props) => {
  const { data: wpSettings } = await props.graphql(/* GraphQL */ `
    {
      wp {
        readingSettings {
          postsPerPage
        }
      }
    }
  `)

  const perPage = wpSettings.wp.readingSettings.postsPerPage || 10
  // await createCategories(props, { perPage })
  // await createPosts(props);
  await createPages(props);
}
