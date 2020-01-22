const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`)

  const result = await graphql(
    `
      {
        postsRemark: allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                tags
                category
              }
            }
          }
        }
        tags: allMarkdownRemark {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
        categories: allMarkdownRemark {
          group(field: frontmatter___category) {
            fieldValue
          }
        }
      }    
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.postsRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  const tags = result.data.tags.group

  tags.forEach(tag => {
    createPage({
      path: `tags/${tag.fieldValue}`,
      component: path.resolve('./src/templates/tag.tsx'),
      context: {
        tag: tag.fieldValue
      }
    });
  })

const categories  = result.data.categories.group

categories.forEach(category => {
  createPage({
    path: `category/${category.fieldValue}`,
    component: path.resolve('./src/templates/category.tsx'),
    context: {
      category: category.fieldValue
    }
  });
})

}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
