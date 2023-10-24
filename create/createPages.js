const { resolve } = require(`path`);
const Parser = require(`html-react-parser`);
const ReactDOMServer = require(`react-dom/server`);

module.exports = async ({ actions, graphql }) => {

  const { data } = await graphql(/* GraphQL */ `
    query ALL_CONTENT_PAGES {
      wp {
        pages(first: 5000, where: {status: PUBLISH}) {
          nodes {
            title
            uri
            content
            id
            isFrontPage
            gatsby_page {
              pageTemplate
            }
          }
        }
      }
    }
  `);
  //console.log('WP page Query data:');
  //console.log(data);

  const { nodes } = data.wp.pages;

  // const addImageAutoAlt = (content, title) => {
  //   if (typeof content === "string") {
  //     const replace = (domNode) => {
  //       if (domNode.name ===  "img") {
  //         if (!domNode?.attribs?.alt || domNode.attribs.alt === '') {
  //           domNode.attribs.alt = title;
  //           console.log("Page: New alt is: " + domNode.attribs.alt);
  //         }
  //       }
  //     };
  //     const newContent = ReactDOMServer.renderToString(Parser(content, { replace }));
  //     return newContent;
  //   } else {
  //     return content;
  //   }
  // };

  // const addImageAutoAlt = (content, title) => {
  //   if (typeof content === "string") {
  //     const replace = (domNode) => {
  //       if (domNode.name ===  "img") {
  //         if (!domNode?.attribs?.alt || domNode.attribs.alt === "") {
  //           domNode.attribs.alt = title;
  //         }
  //       }
  //     };
  //     return ReactDOMServer.renderToString(Parser(content, { replace }));
  //   } else {
  //     return content;
  //   }
  // };

  await Promise.all(
    nodes.map(async (node, i) => {
      const currentTemplate = `./src/templates/page/${node.gatsby_page.pageTemplate}.js`;
      // let terms = [];
      // if (node?.terms?.nodes) {
      //   node.terms.nodes.map((term) => {
      //     terms.push(term.databaseId);
      //   });
      // }
      if(!node.isFrontPage) {
        await actions.createPage({
          component: resolve(currentTemplate),
          path: node.isFrontPage ? "/" : `${node.uri}`,
          context: {
            id: node.id,
            nextPage: (nodes[i - 1] || {}).id,
            previousPage: (nodes[i + 1] || {}).id,
            // terms: terms,
            // contentWithAltImages: addImageAutoAlt(node.content, node.title),
            // topTextWithAltImages: addImageAutoAlt(node.gatsby_page.topPageText, node.title),
            //relatedPosts: node?.contextualRelated?.related_ids ? node.contextualRelated.related_ids.split(",").map(Number) : [],
          },
        });
      }
    })
  );
};

